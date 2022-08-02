//alternar janelas

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

