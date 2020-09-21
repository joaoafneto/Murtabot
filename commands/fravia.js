let crushes = 0;

module.exports = {
    name: 'fravia',
    description: 'Quantos crushes a Frávia já tem?',
    execute(message, args) {
        const c = message.client.users.cache.get('689210077860593778');
        message.channel.send(`${c} Frávia tem agora ${++crushes} crushes`);
    },
};