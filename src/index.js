import itemTemplate from './templates/dishes-cards.hbs';
import './styles.css';


const menuRef = document.querySelector('.js-menu'); // ссылка на рендер разметку меню


const murkUp = itemTemplate(dishes); //itemTemplate это template-функция, которая ожидает входящие аргументы

menuRef.insertAdjacentHTML('beforeend', murkUp);



