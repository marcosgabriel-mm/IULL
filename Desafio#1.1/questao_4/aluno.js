class Aluno {

    nome;
    matricula;

    #p1 = null;
    #p2 = null;

    constructor(nome, matricula) {
        this.nome = nome;
        this.matricula = matricula;
    }

    static setNotaP1(aluno, p1) {
        aluno.#p1 = p1;
    }

    static setNotaP2(aluno, p2) {
        aluno.#p2 = p2;
    }

    static getNotas(aluno) {
        return [aluno.#p1, aluno.#p2];
    }

}

export { Aluno };