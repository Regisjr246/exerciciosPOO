  enum StatusPedido{
    Aguardando="Aguardando Preparo",
    Preparo= "Em Preparo",
    Entrega = "Saiu para Entrega",
    Entrege= "Entregue."

}


 class Pedido{

    private nome:string[];
    private preco:number[];



constructor(nome:string[], preco:number[]) {
    this.nome=nome,
    this.preco=preco
    
}



 adicionarProdutos(){
   return  this.nome + "com o valor R$"+ this.preco + "foi adcionado ao pedido";
 }


}


let pedidoEntrega=new Pedido(["xtudo,xdragon"], [1,1]);
//let pedidoEntrega:StatusPedido = StatusPedido.Aguardando;



console.log(pedidoEntrega.adicionarProdutos );