module.exports = {
    name: 'duvida',
    description: 'Vale a pena responder?',
    execute(message, args) {
        message.channel.send('Se sua dúvida for técnica eu respondo, se for existencial, FODA-SE.');
    },
};