let distancia = Number.MAX_SAFE_INTEGER;

module.exports = {
    name: 'kombi',
    description: 'Invoca esse garai',
    execute(message, args) {
        message.channel.send('@everyone' + 'Chamando a todos os passageiros da kombi urgentemente.');
    },
};