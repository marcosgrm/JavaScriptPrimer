const tamanhoMaximo = 10;

class Pessoa{
    private _nome: string;

    get nome(): string{
        return this._nome;
    }

    set nome(novoNome: string){
        if(novoNome && novoNome.length > tamanhoMaximo){
            throw new Error("o nome deve ter até " +tamanhoMaximo +" caracteres");
        }
        this._nome = novoNome;
    }
}

let pessoa = new Pessoa();
pessoa.nome = "Marco Polooooooooooo";
console.log(pessoa.nome);