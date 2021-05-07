const refs = {
  body: document.querySelector('body'),
  input: document.querySelector('.theme-switch__toggle'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

refs.input.addEventListener('change', setClassList);

// выносим логику в отдельную функцию
function toggleTheme(rem, add) { 
  refs.body.classList.remove(rem)
  refs.body.classList.add(add)
  localStorage.setItem('Theme', add)
}

function setClassList(e) {
  if (e.target.checked) {
  toggleTheme(Theme.LIGHT,Theme.DARK)
    return
  }
 toggleTheme(Theme.DARK, Theme.LIGHT)
}
refs.input.checked = localStorage.getItem('Theme') === Theme.DARK;
refs.body.classList.add(localStorage.getItem('Theme') === null ? Theme.LIGHT : localStorage.getItem('Theme'))

// 2 вар
// function setClassList() {
//   const check = refs.input.checked;

//   if (check) {
//     refs.body.classList.remove(Theme.LIGHT);
//     refs.body.classList.add(Theme.DARK);
//     localStorage.setItem('theme', Theme.DARK);
//     return;
//   } else {
//     refs.body.classList.remove(Theme.DARK);
//     refs.body.classList.add(Theme.LIGHT);
//     localStorage.setItem('theme', Theme.LIGHT);
//   }
// }


// const themeInLocal = localStorage.getItem('theme');

// if (themeInLocal === Theme.DARK) {
//   refs.body.classList.add(Theme.DARK);
//   refs.input.checked = true;
// }