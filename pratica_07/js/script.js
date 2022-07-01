
const btnAddTarefa = document.querySelector("#add_tarefa");
const lstAFazer = document.querySelector("#a-fazer");
const lstFeito = document.querySelector("#feito");

document.querySelector("#tarefa").focus();

const adicionarTarefa = function (event) {
   if(event) event.preventDefault();
    
    const tarefa = document.querySelector("#tarefa").value

    if (tarefa.length < 1) {
        return;
    }

    const novaTarefa = document.createElement("li")
    novaTarefa.innerText = tarefa

    lstAFazer.appendChild(novaTarefa)
     
    document.querySelector("#tarefa").value = "";

};

const moverParaFeito = function (event) {
  
    const tarefa = event.target.innerText;

  novaTarefa.innerText = tarefa

    lstFeito.appendChild(novaTarefa)
    lstAFazer.removeChild(ev.target)  

    const novaTarefa = document.createElement("li")
    const iconeNovaTarefa = document.createElement("i")
    const iconeDeleteTarefa = document.createElement("i")
    
    iconeNovaTarefa.className = "fa fa-check-square-o"
    iconeDeleteTarefa.className = "fa fa-trash-o delete-icon"


    novaTarefa.appendChild(iconeNovaTarefa)
    novaTarefa.appendChild(iconeDeleteTarefa)

    limparListaFeito()
    lstFeito.appendChild(novaTarefa)

    /* Anexar avento de remover tarefa feita */
    iconeDeleteTarefa.addEventListener("click", removerFeito)
    lstAFazer.removeChild(tarefa)
        
    
    listaVazia("Adicione tarefas à lista")
    console.log("Texto digitado: " + tarefa);
    novaTarefa.innerText = tarefa;

  
};




const removerFeito = function (event){
    
  const tarefa = event.target.parentElement
  lstFeito.removeChild(tarefa)

  localStorage.setItem('lista-feito')

  if(lstFeito.childElementCount === 0) {
    const tarefa = "As tarefas concluídas foram removidas";

    const novaTarefa = document.createElement("li")
    const iconeListaVazia = document.createElement("i")

    iconeListaVazia.classList.add("fa")
    iconeListaVazia.classList.add("fa-file-text-o")
    
    novaTarefa.innerText = tarefa

    novaTarefa.classList.add("lista-vazia")
    novaTarefa.onclick = function(e) {
        e.stopPropagation()
        return false
    }

    novaTarefa.appendChild(iconeListaVazia)
    lstFeito.appendChild(novaTarefa)
    
  }

};



const toggle = document.getElementById("dark-mode");

const storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
if (storedTheme) {
    document.documentElement.setAttribute('data-theme', storedTheme)
    document.querySelector(".container-switch span").value = storedTheme
}


toggle.onchange = function() {
    let currentTheme = document.documentElement.getAttribute("data-theme");
    let targetTheme = "dark";

    if (currentTheme === "dark") {
        targetTheme = "dark";
    }

    document.documentElement.setAttribute('data-theme', targetTheme)
    localStorage.setItem('theme', targetTheme);
};


btnAddTarefa.addEventListener("click", adicionarTarefa);
lstAFazer.addEventListener("click", moverParaFeito);
lstFeito.addEventListener("click", removerFeito);
