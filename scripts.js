let altura = window.innerHeight
let largura = window.innerWidth
let vidas = 1
let tempo = 30

var nivel = window.location.search
nivel = nivel.replace("?", "")

let mosquitoTempo = 1500 

if(nivel === "normal") {
    mosquitoTempo = 1500
} else if(nivel === "dificil") {
    mosquitoTempo = 1000
} else if(nivel === "impossivel") {
    mosquitoTempo = 750
}

let cronometro = setInterval(() => {
    tempo--
    if(tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaMosca)
        window.location.href = "vitoria.html"
        
    } else {
        document.getElementById("cronometro").innerHTML = tempo
    }
   
}, 1000)

function positionAleatoria() {

    if(document.getElementById("mosquito")) {
        document.getElementById("mosquito").remove()

        if(vidas > 3) {
            window.location.href = "fim_de_jogo.html"
        } else {
            document.getElementById("v" + vidas).src = "./imagens/coracao_vazio.png"
            vidas++
        }
        
    }

    let x = Math.floor(Math.random() * largura) - 90
    let y = Math.floor(Math.random() * altura) - 90

    x = x < 0 ? 0 : x
    y = y < 0 ? 0 : y
    
    let mosquito = document.createElement("img")
    mosquito.style.top = `${y}px`
    mosquito.style.right = `${x}px`
    mosquito.src = "imagens/mosca.png"
    mosquito.className = `${tamanhoAleatorio()} ${ladoAleatorio()}`
    mosquito.style.position = "absolute"
    mosquito.id = "mosquito"
    document.body.appendChild(mosquito)
    mosquito.onclick = function(){
        this.remove()
    }
}
    
function tamanhoAleatorio() {
    let classe = Math.floor(Math.random() * 3);
    switch (classe) {
        case 0:
            return "mosquito1"
        case 1:
           return "mosquito2"
        case 2:
            return "mosquito3"   
    }
}

function ladoAleatorio() {
    let classE = Math.floor(Math.random() * 2);
    console.log(classE)
    switch (classE) {
        case 0:
            return "ladoA" 
        case 1:
            return "ladoB"
    }
}

    

