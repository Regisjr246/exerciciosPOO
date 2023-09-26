"use strict";
const pessoa = new class {
    constructor() {
        this.primeiroNome = "José";
        this.ultimoNome = " da Silva";
    }
    getNomeCompleto() {
        return this.primeiroNome + "" + this.ultimoNome;
    }
};
console.log(pessoa.getNomeCompleto());
const treinadorPessoal = new class {
    constructor() {
        this.rotina = [];
    }
    adicionarExercicios(nome, duracao) {
        this.rotina.push({ nome, duracao });
    }
    calcularTempTotal() {
        let soma = 0;
        this.rotina.forEach(item => soma += item.duracao);
        // seegunda forma de realziar a soma:: this.rotina.forEach(item=>soma + item.duracao);
        return soma;
    }
};
treinadorPessoal.adicionarExercicios("Corrida", 30);
treinadorPessoal.adicionarExercicios("agachamento", 20);
treinadorPessoal.adicionarExercicios("flexao", 15);
console.log("Tempo total necessário para rotina:" + treinadorPessoal.calcularTempTotal() + "em minutos");
