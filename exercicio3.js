"use strict";
class Estudante {
    constructor(nome, idade, notas) {
        this.nome = nome;
        this.idade = idade;
        this.notas = notas;
    }
    Media() {
        let somaNotas = 0;
        for (let i = 0; i < this.notas.length; i++) {
            somaNotas = somaNotas + this.notas[i];
        }
        let media = somaNotas / this.notas.length;
        if (media > 7) {
            return "Parabéns " + this.nome + " sua média é " + media + " e você está aprovado(a)";
        }
        else {
            return this.nome + ", sua média é " + media + " e você precisa estudar mais para melhorar seu desempenho";
        }
    }
}
let Maria = new Estudante("Maria", 20, [8, 7.5, 9.2, 6.8, 9.5]);
console.log(Maria.Media());
