"use strict";
class ContaBancaria2 {
    constructor(numeroConta, saldoInicial, titular) {
        this.numeroConta = numeroConta;
        this.saldoIncial = saldoInicial;
        this.titular = titular;
    }
}
//CONTA CORRENTE
class ContaCorrente extends ContaBancaria2 {
    constructor(chequeEspecial) {
        super("000 000 001", 1000, "Reginaldo");
        this.chequeEspecial = chequeEspecial;
    }
    consultarSaldo() {
        return this.saldoIncial;
    }
    sacar(valor) {
        this.saldoIncial = this.saldoIncial - valor;
        if (this.saldoIncial <= this.chequeEspecial) {
            console.log(this.saldoIncial);
        }
        else {
            console.log("vc só pode sacar " + this.chequeEspecial);
        }
    }
    depositar(valor) {
        this.saldoIncial = this.saldoIncial + valor;
    }
}
class ContaPoupanca extends ContaBancaria2 {
    constructor() {
        super("000 000 001", 1000, "Reginaldo");
    }
    consultarSaldo() {
        return this.saldoIncial;
    }
    sacar(valor) {
        this.saldoIncial = this.saldoIncial - valor;
    }
    depositar(valor) {
        this.saldoIncial = this.saldoIncial + valor;
    }
    calcularRendimentoAnual(taxa) {
        return ((((this.saldoIncial * 12) * taxa) / 100) + this.saldoIncial);
    }
}
//CONTA CORRENTE
const torsss = new ContaCorrente(1000);
console.log("seu saldo é de " + torsss.consultarSaldo());
console.log("vc sacou" + torsss.sacar(500));
console.log(torsss.consultarSaldo());
console.log(torsss.depositar(20));
console.log(torsss.consultarSaldo());
//CONTA POUPANÇA
const regi = new ContaPoupanca();
console.log(torsss.consultarSaldo());
