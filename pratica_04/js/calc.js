
export const somar = function(... numeros){
   let s = 0
      
   for(let n of numeros){
       s = s + n
   }
   return s;
}

export const subtrair = function(... numeros){

    console.log(numeros);

}

export const multiplicar = function(... numeros){
    let s = 1
      
   for(let n of numeros){
       s = s * n
   }
   return s;


}
export default{
    somar,
    subtrair,
    multiplicar
}