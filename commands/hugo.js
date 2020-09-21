let distancia = Number.MAX_SAFE_INTEGER;

module.exports = {
    name: 'hugo',
    description: 'Será que chega hoje?',
    execute(message, args) {
        const c = message.client.users.cache.get('450319729354211328');
        message.channel.send(`${c} Hugo está a ${--distancia} anos luz da PUC. Daqui a pouco chega.`);
    },
};