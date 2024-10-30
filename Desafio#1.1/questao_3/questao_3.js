import { Vertice } from '../questão_1/questao_1.js';

class Poligono {

    #vertices = [];

    constructor(vertices) {

        if (vertices.length < 3 || !Array.isArray(vertices)) {
            throw new Error('Poligono deve ter no mínimo 3 vértices');
        }

        this.#vertices = vertices;
    }

    addVertice(vertice) {

        for (let index = 0; index < this.#vertices.length; index++) {
            if (Vertice.equals(this.#vertices[index], vertice)) {
                
                console.log('Vértice já existe');
                return false;
            }
        }
        this.#vertices.push(vertice);
    }

    getVertices() {
        for (let index = 0; index < this.#vertices.length; index++) {
            console.log('Vértice ', index + 1, ': ', Vertice.getX(this.#vertices[index]), Vertice.getY(this.#vertices[index]));
        }
    }

    static perimetro(poligono) {

        let perimetro = 0;
        for ( let index = 0; index < poligono.#vertices.length-1; index++) {

            perimetro += Vertice.distancia(poligono.#vertices[index], poligono.#vertices[index + 1]);

        }
        return perimetro;
    }

    static qtdVertices(poligono) {
        return poligono.#vertices.length;
    }

}

export { Poligono };