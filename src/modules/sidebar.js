import { Icons } from './icons-collection';

export const Sidebar = (() => {
    const bar = document.createElement('div');
    const listsContainer = document.createElement('ul');
    const tasksList = document.createElement('li');
    const taskText = document.createElement('span');
    const taskCount = document.createElement('span');
    const importantList = document.createElement('li');
    const importantText = document.createElement('span');
    const importantCount = document.createElement('span');
    const completedList = document.createElement('li');
    const completedText = document.createElement('span');
    const completedCount = document.createElement('span');
    const newListBtn = document.createElement('button');

    bar.setAttribute('class', 'sidebar');
    taskText.textContent = 'Tasks';
    taskCount.setAttribute('class', 'count');
    taskCount.textContent = '3';        // This count will be different based on the quantity of tasks in that list
    importantText.textContent = 'Important';
    importantCount.setAttribute('class', 'count');
    importantCount.textContent = '1';   // This count will be different based on the quantity of tasks in that list
    completedText.textContent = 'Completed';
    completedCount.setAttribute('class', 'count');
    completedCount.textContent = '1'    // This count will be different based on the quantity of tasks in that list
    newListBtn.textContent = '+ New List';

    bar.append(Icons.xIcon, listsContainer, newListBtn);
    listsContainer.append(tasksList, importantList, completedList);
    tasksList.append(Icons.houseIcon, taskText, taskCount);
    importantList.append(Icons.starEmptyIcon, importantText, importantCount);
    completedList.append(Icons.trashIcon, completedText, completedCount);
    
    return { bar };
})();