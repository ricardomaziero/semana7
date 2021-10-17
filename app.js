var Livro = /** @class */ (function () {
    function Livro(nome, quantidade) {
        this.nome = nome;
        this.quantidade = quantidade;
    }
    Livro.prototype.verificar = function () {
        return ("O livro " + this.nome + " tem " + this.quantidade + " unidades");
    };
    Livro.prototype.reporLivro = function () {
        if (this.quantidade == 2) {
            alert("Livro atingiu a quantidade mínima");
            this.quantidade += 10;
            console.log(this.nome + " agora tem " + this.quantidade + " unidades");
        }
    };
    Livro.prototype.venderLivro = function () {
        if (this.quantidade > 2) {
            this.quantidade--;
        }
        else {
            this.reporLivro();
        }
    };
    return Livro;
}());
var livro1 = new Livro("Primeiro Livro", 10);
console.log(livro1);
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
