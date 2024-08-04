const messages = [
    {
        user: "Usuario",
        body: "Me gusta este mensaje gigantísimo",
        added: new Date(),
        id: "0",
    },
    {
        user: "Usuario",
        body: "Me gusta este mensaje gigantísimo",
        added: new Date(),
        id: "1",
    },
    {
        user: "Usuario",
        body: "Me gusta este mensaje gigantísimo",
        added: new Date(),
        id: "2",
    },
    {
        user: "Usuario",
        body: "Me gusta este mensaje gigantísimo",
        added: new Date(),
        id: "3",
    },
    {
        user: "Usuario",
        body: "Me gusta este mensaje gigantísimo",
        added: new Date(),
        id: "4",
    },
    {
        user: "Loco Chaves",
        body: "Solamente 2 pesos mexicano",
        added: new Date(),
        id: "5",
    },
];

function addToMessages(newMessage) {
    messages.unshift(newMessage);
}

function getMessageById(messageId) {
    return messages.find(message => message.id === messageId);
}

module.exports = {
    messages,
    addToMessages,
    getMessageById
};