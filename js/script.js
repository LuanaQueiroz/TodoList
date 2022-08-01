//alternar janelas

const changeWindow = () =>{

    let contentActivie = document.querySelector('#contentActivie')
    let contentDone1 = document.querySelector('#contentDone1')

    if(contentActivie.classList.contains('active')){
        contentActivie.classList.remove('active')
        contentDone1.classList.add('active')

    }else{
        contentActivie.classList.add('active')
        contentDone1.classList.remove('active')
    }

    

}