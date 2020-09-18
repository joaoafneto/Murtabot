module.exports = {
    name: 'vota',
    description: 'Quem é o culpado?',
    execute(message, args) {
        message.channel.send(`Vota no const ${message.client.users.cache.get('376869954416541707')} que é o jão`);
    },
};