### Why?

The purpose of this document is to visually show the structure of the webpage in HTML body. 
This might be useful since the objects created in modules with module patterns features the DOM manipulation techniques.

```html 
<body>
    <div class="webpage">
        <header>
            <img src="assets/icons/hamburger-menu-icon.png">
            <div>
                <img src="assets/icons/tick-circle-icon.png">
                <p>I-Do</p>
            </div>
        </header>
        <div class="content">
            <div class="sidebar">
                <img src="assets/icons/x-icon.png">
                <ul>
                    <li>
                        <img src="assets/icons/home-icon.png">
                        <span>Tasks</span>
                        <span class="count">3</span>
                    </li>
                    <li>
                        <img class="star-icon" src="assets/icons/star-icon.png">
                        <span>Important</span>
                        <span class="count">1</span>
                    </li>
                    <li>
                        <img src="assets/icons/trash-icon.png">
                        <span>Completed</span>
                        <span class="count">1</span>
                    </li>
                </ul>
                <button>+ New List</button>
            </div>

            <div class="list">
                <h1>
                    <img src="assets/icons/home-icon.png" alt="Home Icon">
                    <span contenteditable="true">Tasks</span>
                </h1>
                <div class="list-items">
                    <div class="list-item">
                        <input type="checkbox">
                        <div class="task-info">
                            <label>Wash dishes</label>
                            <div>
                                <p>
                                    <img src="assets/icons/calendar-icon.png" alt="Calendar Icon">
                                    Due today<span class="divider"> | </span>
                                </p>
                                <img src="assets/icons/notes-icon.png" alt="Notes Icon">
                            </div>
                        </div>
                        <img class="star-icon" src="assets/icons/star-filled-icon.png">
                    </div>
                    <div class="list-item">
                        <input type="checkbox">
                        <div class="task-info">
                            <label>Take trash out</label>
                            <div>
                                <p>
                                    <img src="assets/icons/calendar-icon.png" alt="Calendar Icon">
                                    Due tomorrow <span class="divider">|</span>
                                </p>
                                <img src="assets/icons/notes-icon.png" alt="Notes Icon">
                            </div>
                        </div>
                        <img class="star-icon" src="assets/icons/star-icon.png" alt="Filled Start Icon">
                    </div>
                    <div class="list-item">
                        <input type="checkbox">
                        <div class="task-info">
                            <label>Finish reading Book</label>
                            <div>
                                <p>
                                    <img src="assets/icons/calendar-icon.png" alt="Calendar Icon">
                                    Aug 10 2023 <span class="divider">|</span>
                                </p>
                                <img src="assets/icons/notes-icon.png" alt="Notes Icon">
                            </div>
                        </div>
                        <img class="star-icon" src="assets/icons/star-icon.png" alt="Filled Start Icon">
                    </div>
                </div>
                <div>
                    <button>+<span class="btn-text"> New Task</span></button>
                </div>
            </div>

            <div class="details">
                <img src="assets/icons/x-icon.png" alt="X Icon">
                <div>
                    <div class="item-title">
                        <input type="checkbox">
                        <label contenteditable="true">Wash dishes</label>
                        <img class="star-icon" src="assets/icons/star-filled-icon.png">
                    </div>
                    <div class="calendar">
                        <span id="date-picker">
                            <input type="date">
                        </span>
                        <p>Due today</p>
                    </div>
                    <div class="add-notes">
                        <img src="assets/icons/notes-icon.png">
                        <p contenteditable="true">Don't break one</p>
                    </div>
                </div>
                <img src="assets/icons/trash-icon.png" alt="Trash Icon">
            </div>
        </div>
    </div>
</body>
```