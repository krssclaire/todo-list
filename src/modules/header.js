import { Icons } from './icons-collection';

export const Header = (() => {
    const bar = document.createElement('header');
    const logo = document.createElement('div');
    const logoText = document.createElement('p');

    logoText.textContent = ' I-Do';

    bar.append(Icons.hamburgerMenu, logo);
    logo.append(Icons.tickSignIcon, logoText);

    return { bar };
})();