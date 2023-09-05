class ContaBancaria {

    titular: string;
    private saldo: number;



    constructor(titular: string, saldo: number) {

        this.titular = titular;
        this.saldo = saldo

    }




    Saldo() {

        return " A conta bancária chamada: minhaConta com o titular:" + this.titular + " contendo um saldo inicial de R$" + this.saldo + " foi criada com sucesso"

    }


    deposito(deposito: number) {
this.saldo= this.saldo+deposito

        return "O depósito de R$" + deposito + " foi realizado com sucesso, agora seu saldo atual é " + this.saldo + " reais"

    }



    saque(saque: number) {

        this.saldo=this.saldo - saque
        if (saque>this.saldo){
            return "Saque Negado, seu saldo é de " + (this.saldo+saque)
        } else
        { return "Saque realizado, agora seu saldo é R$ " + this.saldo} 




       
}
    






}


let joao = new ContaBancaria("Joao", 1000);
let thorss =new ContaBancaria("Thorss", 2000);
let eduardoMecanico =new ContaBancaria("Eduardo Mecanico", 2000);


/*João*/
console.log(joao.Saldo());
console.log(joao.deposito(500));
console.log(joao.saque(200));
console.log(joao.saque(100000));

/*Thorss*/
console.log("");
console.log(thorss.Saldo());
console.log(thorss.deposito(500));
console.log(thorss.saque(200));
console.log(thorss.saque(100000));


/*Eduardo Mecanico*/
console.log("");
console.log(eduardoMecanico.Saldo());
console.log(eduardoMecanico.deposito(500));
console.log(eduardoMecanico.saque(200));
console.log(eduardoMecanico.saque(100000));