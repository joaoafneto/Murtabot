module.exports = {
    name: 'xoce',
    description: 'Julio Feelings',
    execute(message, args) {
        const c = message.client.users.cache.get('747602724719165520');
        message.channel.send(`${c} FQZ.`);
    },
};