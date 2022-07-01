
let ajax = new XMLHttpRequest();
ajax.open('GET','https://62a78a1997b6156bff9011c7.mockapi.io/pweb/posts');
ajax.send();

const resultado = document.querySelector("#Resultado");

ajax.onload = function(){
    if(ajax.status != 200){
        alert(`Houve um erro: ${ajax.status}: ${ajax.statusText}`);
    } else{
        //alert(`Feito. Total ${ajax.response.length} bytes`);  
        const resp = JSON.parse(ajax.response);
        for(let r =0; r < resp.length; r++){
            const img = document.createElement("img");
            img.src = resp[r].avatar;
            resultado.appendChild(img);
        }
    }
};
/*
ajax.onprogress = function(event){
    if(event.lengthComputable){
        alert(`Received ${event.loaded} of ${event.total} bytes`);
    }else{
        alert(`Received ${event.loaded} bytes`);
    }
};
*/
ajax.onerror = function(){
    alert("Resquest Failed")
}
