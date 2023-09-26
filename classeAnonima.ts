const pessoa = new class{
    private primeiroNome ="José";
    private ultimoNome= " da Silva";
    getNomeCompleto(){
        return this.primeiroNome + "" +this.ultimoNome;
    }
}

console.log(pessoa.getNomeCompleto());


const treinadorPessoal = new class{
    private rotina: {nome:string, duracao:number}[]=[]

    adicionarExercicios(nome:string, duracao:number):void{
        this.rotina.push({nome,duracao});
    }


    calcularTempTotal():number{
        let soma=0;
        this.rotina.forEach(item=>soma += item.duracao);
       // seegunda forma de realziar a soma:: this.rotina.forEach(item=>soma + item.duracao);
        return soma;
    }
    
}



treinadorPessoal.adicionarExercicios("Corrida",30);
treinadorPessoal.adicionarExercicios("agachamento",20);
treinadorPessoal.adicionarExercicios("flexao",15);
console.log("Tempo total necessário para rotina:"+ treinadorPessoal.calcularTempTotal()+ "em minutos");


