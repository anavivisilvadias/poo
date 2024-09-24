// Classe base Personagem
class MitologiaGrega {
  constructor(nome, vida, forca, poder, agilidade) {
    this.nome = nome;
    this.vida = vida;
    this.forca = forca;
    this.poder = poder;
    this.agilidade = agilidade;
  }

  pular() {
    console.log(`${this.nome} realiza um pulo básico!`);
  }

  correr() {
    console.log(`${this.nome} realiza uma corrida!`);
  }
}

// Classe Zeus que herda de MitologiaGrega
class Zeus extends MitologiaGrega {
  constructor(nome, vida, forca, poder, agilidade, raio, trovao) {
    super(nome, vida, forca, poder, agilidade);
    this.raio = raio;
    this.trovao = trovao;
  }

  pular() {
    console.log(`${this.nome} faz um super pulo sobre o olimpio!`);
  }

  correr() {
    console.log(`${this.nome} faz uma corrida no olimpio!`);
  }

  criarumaTempestade() {
    console.log(`${this.nome} criar uma tempestade com ${this.trovao}!`);
  }
}

// Classe Poisedon que herda de MitologiaGrega
class Poisedon extends MitologiaGrega {
  constructor(nome, vida, forca, poder, agilidade, agua, tsunami) {
    super(nome, vida, forca, poder, agilidade);
    this.agua = agua;
    this.tsunami = tsunami;
  }

  pular() {
    console.log(`${this.nome} pula sobre as aguas!`);
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


// Criando instâncias de Zeus, Poisedon 
const zeus = new Zeus("Zeus", 100, 150, 100, 96, "Raios", "Trovoes" );
zeus.pular(); // Saída: Zeus corre no olimpio!
zeus.correr(); //Saída: Zeus corre no olimpio!
zeus.criarumaTempestade(20); // Saída: Zeus cria uma enorme tempestade!

const poisedon = new Poisedon("Poisedon", 100, 140, 95, 96, "Agua", "Tsunami");
poisedon.pular(); // Saída: Poisedon pula sobre as aguas!
poisedon.correr(); // Saída: Poisedon corre na agua!
poisedon.mexeraAgua(); // Saída: Poisedon mexer a agua!
poisedon.criarumaCatastrofe(15); // Saída: Poisedon cria uma catastrofe

