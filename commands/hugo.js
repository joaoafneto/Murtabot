module.exports = {
    name: 'hugo',
    description: 'God',
    execute(message, args) {
        const c = message.client.users.cache.get('450319729354211328');
        message.channel.send(`${c} Amém`);
    },
};