const refs = {
  body: document.querySelector('body'),
  switch: document.querySelector('.js-switch-input'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

refs.switch.addEventListener('change', setClassList);


function setClassList() {
  const checked = refs.switch.checked;

  if (checked) {
    refs.body.classList.add(Theme.DARK);
    refs.body.classList.remove(Theme.LIGHT);
  } else {
    refs.body.classList.add(Theme.LIGHT);
    refs.body.classList.remove(Theme.DARK);
  }
}

function setLocalStorage() {
  const checked = refs.switch.checked;

  if (checked) {
    localStorage.setItem('theme', Theme.DARK);
  } else {
    localStorage.removeItem('theme');
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

const themeInLocal = localStorage.getItem('theme');

if (themeInLocal === Theme.DARK) {
  refs.body.classList.add(Theme.DARK);
  refs.switch.checked = true; 
}
// Если при загрузке страницы тема тёмная Theme.DARK, 
// поставить свойство checked у чекбокса #theme-switch-toggle в true,
//  чтобы ползунок сдвинулся в правильное положение.