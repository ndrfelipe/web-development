// DESAFIO 01 - GERENCIAMENTO DE PRODUTOS
// a. **Cenário:** Imagine que você está construindo um sistema de gerenciamento de produtos. Um endpoint GET **`/produtos`** deve retornar todos os produtos disponíveis no sistema. Além disso, o sistema deve permitir a filtragem de produtos por categoria e preço mínimo.
// b. **Desafio:** Implemente a função **`simularGET`** de forma que ela receba a URL **`/produtos`** e um objeto contendo as queries **`categoria`** e **`precoMinimo`**, e retorne uma lista de produtos filtrados com base nos critérios especificados.
var produtos = [
    { id: 1, nome: 'Produto 1', categoria: 'Eletrônicos', preco: 100 },
    { id: 2, nome: 'Produto 2', categoria: 'Roupas', preco: 50 },
    { id: 3, nome: 'Produto 3', categoria: 'Eletrônicos', preco: 200 },
    { id: 4, nome: 'Produto 4', categoria: 'Livros', preco: 30 },
];
function simularGet(url, paramns) {
    var listaProdutos = [];
    var urlEnviada = url;
    if (urlEnviada == undefined || urlEnviada.length == 0)
        throw new Error("É necessário enviar uma URL válida.");
    if (urlEnviada != "/produtos")
        throw new Error("Endpoint GET não encontrado.");
    if (paramns === undefined)
        return produtos;
    var parametros = paramns;
    listaProdutos = produtos.filter(function (produto) {
        return produto.categoria === parametros.categoria || produto.preco === parametros.precoMinimo;
    });
    return listaProdutos;
}
var url = "/produtos";
var parametros = {};
var result = simularGet(url);
result.map(function (result) { return console.log("ID: ", result.id, "- Produto: ", result.nome, "Categoria: ", result.categoria, "Preço: ", result.preco); });
