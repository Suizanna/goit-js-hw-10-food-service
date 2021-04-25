import itemTemplate from './templates/dishes-cards.hbs';
import './styles.css';


const menuRef = document.querySelector('.js-menu'); // ссылка на рендер разметку меню


const murkUp = itemTemplate(dishes); //itemTemplate это template-фун-ция, которая ожидает вход аргументы

menuRef.insertAdjacentHTML('beforeend', murkUp);



