import { Aluno } from "./aluno.js";

class Turma {

    #alunos;
    constructor() {
        this.#alunos = [];
    }

    adicionarAluno(aluno) {
        for (let index = 0; index < this.#alunos.length; index++) {
            if (this.#alunos[index].matricula === aluno.matricula) {
                throw new Error('Aluno já cadastrado');
            }
        }
        this.#alunos.push(aluno);
    }

    removerAluno(matricula) {
        for (let index = 0; index < this.#alunos.length; index++) {
            if (this.#alunos[index].matricula === matricula) {
                this.#alunos.splice(index, 1);
                return;
            }
        }
    }

    lancarNotas(matricula, p1 = null, p2 = null) {
        const aluno = this.#alunos.find(aluno => aluno.matricula === matricula);
        Aluno.setNotaP1(aluno, p1);
        Aluno.setNotaP2(aluno, p2);
    }

    calcularMedia(matricula) {
        const aluno = this.#alunos.find(aluno => aluno.matricula === matricula);
        if (aluno) {
            let [p1, p2] = Aluno.getNotas(aluno);
            
            if (p1 === null) {return (p2 / 2).toFixed(1);}
            if (p2 === null) {return (p1 / 2).toFixed(1);}

            return ((p1 + p2) / 2).toFixed(1);
        }
    }

    listarAlunos() {
        this.#alunos.sort((a, b) => a.nome.localeCompare(b.nome)).forEach(aluno => {
            let [p1, p2] = Aluno.getNotas(aluno);

            if (p1 === null) { p1 = '—'; } else { p1 = p1.toFixed(1); }
            if (p2 === null) { p2 = '—'; } else { p2 = p2.toFixed(1); }

            console.log(`${aluno.matricula}\t\t${aluno.nome}\t${p1}\t${p2}\t${this.calcularMedia(aluno.matricula)}`);
        });
    }

}

function main() {
    const turma = new Turma();

    turma.adicionarAluno(new Aluno('Fernanda Abreu', 34567));
    turma.adicionarAluno(new Aluno('Joao Santos', 45678));
    turma.adicionarAluno(new Aluno('Bruno Carvalho', 23456));
    turma.adicionarAluno(new Aluno('Ana de Almeida', 12345));

    turma.adicionarAluno(new Aluno('Lira de Almeida', 23446));
    turma.removerAluno(23446);

    turma.lancarNotas(12345, 8, 9.5);
    turma.lancarNotas(23456, 7, null);
    turma.lancarNotas(34567, null, 8.5);
    turma.lancarNotas(45678, null, null);

    console.log('—--------------------------------------------------');
    console.log('Matrículas\tNome\t\tP1\tP2\tNF');
    console.log('—--------------------------------------------------');
    console.log(turma.listarAlunos());
    console.log('—--------------------------------------------------');
}