// Classe Base mitologiaGrega
class MitologiaGrega {
  // Encapsulando os atributos com #, tornando-os privados
  #nome;
  #vida;
  #forca;
  #agilidade;
  #peso;
  #poder;
  #altura;
  #origem;
  #genero;
  #arma;

  // Método Construtor
  constructor(nome, vida, forca, agilidade, peso, poder, altura, origem, genero, arma) {
    this.#nome = nome;
    this.#vida = vida;
    this.#forca = forca;
    this.#agilidade = agilidade;
    this.#peso = peso;
    this.#poder = poder;
    this.#altura = altura;
    this.#origem = origem;
    this.#genero = genero;
    this.#arma = arma;
  }
  // Métodos Setters e Setters
  // Métodos Getter e Setter para o atributo nome
  get nome() {
    return this.#nome;
  }
  set nome(nome) {
    this.#nome = nome;
  }
  // Métodos Getter e Setter para o atributo vida
  get vida() {
    return this.#vida;
  }
  set vida(vida) {
    this.#vida = vida;
  }
  // Métodos Getter e Setter para o atributo forca
  get forca() {
    return this.#forca;
  }
  set forca(forca) {
    this.#forca = forca;
  }
  // Métodos Getter e Setter para o atributo vida
  get agilidade() {
    return this.#agilidade;
  }
  set agilidade(agilidade) {
    this.#agilidade = agilidade;
  }
  // Métodos Getter e Setter para o atributo peso
  get peso() {
    return this.#peso;
  }
  set peso(peso) {
    this.#peso = peso;
  }
  // Métodos Getter e Setter para o atributo poder
  get poder() {
    return this.#poder;
  }
  set poder(poder) {
    this.#poder = poder;
  }
  // Métodos Getter e Setter para o atributo altura
  get altura() {
    return this.#altura;
  }
  set altura(altura) {
    this.#altura = altura;
  }
  // Métodos Getter e Setter para o atributo origem
  get origem() {
    return this.#origem;
  }
  set origem(origem) {
    this.#origem = origem;
  }
  // Métodos Getter e Setter para o atributo gênero
  get genero() {
    return this.#genero;
  }
  set genero(genero) {
    this.#genero = genero;
  }
  // Métodos Getter e Setter para o atributo arma
  get arma() {
    return this.#arma;
  }
  set arma(arma) {
    this.#arma = arma;
  }

  // Métodos
  // Simulando sobrecarga com rest parameter
  atacar(...args) {
    if (args.length === 0) {
      console.log(`${this.nome} realiza um ataque normal!`);
    } else if (args.length === 1) {
      console.log(`${this.nome} atacou com um poder de ${args[0]}!`);
    } else if (args.length === 2) {
      console.log(
        `${this.nome} usou ${args[1]} e atacou com ${args[0]} de poder!`
      );
    } else {
      console.log("Número inválido de argumentos.");
    }
  }
  defesa() {
    console.log(
      `${this.nome} se defendeu com ${this.#forca * 2} pontos de defesa!`
    );
  }
  receberDano(dano) {
    this.vida -= dano;
    console.log(
      `${this.nome} recebeu ${dano} de dano. Vida restante: ${this.vida}`
    );
  }
}

// Classe derivada - Zeus
class Zeus extends MitologiaGrega {
  #raio;
  #trovao;
  constructor(  nome, vida, forca, agilidade, peso, poder, altura, origem, genero, arma, raio, trovao) {
    super( nome, "Zeus", vida, forca, agilidade, peso, poder, altura, origem, genero, arma);
    this.raio = raio;
    this.trovao = trovao;
  }
  // Métodos Getter e Setter para o atributo raio
  get raio() {
    return this.#raio;
  }
  set raio(raio) {
    this.#raio = raio;
  }

  // Métodos Getter e Setter para o atributo trovao
  get trovao() {
    return this.#trovao;
  }
  set trovao(trovao) {
    this.#trovao = trovao;
  }

  // Sobrescrevendo o método atacar
  atacar() {
    console.log(
      `${this.nome} ataca silenciosamente`);
  }

  // Método específico
  criarUmaTempestade() {
    console.log(`${this.nome} criar uma tempestade com ${this.trovao}!`);
  }
}

// Classe derivada - Poseidon
class Poseidon extends MitologiaGrega {
  #agua;
  #tsunami;
  constructor(nome, vida, forca, agilidade, peso, poder, altura, origem, genero, arma, agua, tsunami) {
    super(nome, "Poseidon", vida, forca, agilidade, peso, poder, altura, origem, genero, arma);
    this.agua = agua;
    this.tsunami = tsunami;
  }
  // Métodos Getter e Setter para o atributo agua
  get agua() {
    return this.#agua;
  }
  set agua(agua) {
    this.#agua = agua;
  }

  // Métodos Getter e Setter para o atributo tsunami
  get tsunami() {
    return this.#tsunami;
  }
  set tsunami(tsunami) {
    this.#tsunami = tsunami;
  }

  // Sobrescrevendo o método defesa
  defesa() {
    console.log(
      `${this.nome} se defendeu com um enorme tsunami de categoria (${this.#tsunami})`
    );
  }

  // Método específico
  criarUmaCatastrofe() {
    console.log(`${this.nome} cria uma catastrofe com ${this.agua}!`);
  }
}

// Classe derivada - Ares
class Ares extends MitologiaGrega {
  #guerra;
  #bruto;
  constructor( nome, vida, forca, agilidade, peso, poder, altura, origem, genero, arma, guerra, bruto) {
    super( nome, "Ares", vida, forca, agilidade, peso, poder, altura, origem, genero, arma);
    this.guerra = guerra; // Atributo específico
    this.bruto = bruto; // Atributo específico
  }
  // Métodos Getter e Setter para o atributo guerra
  get guerra() {
    return this.#guerra;
  }
  set guerra(guerra) {
    this.#guerra = guerra;
  }

  // Métodos Getter e Setter para o atributo bruto
  get bruto() {
    return this.#bruto;
  }
  set bruto(bruto) {
    this.#bruto = bruto;
  }

  // Sobrescrevendo o método receberDano
  receberDano(dano) {
    const danoReduzido = dano - this.guerra;
    super.receberDano(danoReduzido);
    console.log(
      `${this.nome} usou sua brutalidade para reduzir o dano em ${this.guerra}.`
    );
  }

  // Método específico
  criarUmaGuerra() {
    console.log(`${this.nome} criar uma super guerra!`);
  }
}

// Classe derivada - Afrodite
class Afrodite extends MitologiaGrega {
  #pocaoAmor;
  #beleza;
  constructor( nome, vida, forca, agilidade, peso, poder, altura, origem, genero, arma, pocaoAmor, beleza) {
    super( nome, "Afrodite", vida, forca, agilidade, peso, poder, altura, origem, genero, arma);
    this.pocaoAmor = pocaoAmor; // Atributo específico
    this.beleza = beleza; // Atributo específico
  }
  // Métodos Getter e Setter para o atributo pocaoAmor
  get pocaoAmor() {
    return this.#pocaoAmor;
  }
  set pocaoAmor(pocaoAmor) {
    this.#pocaoAmor = pocaoAmor;
  }

  // Métodos Getter e Setter para o atributo beleza
  get beleza() {
    return this.#beleza;
  }
  set beleza(beleza) {
    this.#beleza = beleza;
  }

  // Sobrescrevendo o método receberDano
  receberDano(dano) {
    const danoReduzido = dano - this.guerra;
    super.receberDano(danoReduzido);
    console.log(
      `${this.nome} usou sua beleza para reduzir o dano em ${this.beleza}.`
    );
  }

  // Método específico
  soltaPocaoDoAmor() {
    console.log(`${this.nome} revela sua poção do amor!`);
  }
}

// Criando instância da vida derivada Zeus
const zeus = new Zeus("Zeuus", 140, 1000, 500, 89, 100, 1.95, "Grega", "m", "ceu", 150, 120);
// Chamando os métodos
zeus.atacar(); // Método sobrescrito
zeus.criarUmaTempestade(); //Método específico

// Criando instância da vida derivada poseidon
const poseidon = new Poseidon("Poseiidon", 140, 950, 500, 89, 100, 1.95, "Grego", "M", "Tritao", 100, 3);
// Chamando os métodos
poseidon.defesa(); // Método sobrescrito
poseidon.criarUmaCatastrofe(); //Método específico

// Criando instância da vida derivada ares
const ares = new Ares("Arees", 140, 940, 476, 89, 100, 1.95, "Grega", "M", "Forca", "Super potentes", 125);
// Chamando os métodos
ares.receberDano(30); // Método sobrescrito
ares.criarUmaGuerra(); //Método específico

// Criando instância da vida derivada afrodite
const afrodite = new Afrodite("Afrodiite", 140, 900, 350, 70, "super beleza", 1.75, "Grega", "F", "Sensualidade", 135, 1000);
// Chamando os métodos
afrodite.receberDano(30); // Método sobrescrito
afrodite.soltaPocaoDoAmor(); //Método específico

console.log(".............................................");
console.log("Modificando os objetos usando setters:");
console.log("..................................................");

// Modificando o objeto zeus usando setters
zeus.nome = "Zeus";
console.log(`Nome modificado: ${zeus.nome}`);
zeus.atacar();

// Modificando o objeto poseidon usando setters
poseidon.nome = "Poseidon";
console.log(`Nome modificado: ${poseidon.nome}`);
poseidon.defesa();

// Modificando o objeto ares usando setters
ares.nome = "Ares";
console.log(`Nome modificado: ${ares.nome}`);
ares.receberDano(50);

// Modificando o objeto afrodite usando setters
afrodite.nome = "Afrodite";
console.log(`Nome modificada: ${afrodite.nome}`);
afrodite.receberDano(50);

