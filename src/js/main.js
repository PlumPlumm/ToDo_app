const btnCreatTask = document.querySelector('.sidebar__createTask');
const sidebarList = document.querySelector('.sidebar__taskList');
const nameTask = document.querySelector('.nameform__input')

let totalTask = 0;
//Создание задачи
function createTask(){

    createTaskName();
    // let taskBlock = document.createElement('li');
    // totalTask++;
    // taskBlock.className = 'sidebar__taskItem';
    // taskBlock.id = ` task_${totalTask}`;
    // taskBlock.innerHTML = `
    //     <p class="sidebar__text">хуй хуй хуй хуй</p>
    //     <input class="sidebar__del" onclick="delTask" type="image" src="./images/trash.svg" alt="Удалить задачу">`;

    
    // sidebarList.prepend(taskBlock);
}


let createTaskName = () => {
    let nameForm = document.createElement('div');
    nameForm.className = 'nameform';
    nameForm.innerHTML = `<div class="nameform__container">
        <h6 class="nameform__title">Введитe название задачи</h6>
    <input type="text" class="nameform__input" placeholder="Название задачи" autofocus>
    <div class="nameform__btn_wrapper">
        <button class="nameform__btn">Сохранить</button>
        <button class="nameform__btn">Отмена</button>
    </div>
     </div>`;

     

    document.body.prepend(nameForm);
};

