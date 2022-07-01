
const lista = document.querySelector("ol");

const itensLista1 = lista.querySelectorAll("li");
const itensLista4 = lista.querySelectorAll("ol li");

/*
console.log(itensLista1);

for(let i = 0; i < itensLista1.length; i++){
    if (i % 2 === 0) {
        itensLista1[i].style.fontWeight = 900;
        
    }
    
}
*/
// v2
const itensLista2 = document.querySelectorAll("ol li");

// v3 
const itensLista3 = document.getElementsByTagName("li");

itensLista4.forEach((el, idx) => {
    if((idx + 1) % 2 === 0){
        el.style.fontWeight = 900;
    }
    
    el.addEventListener("click", () =>{
        console.log("Deu certo!");
    })

});