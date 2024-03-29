import { Icons } from "./icons-collection";

export const List = (()=> {
    const content = document.createElement('div');
    const title = document.createElement('h1');
    const titleText = document.createElement('span');
    const itemsContainer = document.createElement('div');
    const item = document.createElement('div');
    const checkbox = document.createElement('input');
    const taskInfo = document.createElement('div');
    const itemLabel = document.createElement('label');
    const infoGroup = document.createElement('div');
    const dateInfo = document.createElement('p');
    const lineDivider = document.createElement('span');
    const addTaskDiv = document.createElement('div');
    const btn = document.createElement('button');
    const btnText = document.createElement('span');
    const xIcon = Icons.xIcon.cloneNode(true);

    const houseIcon = Icons.houseIcon.cloneNode(true);
    const starFilledIcon = Icons.starFilledIcon.cloneNode(true);
    const notesIcon = Icons.notesIcon.cloneNode(true);
    const calendarIcon = Icons.calendarIcon.cloneNode(true);

    content.setAttribute('class', 'list');
    titleText.setAttribute('contenteditable', 'true');
    titleText.textContent = 'Tasks';
    itemsContainer.setAttribute('class', 'list-items');
    item.setAttribute('class', 'list-item');
    checkbox.setAttribute('type', 'checkbox');
    taskInfo.setAttribute('class', 'task-info');
    dateInfo.textContent = 'Due today';
    itemLabel.textContent = 'Wash dishes';
    lineDivider.setAttribute('class', 'divider');
    lineDivider.textContent = ' | ';
    btn.textContent = '+';
    btnText.setAttribute('class', 'btn-text');
    btnText.textContent = ' New Task';

    content.append(title, itemsContainer, addTaskDiv);
    title.append(houseIcon, titleText);
    itemsContainer.append(item);
    item.append(checkbox, taskInfo, starFilledIcon);
    taskInfo.append(itemLabel, infoGroup);
    infoGroup.append(dateInfo, notesIcon);
    dateInfo.prepend(calendarIcon);
    dateInfo.append(lineDivider);
    addTaskDiv.append(btn);
    btn.append(btnText);

    return { 
        content,
        item
    };
})();