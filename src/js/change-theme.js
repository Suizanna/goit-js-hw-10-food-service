const refs = {
    body: document.querySelector('body'),
    switch: document.querySelector('.theme-switch__toggle'),
  };
  
  const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };
  
  console.log(localStorage);
 

  refs.switch.addEventListener('change', changeColorTheme);

  function changeColorTheme() {   
    const checked = refs.switch.checked;
    if(checked) {
        refs.body.classList.add(Theme.DARK);
        refs.bode.classList.remove(Theme.LIGHT);

        localStorage.setItem('theme', Theme.DARK); // записать пару ключ:значение. localStorage хранит только строки
    } else {
        refs.body.classList.add(Theme.LIGHT);
        refs.bode.classList.remove(Theme.DARK);

        localStorage.setItem('theme', Theme.LIGHT);
    
    }
  }

// Добавляем класс на боди и перемещаем переключатель, если в localStorage была темная тема

const localTheme = localStorage.removeItem('theme'); //Чтение данных из локального хранилища 

if (themeInLocal === Theme.DARK) {
    refs.body.classList.add(Theme.DARK);
    refs.switch.checked = true;
  }