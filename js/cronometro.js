   let btnEmpezar=document.getElementById('btn-empezar');
   let btnParar= document.getElementById('btn-parar');
   let btnReset= document.getElementById('btn-reset');
   document.getElementById("temporizador").innerHTML="00:00:00.00";
  
    let tiempo=0;
    let intervalo=0;
    let verificador=false;
evento();

function evento(){
btnEmpezar.addEventListener('click', iniciar);
btnParar.addEventListener('click', parar);
btnReset.addEventListener('click', reset);
}
function iniciar(){
    if(verificador==false){
        intervalo=setInterval(function(){
            tiempo +=0.01;
            temporizador.innerHTML=tiempo.toFixed(2);
        },10);
        verificador=true;
    }
}
 function parar(){
    verificador=false
     clearInterval(intervalo);
    
 }
 function reset(){
verificador=false;
tiempo=0;
temporizador.innerHTML= tiempo + '0:00:00.00';
 clearInterval(intervalo);
 }


    