class Livro {
    nome: string;
    quantidade: number;

    constructor(nome:string, quantidade: number) {
        this.nome = nome;
        this.quantidade = quantidade;
    }

    verificar() {
        return ("O livro " + this.nome + " tem " + this.quantidade + " unidades");
    }

    reporLivro() {
        if(this.quantidade == 2) {
            alert("Livro atingiu a quantidade mínima")
            this.quantidade += 10;
            console.log(this.nome + " agora tem " + this.quantidade + " unidades")
        }
    }

    venderLivro() {
        if (this.quantidade > 2) {
            this.quantidade--;
        }
        else {
            this.reporLivro()
        }
        
        
    }

}
let livro1 = new Livro("Primeiro Livro", 10);
console.log(livro1)

console.log(livro1.verificar());
console.log(livro1.venderLivro());
console.log(livro1.verificar());
console.log(livro1.venderLivro());
console.log(livro1.verificar());
console.log(livro1.venderLivro());
console.log(livro1.verificar());
console.log(livro1.venderLivro());
console.log(livro1.verificar());
console.log(livro1.venderLivro());
console.log(livro1.verificar());
console.log(livro1.venderLivro());
console.log(livro1.verificar());
console.log(livro1.venderLivro());
console.log(livro1.verificar());
console.log(livro1.venderLivro());
console.log(livro1.verificar());
console.log(livro1.venderLivro());
console.log(livro1.verificar());
console.log(livro1.venderLivro());
console.log(livro1.verificar());