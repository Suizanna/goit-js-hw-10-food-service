import itemTemplate from './templates/dishes-cards.hbs';
import './styles.css';


const menuRef = document.querySelector('.js-menu'); // ссылка на рендер разметку меню

//itemTemplate это template-функция, которая ожидает входящие аргументы
const murkUp = itemTemplate(dishes); 

menuRef.insertAdjacentHTML('beforeend', murkUp);



