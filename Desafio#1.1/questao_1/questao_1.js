import promptSync from 'prompt-sync';

class Vertice {

    #x;
    #y;

    constructor(x, y) {
        this.#x = x;
        this.#y = y;
    }

    static getX(Obj) {
        return Obj.#x;
    }

    static getY(Obj) {
        return Obj.#y;
    }

    static distancia(Obj1, Obj2) { 
        return Math.sqrt(Math.pow(Obj1.#x - Obj2.#x, 2) + Math.pow(Obj1.#y - Obj2.#y, 2));
    }

    static move(Obj, x, y) {
        Obj.#x = x;
        Obj.#y = y;
    }

    static equals(Obj1, Obj2) {
        return Obj1.#x === Obj2.#x && Obj1.#y === Obj2.#y;
    }

}

const prompt = promptSync();

const vertice1 = new Vertice(parseFloat(prompt('Digite o valor de x do vertice 1: ')), parseFloat(prompt('Digite o valor de y do vertice 1: ')));
const vertice2 = new Vertice(parseFloat(prompt('Digite o valor de x do vertice 2: ')), parseFloat(prompt('Digite o valor de y do vertice 2: ')));
const vertice3 = new Vertice(parseFloat(prompt('Digite o valor de x do vertice 3: ')), parseFloat(prompt('Digite o valor de y do vertice 3: ')));

console.log('Posição do vertice 1: ', Vertice.getX(vertice1), Vertice.getY(vertice1));
console.log('Distancia entre vertice 1 e vertice 2: ', Vertice.distancia(vertice1, vertice2));

console.log('Posição do vertice 3: ', Vertice.getX(vertice3), Vertice.getY(vertice3));
Vertice.move(vertice3, parseFloat(prompt('Digite o novo valor de x do vertice 3: ')), parseFloat(prompt('Digite o novo valor de y do vertice 3: ')));
console.log('Nova posição do vertice 3: ', Vertice.getX(vertice3), Vertice.getY(vertice3));

console.log('Os vertices 1 e 2 são iguais? ', Vertice.equals(vertice1, vertice2));

export { Vertice };