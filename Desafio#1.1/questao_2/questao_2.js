import { Vertice } from "../questao_1/questao_1.js";
import promptSync from 'prompt-sync';

class Triangulo {

    #vertice1;
    #vertice2;
    #vertice3;

    constructor(vertice1, vertice2, vertice3) {

        try {

            let area = (Vertice.getX(vertice1) * (Vertice.getY(vertice2) - Vertice.getY(vertice3)) +
                        Vertice.getX(vertice2) * (Vertice.getY(vertice3) - Vertice.getY(vertice1)) +
                        Vertice.getX(vertice3) * (Vertice.getY(vertice1) - Vertice.getY(vertice2))) / 2;
            
            if (area === 0) {
                throw new Error("Triangulo inválido");
            }
            
            this.#vertice1 = vertice1;
            this.#vertice2 = vertice2;
            this.#vertice3 = vertice3;

        } catch (error) {
            throw error;
        }

    }

    static equals(triangulo1, triangulo2) {
        return Vertice.distancia(triangulo1.#vertice1, triangulo1.#vertice2) === Vertice.distancia(triangulo2.#vertice1, triangulo2.#vertice2) &&
        Vertice.distancia(triangulo1.#vertice1, triangulo1.#vertice3) === Vertice.distancia(triangulo2.#vertice1, triangulo2.#vertice3) &&
        Vertice.distancia(triangulo1.#vertice2, triangulo1.#vertice3) === Vertice.distancia(triangulo2.#vertice2, triangulo2.#vertice3);
    }

    static perimetro(triangulo) {
        let distancia1 = Vertice.distancia(triangulo.#vertice1, triangulo.#vertice2);
        let distancia2 = Vertice.distancia(triangulo.#vertice1, triangulo.#vertice3);
        let distancia3 = Vertice.distancia(triangulo.#vertice2, triangulo.#vertice3);

        return distancia1 + distancia2 + distancia3;
    }

    getVertices() {
        return [Vertice.getX(this.#vertice1), Vertice.getY(this.#vertice1), 
                Vertice.getX(this.#vertice2), Vertice.getY(this.#vertice2), 
                Vertice.getX(this.#vertice3), Vertice.getY(this.#vertice3)];
    }

    static tipo(triangulo) {
        let distancia1 = Vertice.distancia(triangulo.#vertice1, triangulo.#vertice2);
        let distancia2 = Vertice.distancia(triangulo.#vertice1, triangulo.#vertice3);
        let distancia3 = Vertice.distancia(triangulo.#vertice2, triangulo.#vertice3);

        console.log(distancia1, distancia2, distancia3);

        if (distancia1 === distancia2 && distancia2 === distancia3) {
            return 'Equilátero';
        } else if (distancia1 === distancia2 || distancia2 === distancia3 || distancia1 === distancia3) {
            return 'Isósceles';
        } else {
            return 'Escaleno';
        }
    }

    static clone(triangulo) {
        return new Triangulo(triangulo.#vertice1, triangulo.#vertice2, triangulo.#vertice3);
    }

    static area(triangulo) { 
        let s = Triangulo.perimetro(triangulo) / 2;
        return Math.sqrt(s * (s-Vertice.distancia(triangulo.#vertice1, triangulo.#vertice2)) * 
                             (s-Vertice.distancia(triangulo.#vertice1, triangulo.#vertice3)) *
                             (s-Vertice.distancia(triangulo.#vertice2, triangulo.#vertice3))
        );
    }
}

function main() {
    const prompt = promptSync();

    const triangulo1 = new Triangulo(
        new Vertice(parseFloat(prompt('Digite o valor de x do vertice 1: ')), parseFloat(prompt('Digite o valor de y do vertice 1: '))),
        new Vertice(parseFloat(prompt('Digite o valor de x do vertice 2: ')), parseFloat(prompt('Digite o valor de y do vertice 2: '))),
        new Vertice(parseFloat(prompt('Digite o valor de x do vertice 3: ')), parseFloat(prompt('Digite o valor de y do vertice 3: ')))
    );

    const triangulo2 = new Triangulo(
        new Vertice(parseFloat(prompt('Digite o valor de x do vertice 1: ')), parseFloat(prompt('Digite o valor de y do vertice 1: '))),
        new Vertice(parseFloat(prompt('Digite o valor de x do vertice 2: ')), parseFloat(prompt('Digite o valor de y do vertice 2: '))),
        new Vertice(parseFloat(prompt('Digite o valor de x do vertice 3: ')), parseFloat(prompt('Digite o valor de y do vertice 3: ')))
    );

    const triangulo3 = new Triangulo(
        new Vertice(parseFloat(prompt('Digite o valor de x do vertice 1: ')), parseFloat(prompt('Digite o valor de y do vertice 1: '))),
        new Vertice(parseFloat(prompt('Digite o valor de x do vertice 2: ')), parseFloat(prompt('Digite o valor de y do vertice 2: '))),
        new Vertice(parseFloat(prompt('Digite o valor de x do vertice 3: ')), parseFloat(prompt('Digite o valor de y do vertice 3: ')))
    );

    while (true) {

        console.log('1 - Verificar se dois triangulos são iguais');
        console.log('2 - Verificar o perimetro de um triangulo');
        console.log('3 - Verificar o tipo de um triangulo');
        console.log('4 - Clonar um triangulo');
        console.log('5 - Verificar a area de um triangulo');

        const opcao = parseInt(prompt('Digite a opção desejada: '));

        switch (opcao) {
            case 1:
                console.log('Escolha dois triangulos para comparar: ');
                escolha = parseInt(prompt('Escolha o primeiro triangulo (1, 2 ou 3): '));
                Triangulo.equals(escolha1 === 1 ? triangulo1 : escolha1 === 2 ? triangulo2 : triangulo3);
                break;
            case 2:
                console.log('Escolha um triangulo para verificar o perimetro: ');
                escolha = parseInt(prompt('Escolha o triangulo (1, 2 ou 3): '));
                console.log('Perimetro do triangulo: ', Triangulo.perimetro(escolha === 1 ? triangulo1 : escolha === 2 ? triangulo2 : triangulo3));
                break;
            case 3:
                console.log('Escolha um triangulo para verificar o tipo: ');
                escolha = parseInt(prompt('Escolha o triangulo (1, 2 ou 3): '));
                console.log('Tipo do triangulo: ', Triangulo.tipo(escolha === 1 ? triangulo1 : escolha === 2 ? triangulo2 : triangulo3));
                break;
            case 4:
                console.log('Escolha um triangulo para clonar: ');
                escolha = parseInt(prompt('Escolha o triangulo (1, 2 ou 3): '));
                const trianguloClonado = Triangulo.clone(escolha === 1 ? triangulo1 : escolha === 2 ? triangulo2 : triangulo3);
                console.log('Vertices do triangulo clonado: ', trianguloClonado.getVertices());
                break;
            case 5:
                console.log('Escolha um triangulo para verificar a area: ');
                escolha = parseInt(prompt('Escolha o triangulo (1, 2 ou 3): '));
                console.log('Area do triangulo: ', Triangulo.area(escolha === 1 ? triangulo1 : escolha === 2 ? triangulo2 : triangulo3));
                break;
            default:
                break;
        }
    }
}

export { Triangulo };