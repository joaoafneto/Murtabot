module.exports = {
    name: 'hugo',
    description: 'Tony Stonks',
    execute(message, args) {
        const c = message.client.users.cache.get('450319729354211328');
        message.channel.send(`${c} Acessando portal de acesso à Bicas`);
    },
};