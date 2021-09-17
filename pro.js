var back = "apagado";
const color = document.getElementById("container");

function mode(){
    if (back=="apagado"){
        back ="encendido";
        color.classList.add("active");
        console.log("prendido");
    
    } else{
        back ="apagado";
        console.log("apagado");
        color.classList.remove("active")
    }

}
