//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeAmigos = []
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector (tag);
    campo.innerHTML = texto;
}
function exibirTextosInciais() {
    exibirTextoNaTela('h1', 'Bem vindo ao jogo do amigo secreto!');
    exibirTextoNaTela('h2', 'Digite o nome dos amigos que participarão do amigo secreto:');
}
exibirTextosInciais();

function adicionarAmigo() {
    let input = document.getElementById('amigo');
    let nome = input.value.trim();

    if (nome === '') {
        alert('Por favor, insira um nome.');
    } else {
        listaDeAmigos.push(nome);
        input.value = '';
        atualizarListaDeAmigos();
        console.log(nome);
    }
}
function atualizarListaDeAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    listaDeAmigos.forEach(function(amigo) {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}
function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert('Nenhum amigo disponível para sortear.');
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    let amigoSorteado = listaDeAmigos[indiceAleatorio];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>${amigoSorteado}</li>`;
}