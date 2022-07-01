
let novaJanela;

function abrirJanela() {
    novaJanela = window.open("", "Nova Janela", "width=200, height=200");
    novaJanela.document.write("<p> Uma nova Jnela foi criada!");
    
    
}
function fecharJanela() {
    novaJanela.close();    
}

function nomeNavegador() {
    //alert("Porta: " + location.port);
    //alert("Protocole: " + location.protocol);
    alert("Tamanho da tela: " + screen.width);
    alert("Tamanho disponivel da tela: " + screen.availHeight);
    //alert(navigator.userAgent);
    
}



