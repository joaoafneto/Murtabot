const Discord = require('discord.js');
const fs = require('fs');
require('dotenv/config');

const client = new Discord.Client();

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for(const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

const prefix = '!';

client.on('message', function(message) {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();

    if(!client.commands.has(command)) return;
    try{
        client.commands.get(command).execute(message, args);
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