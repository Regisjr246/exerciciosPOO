"use strict";
class Animal {
    constructor(nome, qtdPatas) {
        this.nome = nome;
        this.qtdPatas = qtdPatas;
    }
    apresentat() {
        console.log(" Este é um " + this.nome +
            ' com ' + this.qtdPatas + "  patas");
    }
}
class Dog extends Animal {
    constructor() {
        super("Cachorro", 4);
    }
    fazerBarulho() {
        console.log("O cachorro está latindo");
    }
}
class Cat extends Animal {
    constructor() {
        super("Gato", 4);
    }
    fazerBarulho() {
        console.log("O gato está miando");
    }
}
class Passaro extends Animal {
    constructor() {
        super('Passáro', 2);
    }
    fazerBarulho() {
        console.log("O passáro está cantando");
    }
}
const cachorro = new Dog();
cachorro.apresentat();
cachorro.fazerBarulho();
const gato = new Cat();
gato.apresentat();
gato.fazerBarulho();
const passaro = new Passaro;
passaro.apresentat();
passaro.fazerBarulho();
