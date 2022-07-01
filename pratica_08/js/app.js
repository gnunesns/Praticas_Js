const formExemplo = document.querySelector("#form-exemplo");


const isEmpty = form => {
    
    //let state = false;

    for(let field of form){
        if(field instanceof HTMLButtonElement) continue
        if(!field.value) return true     
        }
        return false
}

// Validação do envio 
formExemplo.addEventListener("submit", event =>{
   if(isEmpty(formExemplo) && !isAccepted){
    event.preventDefault();
   }

})