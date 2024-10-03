class MitologiaGrega {
  constructor(nome, vida, forca, agilidade, peso, poder, altura, origem, genero,arma) {
    this.nome = nome;
    this.vida = vida;
    this.forca = forca;
    this.agilidade = agilidade;
    this.peso = peso;
    this.poder = poder;
    this.altura = altura;
    this.origem = origem;
    this.genero = genero;
    this.arma = arma;
  }
  // Simulação de sobrecarga
  correr(...args) {
    if (args.length === 0) {
      console.log(`${this.nome} realiza uma corrida!`);
    } else if (args.length === 1) {
      const arma = args[0];
      console.log(`${this.nome} corre com o ${arma}!`);
    } else if (args.length === 2) {
      const [tridente, rajado] = args;
      if (rajado) {
        console.log(`${this.nome} ataca ${tridente} com um rajado!`);
      } else {
        console.log(`${this.nome} ataca ${tridente} sem rajado!`);
      }
    } else {
      console.log("Número de argumentos não suportado.");
    }
  }
 pular() {
    console.log(`${this.nome} pula sobre as aguas!`);
  }
}
  // Classe Poisedon que herda de MitologiaGrega
  class Poisedon extends MitologiaGrega {
  constructor(nome, vida, forca, agilidade, peso, poder, altura, origem, genero, arma, agua, tsunami) {
    super(nome, vida, forca, agilidade, peso, poder, altura, origem, genero, arma);
    this.agua = agua;
    this.tsunami = tsunami;
  }

  correr() {
    console.log(`${this.nome} corre na agua!`);
  }

  mexeraAgua() {
    console.log(`${this.nome} cria um enorme ${this.tsunami}!`);
  }

  criarumaCatastrofe() {
    console.log(`${this.nome} cria uma catastrofe com ${this.agua}!`);
  }
}

// Classe Zeus que herda de MitologiaGrega
class Zeus extends MitologiaGrega {
  constructor(nome, vida, forca, poder, agilidade, raio, trovao) {
    super(nome, vida, forca, poder, agilidade);
    this.raio = raio;
    this.trovao = trovao;
  }

  correr() {
    console.log(`${this.nome} faz uma corrida no olimpio!`);
  }

  criarumaTempestade() {
    console.log(`${this.nome} criar uma tempestade com ${this.trovao}!`);
  }

  fazerchover
  console
}