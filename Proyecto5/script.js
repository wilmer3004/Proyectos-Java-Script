let esqueleto = "off"
let esqueletoStop = document.getElementById("esqueletoquieto");
let botonSonido = new Audio ("./sound/botonbailar.mp3")
let botonAudio = new Audio("./sound/audio.mp3")


function bailar(){
    if (esqueleto == "off"){
        esqueleto = "on";
        esqueletoStop.classList.add("on")
        console.log("On");
        esqueletoStop.addEventListener('click',()=>{
            botonSonido.play();
        })
        esqueletoStop.addEventListener('click',()=>{
            botonAudio.play();
        })
    
    
    }
    else{
        esqueleto="off";
        console.log("Off");
        esqueletoStop.classList.remove("on");
        esqueletoStop.addEventListener('click',()=>{
            botonAudio.pause();
        })
    }

}


