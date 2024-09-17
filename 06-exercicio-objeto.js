class Personagem {
  constructor(nome, agilidade, altura, genero, forca, poder) {
    // Atributos
    this.nome = nome;
    this.agilidade = agilidade;
    this.altura = altura;
    this.genero = genero;
    this.forca = forca;
    this.poder = poder;
  }
  //Métodos
  agilidadeEspecial() {
    console.log(`Personagem tem super  ${this.agilidade}!`);
  }
  mostrarForca() {
    console.log(`Personagem tem uma forca de  ${this.forca}!`);
  }
  mostrarPoder() {
    console.log(`Personagem tem um poder de lanca  ${this.poder}!`);
  }
}
// Objeto/Instância "pessoal" criada apartir da classe Pessoa
const personagem = new Personagem('Carolina', 50, 1.70, "f", 95, 'fogo');
personagem.agilidadeEspecial();
personagem.mostrarForca();
personagem.mostrarPoder(); 