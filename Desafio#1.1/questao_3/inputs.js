import { Vertice } from '../questao_1/questao_1.js';
import { Poligono } from './questao_3.js';
import promptSync from 'prompt-sync';

const prompt = promptSync();

const poligono = new Poligono([
    new Vertice(parseFloat(prompt('Digite o valor de x do vertice 1: ')), parseFloat(prompt('Digite o valor de y do vertice 1: '))),
    new Vertice(parseFloat(prompt('Digite o valor de x do vertice 2: ')), parseFloat(prompt('Digite o valor de y do vertice 2: '))),
    new Vertice(parseFloat(prompt('Digite o valor de x do vertice 3: ')), parseFloat(prompt('Digite o valor de y do vertice 3: '))),
    new Vertice(parseFloat(prompt('Digite o valor de x do vertice 4: ')), parseFloat(prompt('Digite o valor de y do vertice 4: ')))
]);

poligono.getVertices();
poligono.addVertice(new Vertice(parseFloat(prompt('Digite o valor de x do novo vertice: ')), parseFloat(prompt('Digite o valor de y do novo vertice: '))));

console.log('Perimetro: ', Poligono.perimetro(poligono));
console.log('Quantidade de vértices: ', Poligono.qtdVertices(poligono));