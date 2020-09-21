let km = 0;

module.exports = {
    name: 'roma',
    description: 'Romanelli em sua Kombi com os cabelos ao vento.',
    execute(message, args) {
        message.channel.send(`Romanelli já andou ${++km}km em sua Kombi com seus cabelos ao vento.`);
    },
};