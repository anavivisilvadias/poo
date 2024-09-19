// Classe base Personagem
class Personagem {
    constructor(nome, vida) {
        this.nome = nome;
        this.vida = vida;
    }

    atacar() {
        console.log(`${this.nome} realiza um ataque básico!`);
    }

    receberDano(dano) {
        this.vida -= dano;
        console.log(`${this.nome} recebeu ${dano} de dano. vida restante: ${this.vida}!`);
    }
}

// Classe Guerreiro que herda de Personagem
class Guerreiro extends Personagem {
    constructor(nome, vida, arma) {
        super(nome, vida);
        this.arma = arma;
    }

    atacar() {
        console.log(`${this.nome} ataca com a ${this.arma}!`);
    }
}

// Classe Mago que herda de Personagem
class Guerreiro extends Personagem {
    constructor(nome, vida, feiticio) {
        super(nome, vida);
        this.feiticio = feiticio;
    }

    atacar() {
        console.log(`${this.nome} lança ${this.feiticio}!`);
    }
}


// Classe Arqueiro que herda de Personagem
class Guerreiro extends Personagem {
    constructor(nome, vida, tipoFlecha) {
        super(nome, vida);
        this.tipoFlecha = tipoFlecha;
    }

    atacar() {
        console.log(`${this.nome} dispara flechas ${this.tipoFlecha}!`);
    }
}

// Criando instâncias de Guerreiro, Mago e Arqueiro
const guerreiro = new Guerreiro("Arthur", 100, "espada");
guerreiro.atacar(); // Saída: Arthur ataca com a espada!
guerreiro.receberDano(20); // Saída: Arthur recebeu 20 de dano. vida restante: 80

const mago = new Mago("Merlin", 80, "bola de fogo");
mago.atacar(); // Saída: Merlin lança bola de fogo!
mago.receberDano(15); // Saída: Merlin recebeu 15 de dano. vida restante: 65

const arqueiro = new Arqueiro("Legolas", 90, "explosiva");
arqueiro.atacar(); // Saída: Legolas dispara flechas explosivas!
arqueiro.receberDano(10); // Saída: Legolas recebeu 10 de dano. vida restante: 80
