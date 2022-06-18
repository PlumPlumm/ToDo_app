const btnCreatTask = document.querySelector('.sidebar__createTask');
const sidebarList = document.querySelector('.sidebar__taskList');


let totalTask = 0;
//Создание задачи
function createTask(){

    let createTaskName = () => {
        let nameForm = document.createElement('div');
        nameForm.className = 'sidebar__nameform';
        nameForm.innerHTML 
    }

    formTaskNam();

    // let taskBlock = document.createElement('li');
    // totalTask++;
    // taskBlock.className = 'sidebar__taskItem';
    // taskBlock.id = ` task_${totalTask}`;
    // taskBlock.innerHTML = `
    //     <p class="sidebar__text">хуй хуй хуй хуй</p>
    //     <input class="sidebar__del" onclick="delTask" type="image" src="./images/trash.svg" alt="Удалить задачу">`;

    
    // sidebarList.prepend(taskBlock);
}

function delTask(){

}
