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
}