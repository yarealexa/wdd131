let title = document.querySelector('h1');
console.log(title)

title.textContent = 'Web Page Components';

let topic_title = document.getElementById('topics');

topic_title.style.color = 'red';

let list = document.querySelector('.list');

list.style.border = '3px solid black';

let paragraph = document.querySelector('p')

paragraph.classList.add('background');
 //paragraph.style.backgroundColor = ('black')

 let image = document.querySelector('img')

// image.setAttribute ('src', 'images/logo.png')

 
let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
    document.querySelector('#html').style.color = 'blue';
})


const newPara = document.createElement('p');
newPara.innerText = 'added with JavaScript';
document.body.appendChild(newPara);