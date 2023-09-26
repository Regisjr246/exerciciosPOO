abstract class ContaBancaria2 {
    protected numeroConta: string;
    protected saldoIncial: number;
    protected titular: string;

    constructor(numeroConta: string, saldoInicial: number, titular: string) {

        this.numeroConta = numeroConta;
        this.saldoIncial = saldoInicial;
        this.titular = titular;
    }

    abstract depositar(valor: number): void
    abstract sacar(valor: number): void
    abstract consultarSaldo(): number
   // abstract calcularRendimentoAnual(taxa:  number): number


}

//CONTA CORRENTE



class ContaCorrente extends ContaBancaria2 {
    protected chequeEspecial: number;

    constructor(chequeEspecial: number) {
        super("000 000 001", 1000, "Reginaldo")
        this.chequeEspecial = chequeEspecial;
    }

    consultarSaldo(): number {
        return this.saldoIncial
    }

    sacar(valor: number): void {

        this.saldoIncial = this.saldoIncial - valor
        if (this.saldoIncial <= this.chequeEspecial) { console.log(this.saldoIncial) } else {
            console.log("vc só pode sacar " + this.chequeEspecial)
        }
    }

    depositar(valor: number): void {
        this.saldoIncial = this.saldoIncial + valor
    }
}


class ContaPoupanca extends ContaBancaria2 {

    constructor() {
        super("000 000 001", 1000, "Reginaldo")

    }

    consultarSaldo(): number {
        return this.saldoIncial
    }

    sacar(valor: number): void {

        this.saldoIncial = this.saldoIncial - valor
    }

    depositar(valor: number): void {
        this.saldoIncial = this.saldoIncial + valor
    }

    calcularRendimentoAnual(taxa: number): number {
        return ((((this.saldoIncial * 12) * taxa) / 100) + this.saldoIncial)
    }
}





//CONTA CORRENTE
const torsss = new ContaCorrente(1000,)
console.log("seu saldo é de " + torsss.consultarSaldo())
console.log("vc sacou" + torsss.sacar(2000))
console.log(torsss.consultarSaldo())
console.log(torsss.depositar(20))
console.log(torsss.consultarSaldo())



//CONTA POUPANÇA
const regi=new
console.log(torsss.consultarSaldo())

