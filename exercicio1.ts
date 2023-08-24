class Produto {
    nome: string;
    preco: number;




    constructor(nome: string, preco: number) {
        this.nome = nome;
        this.preco = preco;


    }

   
   

    Exibir() {
        return "Produto " + this.nome + ", Preço: R$" + this.preco
    }



    desconto(desconto: number) {
        console.log("Desconto é de " + desconto + "%." + " Novo preço é  R$" + (this.preco - (this.preco / 100) * desconto))

    }

}


let xiomi = new Produto("Xiomi", 100);
let sansung = new Produto("Sansung", 100);
let ifone = new Produto("Ifone", 100);



console.log(xiomi.Exibir());
console.log(xiomi.desconto(10));

console.log(sansung.Exibir());
console.log(sansung.desconto(50));

console.log(ifone.Exibir());
console.log(ifone.desconto(10));