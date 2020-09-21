let horas = 5;

module.exports = {
    name: 'hugo',
    description: 'Tony Stonks',
    execute(message, args) {
        const c = message.client.users.cache.get('450319729354211328');
        message.channel.send(`${c} Tempo para chegar à PUC: ${++horas} horas.`);
    },
};