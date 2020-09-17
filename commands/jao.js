module.exports = {
    name: 'jao',
    description: 'O que jão fez?',
    execute(message, args) {
        const c = message.client.users.cache.get('376869954416541707');
        message.channel.send(`${c} "Um dia eu tava bêbado, e saí a 120 no bairro no ano novo..."`);
    },
};