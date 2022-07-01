
const pais = document.querySelector("#pais");

let selecionado = pais.options.selectedIndex;

console.log(pais.options[selecionado]);

const passaporte = document.querySelector("#passaporte");

const padraoPassaporte = new RegExp("[a-zA-Z]{2}[0-9]{12}");
const enviar = document.querySelector("#enviar");

enviar.addEventListener('click', (event) =>{
    event.preventDefault();
    event.stopPropagation();
    
    alert(padraoPassaporte.test(passaporte.value));

})