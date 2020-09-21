module.exports = {
    name: 'ixte',
    description: 'Ibiritexas',
    execute(message, args) {
        const c = message.client.users.cache.get('615328623498625034');
        message.channel.send(`${c} Ibiritexas: O município faz parte da Bacia do Paraopeba. Os principais cursos d'água são o Ribeirão Ibirité e o Córrego Capão da Serra. Há também uma lagoa de tamanho considerável: a Lagoa da Petrobrás. Ibirité também possui vários mananciais e pequenos córregos.`);
    },
};