class ProdutoLoja{
nome:string;
preco:number
constructor( nomeProduto:string, precoProduto:number){
this.nome = nomeProduto;
this.preco=precoProduto;
}}

















class  CarrinhoDeCompora {
PordutoCarrinho:ProdutoLoja[]=[];
constructor(){
}




adicionarProduto(produto:ProdutoLoja){
this.PordutoCarrinho.push(produto);
}




excluirPorduto(nomeDoProduto:string){
this.PordutoCarrinho.filter((item)=>item.nome!==nomeDoProduto);
}


excluirPorduto2(produto:ProdutoLoja){
    this.PordutoCarrinho.filter((item)=>item.nome!==produto.nome);
    }
    

calcularValorTotal(){
    let soma = 0;
    for(let i= 0; i< this.PordutoCarrinho.length; i++){
      soma= soma +  this.PordutoCarrinho[i].preco;
    }

return soma.toFixed(2);

}



exibirProdutos(){
console.log("Produtos do Carrinho:");
for (let i=0; i<this.PordutoCarrinho.length;i++){
    console.log("Produto:"+ this.PordutoCarrinho[i].nome + "R$" + this.PordutoCarrinho[i].preco.toFixed(2));
}


//const nomeDoProdutos= this.PordutoCarrinho.map(
  //  item=> "Pordutos:" + item.nome + "R$" + item.preco.toFixed((2));
    //console.log(nomeDoProdutos.join(","));
//)



}



}


class  Loja{
produtosDoEstoque: ProdutoLoja[]=[];
carrinhoDeComprar = new CarrinhoDeCompora();


adicionarProdutoAoEstoque(produto:ProdutoLoja){
this.produtosDoEstoque.push(produto);
}


removerProdutoDoEstoque(produto:ProdutoLoja){
    this.produtosDoEstoque=this.produtosDoEstoque.filter(item=> item.nome !== produto.nome)
}





adicionarProdutoAoCarrinho(produto:ProdutoLoja){
const produtoEncontrado = this.produtosDoEstoque.find(item=>item.nome ==produto.nome);


if(produtoEncontrado){
    this.carrinhoDeComprar.adicionarProduto(produtoEncontrado);
    return "Produto adicionado ao carrinho de comprar";
}
else{
    return "Produto não encontrado ao estoque da loja"
}
}




removeverProdutoCarrinho(produto: ProdutoLoja){


//this.carrinhoDeComprar.excluirPorduto(produto.nome);
this.carrinhoDeComprar.excluirPorduto2(produto);

}

exibirProdutoCariinho(){
this.carrinhoDeComprar.exibirProdutos();
}
}

//Criando Produtos
const ProdutoLoja1 = new ProdutoLoja("camiseta1",29.99);
const ProdutoLoja2 = new ProdutoLoja("camiseta2",29.99);
const ProdutoLoja3 = new ProdutoLoja("camiseta3",29.99);
const ProdutoLoja4 = new ProdutoLoja("camiseta4",29.99);
const ProdutoLoja5 = new ProdutoLoja("camiseta5",29.99);

//Criando a Loja
const minhaLoja = new Loja();

//adicionando produto ao estoque

minhaLoja.adicionarProdutoAoEstoque(ProdutoLoja1);
minhaLoja.adicionarProdutoAoEstoque(ProdutoLoja2);
minhaLoja.adicionarProdutoAoEstoque(ProdutoLoja3);
minhaLoja.adicionarProdutoAoEstoque(ProdutoLoja4);
minhaLoja.adicionarProdutoAoEstoque(ProdutoLoja5);



//adicionando produto carrinho

minhaLoja.adicionarProdutoAoCarrinho(ProdutoLoja1);
minhaLoja.adicionarProdutoAoCarrinho(ProdutoLoja2);
minhaLoja.adicionarProdutoAoCarrinho(ProdutoLoja3);
minhaLoja.adicionarProdutoAoCarrinho(ProdutoLoja4);
minhaLoja.adicionarProdutoAoCarrinho(ProdutoLoja5);

//Remover Produto do Carrinho de Compra
minhaLoja.removeverProdutoCarrinho(ProdutoLoja1);


//Remover Produto do Estoque da Loja
minhaLoja.removerProdutoDoEstoque(ProdutoLoja1);

//exibindo Produto do carrinho de compra
minhaLoja.exibirProdutoCariinho();

//Exibindo valor total do carrinho
console.log("Total de carrinho de compra: R$"
+ minhaLoja.carrinhoDeComprar.calcularValorTotal());


