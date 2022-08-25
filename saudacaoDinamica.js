function carregar(){
    
    let msg = document.getElementById('msg')
    let fotoDiv = document.getElementById('foto')
    let fotoTurno = document.getElementById('fotoTurno')
    let data = new Date()
    // let hora = data.getHours()
    let hora = 18
    msg.style.textAlign='center'
    fotoDiv.style.textAlign='center'

    
    if (hora >=0 && hora < 12){
        msg.textContent=(`Bom dia, agora são ${hora} Horas`)
        fotoTurno.src=("./img-modelo-exe/manha.jpg")
        document.body.style.background = '#c9c93f'
    } else if(hora > 11 && hora < 18){
        msg.textContent=(`Boa tarde, agora são ${hora} Horas`)
        fotoTurno.src=("img-modelo-exe/tarde.jpg")
        document.body.style.background = '#f48383'
    }else{
        msg.textContent=(`Boa noite, agora são ${hora} Horas`)
        fotoTurno.src='img-modelo-exe/noite.jpg'
        document.body.style.background = '#0e0a6d'
    }

}

