abstract class Funcionario2 {
    protected nome: string;
    protected salario: number;

    constructor(nome: string, salario: number) {
        this.nome = nome;
        this.salario = salario;
    }

    abstract calcularSalarioMensal(): number;



}
//--------------------------------------------------------------
//GERENTE
class Gerente extends Funcionario2 {
    constructor() {
        super("REgi", 2000);
    }
    calcularSalarioMensal(): number {
        this.salario = (this.salario * 0.10 + this.salario)
        return this.salario
    }
//-------------------------------------------------------------


//----------------------------------------------------------------
//DESENVOLVEDOR
}

class Desenvolvedor extends Funcionario2 {
    constructor() {
        super("REgi", 2000);
    }
    calcularSalarioMensal(): number {

        return this.salario
    }
}
//-----------------------------------------------------------------


const mike = new Gerente();
console.log("O salário do gerente é" + mike.calcularSalarioMensal())


const gg = new Desenvolvedor();
console.log("O salário do desenvolvedor é" + gg.calcularSalarioMensal())

