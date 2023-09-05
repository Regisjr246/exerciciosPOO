"use strict";
class Evento {
    constructor(nome, data, horario) {
        this.nome = nome;
        this.data = data;
        this.horario = horario;
    }
}
class Agenda {
    constructor() {
        this.eventos = [];
    }
    criar(evento) {
        this.eventos.push(evento);
    }
    listarEventos() {
        console.log("Meu(s) evento(s) ");
        for (let i = 0; i < this.eventos.length; i++) {
            console.log(this.eventos[i].nome + " no dia " + this.eventos[i].data + " às " + this.eventos[i].horario);
        }
    }
    apagar(evento) {
        this.eventos = this.eventos.filter(item => item.nome != evento.nome);
    }
}
const evento1 = new Evento("show de rock", "10", "23h");
const evento2 = new Evento("aniversário da prima", "10", "20h");
const evento3 = new Evento("encontro as cegas", "31", "00h");
const meusEventos = new Agenda();
meusEventos.criar(evento1);
meusEventos.criar(evento2);
meusEventos.criar(evento3);
console.log(meusEventos.listarEventos());
console.log("");
console.log(meusEventos.apagar(evento3));
console.log(meusEventos.listarEventos());
