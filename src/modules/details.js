import { Icons } from "./icons-collection";

export const DetailsBar = (()=> {
    const bar = document.createElement('div');
    const div = document.createElement('div');
    const itemTitleContainer = document.createElement('div');
    const checkbox = document.createElement('input');
    const label = document.createElement('label');
    const dueDateSelector = document.createElement('div');
    const datePicker = document.createElement('span');
    const dateInput = document.createElement('input');
    const dateText = document.createElement('p');
    const addNotes = document.createElement('div');
    const notes = document.createElement('p');

    bar.setAttribute('class', 'details');
    itemTitleContainer.setAttribute('class', 'item-title');
    checkbox.setAttribute('type', 'checkbox');
    label.setAttribute('contenteditable', 'true');
    label.textContent = 'Wash dishes';
    dueDateSelector.setAttribute('class', 'calendar');
    datePicker.setAttribute('id', 'date-picker');
    dateInput.setAttribute('type', 'date');
    dateText.textContent = 'Due today';     // This output depends on the actual due date
    addNotes.setAttribute('class', 'add-notes');
    notes.setAttribute('contenteditable', 'true');
    notes.textContent = 'Don\'t break one';

    bar.append(Icons.xIcon, div, Icons.trashIcon);
    div.append(itemTitleContainer, dueDateSelector, addNotes);
    itemTitleContainer.append(checkbox, label, Icons.starEmptyIcon);
    dueDateSelector.append(datePicker, dateText);
    datePicker.append(dateInput);
    addNotes.append(Icons.notesIcon, notes);

    return { 
        bar,
        checkbox,
        label
    };
})();