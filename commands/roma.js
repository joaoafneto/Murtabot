let km = 0;

module.exports = {
    name: 'antonio',
    description: 'Corretor automático',
    execute(message, args) {
        message.channel.send(`Romanelli já andou ${++km}km em sua Kombi com seus cabelos ao vento.`);
    },
};