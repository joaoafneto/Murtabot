const { prefix } = require('./config.json');

const Discord = require('discord.js');
const fs = require('fs');
require('dotenv/config');

const client = new Discord.Client();
const cooldowns = new Discord.Collection();

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for(const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on('message', function(message) {
    client.setInterval(() => {
        const c = message.client.users.cache.get('757736116605419621');
        message.channel.send(`${c} eu quero que você vá para a puta que o pariu`);
    }, 300000);
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    const commandBody = message.content.slice(prefix.length).trim();
    const args = commandBody.split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
    if(!command) return;

    if(command.guildOnly && message.channel.type === 'dm') {
        return message.reply('I can\'t execute that command inside DMs!');
    }

    if(command.args && !args.length) {
        let reply = message.channel.send(`You didn't provide any arguments, ${message.author}!`);
        if(command.usage) {
            reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
        }
        return message.channel.send(reply);
    }
    if(!cooldowns.has(command.name)) {
        cooldowns.set(command.name, new Discord.Collection());
    }

    const now = Date.now();
    const timestamps = cooldowns.get(command.name);
    const cooldownAmount = (command.cooldown || 3) * 1000;
    if (timestamps.has(message.author.id)) {
        const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

        if (now < expirationTime) {
            const timeLeft = (expirationTime - now) / 1000;
            return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
        }
    }
    timestamps.set(message.author.id, now);
    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

    try{
        command.execute(message, args);
    }
    catch(err) {
        console.error(err);
        message.reply('There was an error executing that command!');
    }
});

client.on('ready', () => {
    console.log('Murtabot is ready!.');
});

client.login(process.env.BOT_TOKEN);