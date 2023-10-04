import { Header } from './modules/header';
import { Sidebar } from './modules/sidebar';
import { List } from './modules/list';
import { DetailsBar } from './modules/details';
import './index.css';


const body = document.querySelector('body');
const webpage = document.createElement('div');
const container = document.createElement('div');

webpage.setAttribute('class', 'webpage');
container.setAttribute('class', 'content');

body.prepend(webpage);
webpage.append(Header.bar, container);
container.append(Sidebar.bar, List.content, DetailsBar.bar);


/*
const projects = [];

class List {
    constructor(itemsCount, id) {
        this.itemsCount = itemsCount;
        this.id = id;
    }
}

class ListItem {
    constructor(title, dueDate, description, starred, list) {
        this.title = title;
        this.dueDate = dueDate;
        this.description = description;
        this.starred = starred;
        this.list = list;
    }
}

const Tasks = new List(0, crypto.randomUUID());
console.log(Tasks);
*/