let n = 0;

module.exports = {
    name: 'julio',
    description: 'Contador do Júlio',
    execute(message, args) {
        message.channel.send(`${++n} pessoas acham que o Júlio vai esquecer que tem aula hoje, dia 29/22/2020.`);
    },
};