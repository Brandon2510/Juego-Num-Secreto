let numeroSecreto = 0
let intentos = 0
let numerosSorteados = []
let numeroMaximo = 2

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*10)+1;

    if(numerosSorteados.length == numeroMaximo ){
        asignarTextoElemento('p','Upps. Lo sentimos nakamas ya se supero el numero de juegos permitidos');
        imagen.setAttribute('src', 'img/luffy3.png');
    } else {
        
        if (numerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        }else {
            numerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function  asignarTextoElemento(elemento, texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Bienvenido Nakama Desarrollador')
    asignarTextoElemento('p','Adivina un numero del 1 al 10')
    numeroSecreto = generarNumeroSecreto(); 
    intentos = 1
}


function verificarIntento()  {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    let imagen = document.querySelector('.container__imagen-persona');
    
    if (numeroSecreto === numeroDeUsuario){
        asignarTextoElemento('p',`Acertaste nakama el numero secreto es: ${numeroSecreto} y lo lograste en ${intentos} ${(intentos === 1) ? 'intento': 'intentos'}`)
        document.getElementById ('reiniciar').removeAttribute('disabled');
        imagen.setAttribute('src', './img/luffy2.png');
    }else {
        if (numeroSecreto > numeroDeUsuario) {
            asignarTextoElemento('p', `Uhhh! El numero secreto es mayor, Intentalo de nuevo`)
            imagen.setAttribute('src', './img/zoro.png'); 
        }else {
            asignarTextoElemento('p', ` El numero secreto es menor vuelve a intentarlo nakama`)
            imagen.setAttribute('src', './img/chopper.png');
        }
        intentos++
        linpiarCaja();
        
    }
        
    return;
}

function linpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function reiniciarJuego(){
    linpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true')
    imagen.setAttribute('src', './img/chopper.png');
    
}


condicionesIniciales();