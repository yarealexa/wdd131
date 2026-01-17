
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');
let body = document.querySelector('body');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current === 'dark') {
        body.classList.add('dark');
        logo.setAttribute('src', 'byui-logo-white.png'); 
    } else{
        body.classList.remove('dark');
        logo.setAttribute('src', 'byui-logo.png');
}      
}