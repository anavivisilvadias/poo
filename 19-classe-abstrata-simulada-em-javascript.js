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

// Classe derivada "Guerreiro"
class Guerreiro extends Personagem {
    constructor(nome, arma) {
        super(nome);
        this.arma = arma;
    }

    // Implementação dos métodos abstratos da classe Personagem
    atacar() {
        console.log(`${this.nome} ataca com a ${this.arma}!`);
    }

    defender() {
        console.log(`${this.nome} levanta o escudo para se defender!`);
    }
}

// Classe derivada "Mago"
class Mago extends Personagem {
  constructor(nome, magia) {
    super(nome);
    this.magia = magia;
  }

  // Implementação dos métodos abstratos da classe Personagem
  atacar() {
    console.log(`${this.nome} lança a magia ${this.magia}!`);
  }

  defender() {
    console.log(`${this.nome} usa um escudo mágico para se defender!`);
  }
}

// Criando instâncias e testando o comportamento
try {
    const personagem = new Personagem("Invalido"); // Isso vai lançar um erro
} catch (error) {
    console.log(error.message);
}

const guerreiro = new Guerreiro("Thorin", "Espada");
guerreiro.atacar(); // "Thorin ataca com a Espada!"
guerreiro.defender(); // "Thorin levanta o escudo para se defendder!"

const mago = new Mago("Gandalf", "Bola de Fogo");
mago.atacar(); // "Gandalf lança a magia Bola de Fogo!"
mago.defender(); // "Gandalf usa um escudo mágico para se defender!"