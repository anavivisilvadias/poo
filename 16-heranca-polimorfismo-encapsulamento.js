// Classe Base Personagem
class Personagem {
  // Encapsulando os atributos com #, tornando-os privados
  #nome;
  #classe;
  #nível;
  #vida;
  #mana;

  // Método Construtor
  constructor(nome, classe, nivel, vida, mana) {
    this.#nome = nome;
    this.#classe = classe;
    this.#nível = nivel;
    this.#vida = vida;
    this.#mana = mana;
  }
  // Métodos Setters e Setters
  // Métodos Getter e Setter para o atributo nome
  get nome() {
    return this.#nome;
  }
  set nome(nome) {
    this.#nome = nome;
  }
  // Métodos Getter e Setter para o atributo classe
  get classe() {
    return this.#classe;
  }
  set classe(classe) {
    this.#classe = classe;
  }
  // Métodos Getter e Setter para o atributo nível
  get nivel() {
    return this.#nível;
  }
  set nivel(nível) {
    this.#nível = nivel;
  }
  // Métodos Getter e Setter para o atributo vida
  get vida() {
    return this.#vida;
  }
  set vida(vida) {
    this.#vida = vida;
  }
  // Métodos Getter e Setter para o atributo mana
  get mana() {
    return this.#mana;
  }
  set mana(mana) {
    this.#mana = mana;
  }
 // Métodos
 // Simulando sobrecarga com rest parameter
 atacar(...args) {
        if (args.length === 0) {
            console.log(`${this.nome} realiza um ataque normal!`);
        } else if (args.length === 1) {
            console.log(`${this.nome} atacou com um poder de ${args[0]}!`);
        } else if (args.length === 2) {
                console.log(`${this.nome} dispara flechas ${tipoFlecha} com um arco!`);
            } else {
                console.log(`${this.nome} usou ${args[1]} e atacou com ${args[0]} de poder!`);
        } else {
            console.log('Número inválido de argumentos.');
        }
    }
    defesa() {
        console.log(`${this.nome} se defendeu com ${this.#nivel * 2} pontos de defesa!`);
    }
    receberDano(dano) {
        this.vida -= dano;
        console.log(`${this.nome} recebeu ${dano} de dano. Vida restante: ${this.vida}`);
        }
    }

