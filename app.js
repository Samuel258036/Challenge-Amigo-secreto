let amigos = [];

function adicionarAmigo() {
    let addAmigo = document.querySelector('input').value;

    if (addAmigo == '')
        alert('insira um nome valido!!');
     else 
      amigos.push(addAmigo);

        addAmigo = document.querySelector('input');
        addAmigo.value = '';

        listaDeAmigos();
}

function listaDeAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    
    for(let i = 0; i< amigos.length; i++){
        let li = document.createElement('li');

        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    let indice = parseInt(Math.random() * amigos.length);

    let amigoSorteado = amigos[indice];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = amigoSorteado;
}