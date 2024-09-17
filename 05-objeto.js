class Pessoa {
    constructor(nome, idade, altura, peso) { // Atributos
        // Inicialização dos atributos
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
    }
    // Método
    falar() {
        console.log(`Olá, meu nome é ${this.nome}!`);
    }
}
// Objeto/Instância "pessoal" criada apartir da classe Pessoa
const pessoa = new Pessoa('Ana Vitoria', 17, 1.60, 55.95);
pessoa.falar(); // Chamada do método falar() da classe Pessoa