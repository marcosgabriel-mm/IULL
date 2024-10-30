class Cliente {

    nome 
    dataNascimento
    estadoCivil

    #cpf
    #renda
    #dependentes

    constructor(nome, dataNascimento, estadoCivil, cpf, renda, dependentes) {
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.estadoCivil = estadoCivil;
        this.#cpf = cpf;
        this.#renda = renda;
        this.#dependentes = dependentes;
    }

}