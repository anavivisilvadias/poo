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
}
