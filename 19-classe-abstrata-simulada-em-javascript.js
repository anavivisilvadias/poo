// Classe base "Personagem" simulando uma classe abstrata
class Personagem {
    constructor(nome) {
        if (new.target === Personagem) {
            throw new Error("Não é possível instanciar a classe abstrata Personagem diretamente.");
        }
        this.nome = nome;
    }

    // Método abstrato simulado
    atacar() {
        throw new Error("O método atacar() deve ser implementado pela classe derivada.");
    }

    receberDano(dano) {
        this.vida -= dano;
        console.log(`${this.nome} recebeu ${dano} de dano. Vida restante: ${this.vida}!`);
    }

    // Método abstrato simulado
    defender() {
        throw new Error("O método defender() deve ser implementado pela classe derivada.");
    }
}