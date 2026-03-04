// DESAFIO 01 - GERENCIAMENTO DE CLIENTES
var clientes = [
    { nome: 'João', email: 'joao@example.com', telefone: '123456789' },
    { nome: 'Maria', email: 'maria@example.com', telefone: '987654321' },
];
function simularPost(url, clienteBody) {
    var urlEnviada = url;
    if (urlEnviada == undefined || urlEnviada.length == 0)
        throw new Error("É necessário enviar uma URL válida.");
    if (urlEnviada != "/produtos")
        throw new Error("Endpoint GET não encontrado.");
    if (clienteBody === undefined)
        throw new Error("Você deve enviar um usuário.");
    // verificando se o cliente já existe no Array:
    var clienteEnviado = clientes.filter(function (cliente) {
        return clienteBody === cliente;
    });
    if (!clienteEnviado)
        throw new Error("Usuário já existe na lista.");
    clientes.push(clienteBody);
    return clientes;
}
var resultPost = simularPost("/produtos", { "email": "ndrfelipebraga@gmail.com", "nome": "André Braga", "telefone": "8198514-5187" });
resultPost.map(function (result) {
    console.log("Nome: ", result.nome, "- Email: ", result.email, "Telefone: ", result.telefone);
});
