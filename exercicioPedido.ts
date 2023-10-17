enum StatusPedido {
  AguardandoPreparo = "Aguardando Preparo",
  EmPreparo = "Em Preparo",
  SaiuParaEntrega = "Saiu para Entrega",
  Entrege = "Entregue.",
ClienteAusente="Cliente não localizado"
}


class ProdutoPedido {

  nome: string;
  preco: number;
  constructor(nome: string, preco: number) {
    this.nome = nome;
    this.preco = preco;
  }


}


class Pedido {

  //private produtos:{nome:string, preco:number};

  private produtos: ProdutoPedido[];
  private status: StatusPedido;

  constructor() {
    this.produtos = [];
    this.status = StatusPedido.AguardandoPreparo;
  }

  adicionarProduto(Produto:ProdutoPedido){
    this.produtos.push(Produto);
    return "  Produto adcionado com sucesso!!"
  }

atualizarStatus(status : StatusPedido){
  this.status = status
}


exibirStatus(){
return this.status;
}


exibirProdutosDoPedidos(){
  console.log("Produtos do Pedidos:");
  for (let index=0; index<this.produtos.length; index++){
    console.log(" Produto:" +this.produtos[index].nome + "  R$" + this.produtos[index].preco.toFixed(2));
  }
}



}

const produtoPedido = new ProdutoPedido("X-TUDO",10);
const outroProdutoPedido = new ProdutoPedido("X-FRANGO",5);
const novoPedido=new Pedido();
novoPedido.adicionarProduto(produtoPedido);
novoPedido.adicionarProduto(outroProdutoPedido)
console.log("Statudo atual do Pedido: " + novoPedido.exibirStatus());
novoPedido.atualizarStatus(StatusPedido.ClienteAusente);
console.log("Statudo atual do Pedido:"+ novoPedido.exibirStatus());
novoPedido.exibirProdutosDoPedidos();






