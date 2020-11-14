
//ninguna variable ha sido declarada con const porque sus valores cambian constantemente
let power = false;
let granosCafe = 260; //gramos de cafe - capacidad máxima
let agua = 2000; //agua en mililitros - capacidad máxima
let taza = 10; //capacidad máxima

function encender(){

    if (power === false){
        document.getElementById("power").innerHTML = "Apagar";
        power = true;
        console.log("¡Máquina Encendida!, Ya puedes preparar café");
    }else{
        document.getElementById("power").innerHTML = "Encender";
        power = false;
        console.log("¡Máquina Apagada!, No es posible preparar café con la máquina apagada");
    }
}

function maquina(){
    if(power === true && taza>=1){
        molinillo();
        tanque();
        setTimeout(()=>{
            console.log("¡El café está listo!");
        }, 5000)
        taza = taza-1;
        console.log("Cantidad de tazas restantes: "+taza);
    }else if(power === false){
        console.log("¡Máquina Apagada!, No es posible preparar café con la máquina apagada");
    }else{
        console.log("¡No hay tazas disponibles!, Agregue una taza para hacer café");
    }
}


function tanque(){
    if(agua>=30){
        setTimeout(()=>{
            console.log("Agregando agua al cafe...");
        }, 2000)
        agua = agua - 30;
    }else{
        console.log("Cantidad de agua insuficiente en tanque");
    }

    console.log("Cantidad de agua restante: " + agua+" ml");
}


function molinillo(){
    
    if(granosCafe>=7){
        setTimeout(()=>{
            console.log("Moliendo granos de cafe...")
        }, 2000)
        granosCafe = granosCafe - 7;
    }else{
        console.log("Cantidad de granos de cafe insuficiente");
    }

    console.log("Cantidad de granos de café restante: " + granosCafe+" g");
}

function insumoCafe(){
    let granosCafeNuevo = parseInt(document.getElementById("cafe").value);

    if(isNaN(granosCafeNuevo)){
        console.log("Ingrese una cantidad de granos de café");
    }else if(granosCafe === 260){
        console.log("Granos de cafe en su capacidad máxima, no es posile agregar más");
        console.log("Cantidad de granos de café actual: "+granosCafe+" g");
    }else{
        granosCafe = granosCafe + granosCafeNuevo;
        console.log("Cantidad de granos de café: "+granosCafe+" g");
    }
}

function insumoAgua(){
    let aguaNuevo = parseInt(document.getElementById("aguaM").value);
   
    if(isNaN(aguaNuevo)){
        console.log("Ingrese una cantidad de agua");
    }else if(agua === 2000){
        console.log("Tanque de agua en su capacidad máxima, no es posible agregar más");
        console.log("Cantidad de agua actual en tanque: "+agua+" ml");
    }else{
        agua = agua + aguaNuevo;
        console.log("Cantidad de agua: "+agua+" ml");
    }
}

function insumoTazas(){
    
    let  tazaNuevo = parseInt(document.getElementById("taza").value);

    if(isNaN(tazaNuevo)){
        console.log("Ingrese una cantidad de tazas");
    }else if(taza === 10){
        console.log("Tazas en su capacidad máxima, no es posible agregar más");
        console.log("Cantidad de tazas actual: "+taza);
    }else{
        taza = taza +tazaNuevo;
        console.log("Cantidad de tazas: "+taza);
    }
}