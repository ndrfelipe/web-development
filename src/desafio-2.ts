// DESAFIO 02 - GERENCIAMENTO DE CLIENTES

type Cliente = {
    "nome":string,
    "email":string,
    "telefone":string
}


let clientes:Cliente[]= [
    { nome: 'João', email: 'joao@example.com', telefone: '123456789' },
    { nome: 'Maria', email: 'maria@example.com', telefone: '987654321' },
];

function simularPost(url:string, clienteBody:Cliente):Cliente[]{
    let urlEnviada:string = url;

    if (urlEnviada == undefined || urlEnviada.length == 0) throw new Error("É necessário enviar uma URL válida.");

    if (urlEnviada != "/produtos") throw new Error("Endpoint GET não encontrado.");
    
    if (clienteBody === undefined) throw new Error("Você deve enviar um usuário.");

    // verificando se o cliente já existe no Array:
    const clienteEnviado = clientes.filter(
        (cliente) => {
            return clienteBody === cliente;
        }
    )
    if (!clienteEnviado) throw new Error("Usuário já existe na lista.")

    clientes.push(clienteBody);

    return clientes;
}

const resultPost:Cliente[] = simularPost("/produtos", {"email":"ndrfelipebraga@gmail.com", "nome":"André Braga", "telefone":"8198514-5187"});

resultPost.map(
    (result) => {
        console.log("Nome: ", result.nome, "- Email: ", result.email, "Telefone: ", result.telefone);
    }
)
