module.exports = {
    name: 'ueri',
    description: 'O que uéri acha disso?',
    execute(message, args) {
        const c = message.client.users.cache.get('310459936381468672');
        message.channel.send(`${c} O trem roda, o trem sobe, e o trem fica. É isto.`);
    },
};