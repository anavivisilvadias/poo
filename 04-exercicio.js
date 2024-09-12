class Personagem {
  constructor(nome, agilidade, altura, genero, forca) {
    // Atributos
    this.nome = nome;
    this.agilidade = agilidade;
    this.altura = altura;
    this.genero = genero;
    this.forca = forca;
  }
  //Métodos
  agilidadeEspecial() {
    console.log(`Personagem tem super  ${this.agilidade}!`);
  }
  forca() {
    console.log(`Personagem tem uma forca de  ${this.forca}!`);
  }
  poder() {
    console.log(`Personagem tem um poder de lanca  ${this.fogo}!`);
  }
}
