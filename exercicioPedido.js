"use strict";
var StatusPedido;
(function (StatusPedido) {
    StatusPedido["AguardandoPreparo"] = "Aguardando Preparo";
    StatusPedido["EmPreparo"] = "Em Preparo";
    StatusPedido["SaiuParaEntrega"] = "Saiu para Entrega";
    StatusPedido["Entrege"] = "Entregue.";
    StatusPedido["ClienteAusente"] = "Cliente n\u00E3o localizado";
})(StatusPedido || (StatusPedido = {}));
class ProdutoPedido {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
}
class Pedido {
    constructor() {
        this.produtos = [];
        this.status = StatusPedido.AguardandoPreparo;
    }
    adicionarProduto(Produto) {
        this.produtos.push(Produto);
        return "  Produto adcionado com sucesso!!";
    }
    atualizarStatus(status) {
        this.status = status;
    }
    exibirStatus() {
        return this.status;
    }
    exibirProdutosDoPedidos() {
        console.log("Produtos do Pedidos:");
        for (let index = 0; index < this.produtos.length; index++) {
            console.log(" Produto:" + this.produtos[index].nome + "  R$" + this.produtos[index].preco.toFixed(2));
        }
    }
}
const produtoPedido = new ProdutoPedido("X-TUDO", 10);
const outroProdutoPedido = new ProdutoPedido("X-FRANGO", 5);
const novoPedido = new Pedido();
novoPedido.adicionarProduto(produtoPedido);
novoPedido.adicionarProduto(outroProdutoPedido);
console.log("Statudo atual do Pedido: " + novoPedido.exibirStatus());
novoPedido.atualizarStatus(StatusPedido.ClienteAusente);
console.log("Statudo atual do Pedido:" + novoPedido.exibirStatus());
novoPedido.exibirProdutosDoPedidos();
