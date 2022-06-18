const btnCreatTask = document.querySelector('.sidebar__createTask');
const sidebarList = document.querySelector('.sidebar__taskList');


//Создание задачи
function createTask(){
    let taskBlock = document.createElement('li');
    taskBlock.className = 'sidebar__taskItem';
    taskBlock.innerHTML = `
        <p class="sidebar__text">хуй хуй хуй хуй</p>
        <input class="sidebar__del" onclick="delTask" type="image" src="./images/trash.svg" alt="Удалить задачу">`;

    sidebarList.prepend(taskBlock);
}
