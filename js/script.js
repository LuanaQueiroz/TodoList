const tasks = []


//alternar janelas e mudar a cor dos botões

const showContent = (content) =>{ //content = div que possui as 2 áreas
    if(content === 'activies'){
        contentActivie.classList.add('active')
        contentDone1.classList.remove('active')
        bttActivie.classList.add('activeText')
        bttDone.classList.remove('activeText')
        
    }else{
        contentActivie.classList.remove('active')
        contentDone1.classList.add('active')
        bttActivie.classList.remove('activeText')
        bttDone.classList.add('activeText')
    }
}

//adicionar nova atividade

const createItem = (time,activity) =>{
    return `
    
    <div class='item'>
        <div class="activiesItem">
            <img src="images/VectorActivies.png" alt="ícone" class="icon">
            <span >${time}</span>
            <div class="item">${activity}</div>
            <img src="images/Line 3.png" alt="linha">
        </div>
        <div class="trashIcon">
            <button><img src="images/lixeira2.png" alt="ícone de lixeira"></button>
        </div>
        </div>
    ` 
}

//criação dos elementos time e activity nos inputs

const loadTasks = () =>{
    document.getElementById('contentActivie').innerHTML =''
    document.getElementById('contentActivie').innerHTML = tasks.join('')
}

const addTask = () =>{
    const task ={
        time: document.getElementById('areaTime').value,
        activity: document.getElementById('areaActivie').value
    }
    tasks.push(createItem(task.time, task.activity))  
    loadTasks() 
    
}


