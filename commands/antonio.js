module.exports = {
    name: 'antonio',
    description: 'Corretor automático',
    execute(message, args) {
        message.channel.send('Você quis dizer: Antônio?');
    },
};