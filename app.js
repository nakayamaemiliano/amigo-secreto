// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];


function agregarAmigo(){
  const input = document.getElementById("amigo");
  const nombre = input.value.trim(); 

  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
  } else {
    amigos.push(nombre);
  }

  input.value = "";
  mostrarAmigos();

 
}

function mostrarAmigos() {
    
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    
    for (let i = 0; i < amigos.length; i++) {
        const elementoLista = document.createElement('li');
        elementoLista.textContent = amigos[i];
        
        
        lista.appendChild(elementoLista);
    }
}


function sortearAmigo() {
  
  if (amigos.length === 0) {
    document.getElementById("resultado").innerHTML = "<li>No hay amigos para sortear</li>";
    return;
  }
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);

  const amigoSorteado = amigos[indiceAleatorio];

  document.getElementById("resultado").innerHTML = `<li> El amigo secreto sorteado es: ${amigoSorteado}</li>`;
}
