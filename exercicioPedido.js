"use strict";
var StatusPedido;
(function (StatusPedido) {
    StatusPedido["Aguardando"] = "Aguardando Preparo";
    StatusPedido["Preparo"] = "Em Preparo";
    StatusPedido["Entrega"] = "Saiu para Entrega";
    StatusPedido["Entrege"] = "Entregue.";
})(StatusPedido || (StatusPedido = {}));
class Pedido {
    constructor(nome, preco) {
        this.nome = nome,
            this.preco = preco;
    }
    adicionarProdutos() {
        return this.nome + "com o valor R$" + this.preco + "foi adcionado ao pedido";
    }
}
let pedidoEntrega = new Pedido(["xtudo,xdragon"], [1, 1]);
//let pedidoEntrega:StatusPedido = StatusPedido.Aguardando;
console.log(pedidoEntrega.adicionarProdutos);
