const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '!';

let n = 0;
let km = 0;

client.on('message', function(message) {
	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;

	const commandBody = message.content.slice(prefix.length);
	const args = commandBody.split(' ');
	const command = args.shift().toLowerCase();

	if (command === 'antonio') {
		message.channel.send('Você quis dizer: "Antônio"?');
	}
	else if (command === 'casamento') {
		message.channel.send('Você se casaria com seu cachorro?');
	}
	else if (command === 'pf') {
		message.channel.send('Paulo Fernando acabou de criar mais um buraco negro enquanto isso.');
	}
	else if (command === 'stonks') {
		message.channel.send('S T O N K S');
	}
	else if (command === 'murtabot') {
		message.channel.send('Tem uns comando aí pra usá');
	}
	else if (command === 'julio') {
		message.channel.send(`${++n} pessoas acham que o Júlio vai esquecer que tem aula hoje.`);
	}
	else if (command === 'bd') {
		message.channel.send('O tal do Lafaiete?');
	}
	else if (command === 'roma') {
		message.channel.send(`Romanelli já andou ${++km}km em sua Kombi com seus cabelos ao vento.`);
	}
	else if (command === 'limite') {
		message.channel.send('Fessô, isso é limite?');
	}
	else if (command === 'pronto') {
		message.channel.send('Estooooou pronto, capitão!');
	}
	else if (command === 'f') {
		message.channel.send('Press F to pay respects');
	}
	else if (command === 'murta') {
		const c = client.users.cache.get('337945189358370816');
		message.channel.send(`${c} Invocando esférico...`);
	}
	else if (command === 'ueri') {
		const c = client.users.cache.get('310459936381468672');
		message.channel.send(`${c} O trem roda, o trem sobe, e o trem fica. É isto.`);
	}
	else if (command === 'jao') {
		const c = client.users.cache.get('376869954416541707');
		message.channel.send(`${c} "Um dia eu tava bêbado, e saí a 120 no bairro no ano novo..."`);
	}
	/* if (command === "game") {
    message.channel.send(`O jogo sendo jogado é: `);
  }
  if (command === "setgame") {
    message.channel.send(`O jogo sendo jogado é: `);
  }*/

});

client.on('ready', () => {
	console.log('Murtabot is ready!.');
});

client.login(process.env.BOT_TOKEN);