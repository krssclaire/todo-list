/* This module is a collection of icons created to be inserted in the DOM */

import HamburgerMenuIcon from '../assets/icons/hamburger-menu-icon.png';
import TickSignIcon from '../assets/icons/tick-circle-icon.png';
import XIcon from '../assets/icons/x-icon.png';
import HouseIcon from '../assets/icons/home-icon.png';
import StarEmptyIcon from '../assets/icons/star-icon.png';
import StarFilledIcon from '../assets/icons/star-filled-icon.png'
import TrashIcon from '../assets/icons/trash-icon.png';
import CalendarIcon from '../assets/icons/calendar-icon.png';
import NotesIcon from '../assets/icons/notes-icon.png';

export const Icons = (() => {
    const hamburgerMenu = document.createElement('img');
    const tickSignIcon = document.createElement('img');
    const xIcon = document.createElement('img');
    const houseIcon = document.createElement('img');
    const starEmptyIcon = document.createElement('img');
    const starFilledIcon = document.createElement('img');
    const trashIcon = document.createElement('img');
    const calendarIcon = document.createElement('img');
    const notesIcon = document.createElement('img');

    hamburgerMenu.setAttribute('src', HamburgerMenuIcon);
    tickSignIcon.setAttribute('src', TickSignIcon);
    xIcon.setAttribute('src', XIcon);
    houseIcon.setAttribute('src', HouseIcon);
    starEmptyIcon.setAttribute('src', StarEmptyIcon);
    starFilledIcon.setAttribute('src', StarFilledIcon);
    starEmptyIcon.setAttribute('class', 'star-icon');
    starFilledIcon.setAttribute('class', 'star-icon');
    trashIcon.setAttribute('src', TrashIcon);
    calendarIcon.setAttribute('src', CalendarIcon);
    notesIcon.setAttribute('src', NotesIcon);

    return {
        hamburgerMenu, 
        tickSignIcon, 
        xIcon, 
        houseIcon, 
        starEmptyIcon, 
        starFilledIcon,
        trashIcon,
        calendarIcon,
        notesIcon
    };
})();