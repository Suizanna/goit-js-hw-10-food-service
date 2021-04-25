const refs = {
    body: document.querySelector('body'),
    switch: document.querySelector('.theme-switch__toggle'),
  };
  
  const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };
  
//   console.log(localStorage);
 

  refs.switch.addEventListener('change', changeColorTheme);

  function changeColorTheme() {   
    const checked = refs.switch.checked;
    if(checked) {
        refs.body.classList.add(Theme.DARK);
        refs.bode.classList.remove(Theme.LIGHT);

        // localStorage.setItem('theme', Theme.DARK); 
    } else {
        refs.body.classList.add(Theme.LIGHT);
        refs.bode.classList.remove(Theme.DARK);

        // localStorage.setItem('theme', Theme.LIGHT);
    
    }
  }

  
function setLocalStorage(e) {
    const check = refs.switch.checked;
  
    if (check) {
      localStorage.setItem('theme', Theme.DARK); 
    } else {
      localStorage.removeItem('theme', Theme.DARK);
      localStorage.setItem('theme', Theme.LIGHT);
    }
  }


const localTheme = localStorage.getItem('theme'); //Чтение данных из локального хранилища 

if (themeInLocal === Theme.DARK) {
  refs.body.classList.add(Theme.DARK);
  refs.switch.checked = true;
}

// const localTheme = localStorage.getItem('theme');
// addClassForLocalTheme();

// function addClassForLocalTheme() {
//   if (localTheme === Theme.DARK) {
//     refs.body.classList.add(Theme.DARK);
//     refs.switch.checked = true;
//   }
// }