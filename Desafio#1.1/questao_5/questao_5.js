import PromptSync from 'prompt-sync';
import promptSync from 'prompt-sync';
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

    getCPF() {
        return this.#cpf;
    }

    getRenda() {
        return this.#renda;
    }

    getDependentes() {
        return this.#dependentes;
    }

    mostrarInformaões() {

        let cpfFormatado = this.getCPF().toString().replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');

        console.log('Nome: ', this.nome);
        console.log('Data de nascimento: ', this.dataNascimento);
        console.log('Estado civil: ', this.estadoCivil);
        console.log('CPF: ', cpfFormatado);
        console.log('Renda: ', this.getRenda().toFixed(2));
        console.log('Dependentes: ', this.getDependentes().toString());
    }

}

function validarNome(nome) {
    return typeof nome === 'string' && nome.length >= 5;
}

function validarCPF(cpf) {
    let convertido = cpf.toString();
    return typeof cpf === 'number' && convertido.length === 11;
}

function validarDependentes(dependentes) {
    return typeof dependentes === 'number' && Number.isInteger(dependentes) && dependentes >= 0 && dependentes <= 10;
}

function validarRenda(renda) {
    const rendaString = renda.toString();
    return typeof renda === 'number' && renda >= 0 && rendaString.includes('.') && /^\d+(\.\d{2})?$/.test(rendaString);
}

function validarEstadoCivil(estadoCivil) {
    return typeof estadoCivil === 'string' && /^[CSVDcsdv]$/.test(estadoCivil);
}

function validarDataNascimento(dataNascimento) {

    const regex = /^\d{2}\/\d{2}\/\d{4}$/;
    const [dia, mes, ano] = dataNascimento.split('/').map(Number);
    const data = new Date(ano, mes - 1, dia);
    if (data.getFullYear() !== ano || data.getMonth() !== mes - 1 || data.getDate() !== dia || !regex.test(dataNascimento)) {
        return false;
    }

    const hoje = new Date();
    let idade = hoje.getFullYear() - data.getFullYear();
    const mesAtual = hoje.getMonth() - data.getMonth();
    if (mesAtual < 0 || (mesAtual === 0 && hoje.getDate() < data.getDate())) {
        idade--;
    }

    return idade >= 18;
}

function main() {

    let nome, dataNascimento, estadoCivil, cpf, renda, dependentes;
    const prompt = PromptSync();

    console.log('Cadastro de Cliente');
    console.log('-------------------');
    
    do {
        nome = prompt('Nome: ');
        if (!validarNome(nome)) {
            console.log('Nome deve ter pelo menos 5 caracteres.');
        }
    } while (!validarNome(nome));

    do {
        cpf = parseInt(prompt('CPF (11 dígitos): '));
        if (!validarCPF(cpf)) {
            console.log('CPF deve ter exatamente 11 dígitos.');
        }
    } while (!validarCPF(cpf));

    do {
        dataNascimento = prompt('Data de nascimento (DD/MM/AAAA): ');
        if (!validarDataNascimento(dataNascimento)) {
            console.log('Data de nascimento inválida ou cliente menor de 18 anos.');
        }
    } while (!validarDataNascimento(dataNascimento));

    do {
        renda = parseFloat(prompt('Renda mensal (com duas casas decimais e vírgula decimal): ').replace(',', '.'));
        if (!validarRenda(renda)) {
            console.log('Renda deve ser um valor ≥ 0 com duas casas decimais e vírgula decimal.');
        }
    } while (!validarRenda(renda));

    do {
        estadoCivil = prompt('Estado civil (C, S, V ou D): ').toUpperCase();
        if (!validarEstadoCivil(estadoCivil)) {
            console.log('Estado civil deve ser C, S, V ou D.');
        }
    } while (!validarEstadoCivil(estadoCivil));

    do {
        dependentes = parseInt(prompt('Número de dependentes (0 a 10): '), 10);
        if (!validarDependentes(dependentes)) {
            console.log('Número de dependentes deve ser entre 0 e 10.');
        }
    } while (!validarDependentes(dependentes));

    const cliente = new Cliente(nome, dataNascimento, estadoCivil, cpf, renda, dependentes);
    console.log('Cliente cadastrado com sucesso!');

    cliente.mostrarInformaões();
    
}

main();