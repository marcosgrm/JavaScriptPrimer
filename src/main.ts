const tamanhoMaximo = 10;

class Pessoa{
    nome: string;
    nascimento: Date;
    constructor(nome: string, nascimento: Date){
        this.nome = nome;
        this.nascimento = nascimento;
    }
}

class Estudante extends Pessoa {
    matricula: any;
    constructor(nome: string, nascimento:Date, matricula:any){
        super(nome, nascimento);
        this.matricula = matricula;
    }
}

let e = new Estudante("Sandy", new Date("04/15/2014"), "123-A");
let dataFormatada = e.nascimento.toLocaleDateString();
console.log(e.nome + " " +dataFormatada);