// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Crear un array para almacenar nombres de los amigos
let amigos = [];
//Generar funcion para agregar amigos a la lista creada
function agregarAmigo() {
    let ingresarNombre = document.getElementById('amigo');
    let nombreDeAmigo = ingresarNombre.value;
    if (!nombreDeAmigo) {
 // Alerta cuando no se ingresa datos     
        alert("Por favor, ingrese un nombre.");
        return;} 
    else {
        amigos.push(nombreDeAmigo);
        ingresarNombre.value = '';
        ingresarNombre.focus();
        mostrarAmigos();}
}
// Captura el valor ingresado, valida entrada, actualiza array de amigos
function mostrarAmigos() {
    let listaDeAmigos = document.getElementById('listaAmigos');
    listaDeAmigos.innerHTML = "";
 // iterar sobre el areglo   
    for (let i = 0; i < amigos.length; i++) {
        let itemLista = document.createElement("li");
        itemLista.textContent = amigos[i];
        listaDeAmigos.appendChild(itemLista);}
}
 // Genera funcion para sortear amigos
function sortearAmigo() {
// valida amigos disponibles 
    if (amigos.length === 0) {
        alert("No hay amigos para sortear");
        return;}
    let indice = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos.splice(indice, 1)[0];
//selecciona aleatoriamente nombres almacenados en el array y obtiene el amigo secreto
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `Mi amigo secreto es: ${amigoSorteado}`;
    mostrarAmigos();
    if (amigos.length === 0) {
        setTimeout(() => {
        alert("Ya se sortearon todos los amigos de la lista");
        }, 10);}
    let limpiarLista = document.getElementById('listaAmigos');
    limpiarLista.innerHTML = "";
}