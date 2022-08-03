//alternar janelas e mudar a cor dos botões

const changeWindow = () =>{
    
    let bttActivie = document.querySelector('#bttActivie')
    let bttDone = document.querySelector('#bttDone')
    let contentActivie = document.querySelector('#contentActivie')
    let contentDone1 = document.querySelector('#contentDone1')

    if(contentActivie.classList.contains('active')){
        contentActivie.classList.remove('active')
        contentDone1.classList.add('active')
        bttDone.style.color = '#708DF8'
        bttActivie.style.color = '#B8B8B8'

    }else{
        contentActivie.classList.add('active')
        contentDone1.classList.remove('active')
        bttDone.style.color = '#B8B8B8'
        bttActivie.style.color = '#708DF8'
    }

}

//adicionar nova atividade

const createItem = (time,activity) =>{
    const item = document.createElement('label')
    item.classList.add('activies')
    item.innerHTML = `
        <div class="activiesItem"> <!--nome da atividade e tempo-->
            <img src="images/VectorActivies.png" alt="ícone" class="icon">
            <span >${time}</span>
            <div class="item">${activity}</div>
            <img src="images/Line 3.png" alt="linha">
        </div>
        <div class="trashIcon"><!--ícone de lixeira-->
            <button><img src="images/Vector.png" alt="ícone de lixeira"></button>
        </div>
    `
    document.getElementById('contentActivie').appendChild(item)
}

