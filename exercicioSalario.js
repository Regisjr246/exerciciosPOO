"use strict";
class Funcionario2 {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }
}
//--------------------------------------------------------------
//GERENTE
class Gerente extends Funcionario2 {
    constructor() {
        super("REgi", 2000);
    }
    calcularSalarioMensal() {
        this.salario = (this.salario * 0.10 + this.salario);
        return this.salario;
    }
}
class Desenvolvedor extends Funcionario2 {
    constructor() {
        super("REgi", 2000);
    }
    calcularSalarioMensal() {
        return this.salario;
    }
}
//-----------------------------------------------------------------
const mike = new Gerente();
console.log("O salário do gerente é" + mike.calcularSalarioMensal());
const gg = new Desenvolvedor();
console.log("O salário do desenvolvedor é" + gg.calcularSalarioMensal());
