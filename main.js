var elementosComClasses = document.getElementsByClassName("tecla tecla_psh tecla_tic tecla_tom tecla_toim tecla_splash tecla_puff tecla_tim tecla_pom");

function tocar(){
    let audio = [document.querySelector('#som_tecla_pom'), document.querySelector('#som_tecla_clap'), document.querySelector('#som_tecla_tim'),document.querySelector('#som_tecla_puff'), document.querySelector('#som_tecla_splash'), document.querySelector('#som_tecla_toim'), document.querySelector('#som_tecla_psh'), document.querySelector('#som_tecla_tic'), document.querySelector('#som_tecla_tom')]
    audio[5].play()
}