const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const loginButton = document.querySelector('#login-form button');

function onLonginBtnClick() {
    const username = loginInput.value;
    if(username === '') {
        alert('please write your name');
    } else if (username.length > 15) {
        alert('your name is too long')
    }
}

loginButton.addEventListener('click', onLonginBtnClick);