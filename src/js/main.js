const btnCreatTask = document.querySelector('.sidebar__createTask');
const sidebarList = document.querySelector('.sidebar__taskList');


let totalTask = 0;

//Конструктор задач
function Task(taskName){
    this.taskName = taskName;
    this.taskList = [];
}

//Конструктор списка в задачи
function TaskList(description){
    this.description = description;
    this.completed = false;
}



//Создание задачи
function createTask(){
//Вывод окна naveform
    let nameForm = document.createElement('div');
    nameForm.className = 'nameform';
    nameForm.innerHTML = `<div class="nameform__container">
        <h6 class="nameform__title">Введитe название задачи</h6>
    <input type="text" class="nameform__input" placeholder="Название задачи" autofocus>
    <div class="nameform__btn_wrapper">
        <button class="nameform__btn" id='btnSave'>Сохранить</button>
        <button class="nameform__btn" id='btnClose'>Отмена</button>
    </div>
    </div>`;
    document.body.prepend(nameForm);
    
    const nameForm_btnSave = document.getElementById('btnSave');
    const nameForm_btnClose = document.getElementById('btnClose');
    const nameForm_input = document.querySelector('.nameform__input');

    //Сохранить
    nameForm_btnSave.onclick = () => {
        let nameTask = nameForm_input.value;
        let taskBlock = document.createElement('li');
        totalTask++;
        taskBlock.className = 'sidebar__taskItem';
        taskBlock.id = ` task_${totalTask}`;
        taskBlock.innerHTML = `<p class="sidebar__text">${nameTask}</p> 
                                <input class="sidebar__del" onclick="delTask" type="image" src="./images/trash.svg" alt="Удалить задачу">`;
        
        sidebarList.prepend(taskBlock);
        nameForm.remove();
    }
    //Отмена
    nameForm_btnClose.onclick = () => {
        nameForm.remove();
    }


    

    // let taskBlock = document.createElement('li');
    // totalTask++;
    // taskBlock.className = 'sidebar__taskItem';
    // taskBlock.id = ` task_${totalTask}`;
    // taskBlock.innerHTML = `
    //     <p class="sidebar__text">хуй хуй хуй хуй</p>
    //     <input class="sidebar__del" onclick="delTask" type="image" src="./images/trash.svg" alt="Удалить задачу">`;

    
    // sidebarList.prepend(taskBlock);
}



