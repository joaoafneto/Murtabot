module.exports = {
    name: 'murta',
    description: 'Invocar o Murta',
    execute(message, args) {
        const c = message.client.users.cache.get('337945189358370816');
        message.channel.send(`${c} Invocando esférico...`);
    },
};