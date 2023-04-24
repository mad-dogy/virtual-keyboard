import lowerCaseEN from './keyboardLayouts.js';

//Create base layout
let container = document.createElement('div');
container.className = 'container';
document.body.append(container);

let title = document.createElement('h1');
title.className = 'title';
title.innerHTML = 'Virtual Keyboard';
container.prepend(title);

let textarea = document.createElement('textarea');
textarea.id = 'keyboardInput';
textarea.name = 'keyboard';
textarea.cols = '25';
textarea.rows = '5';
container.append(textarea);

let keyboard = document.createElement('ul');
keyboard.className = 'keyboard';
container.append(keyboard);

for(let key in lowerCaseEN){
    let keyboardItem = document.createElement('li');
    keyboardItem.innerHTML = lowerCaseEN[key]["key"];
    if(lowerCaseEN[key]["key"] === '◀' 
          || lowerCaseEN[key]["key"] === '▼' 
          || lowerCaseEN[key]["key"] === '▶' 
          || lowerCaseEN[key]["key"] === '▲'){
        keyboardItem.className = 'key arrow';
    }
    else if(key.length === 1) {
        keyboardItem.className = 'key symbol';
    }
    else if(key === 'Space') {
        keyboardItem.className = 'key space';
    }
    else if(lowerCaseEN[key]["key"] === 'Shift' || lowerCaseEN[key]["key"] === 'Enter') {
        keyboardItem.className = 'key bigModifier';
    }
    else {
        keyboardItem.className = 'key modifier';
    }
    keyboardItem.id = key;
    keyboard.append(keyboardItem); 
}

let keys = document.querySelectorAll('.key');

document.addEventListener('keydown', function(event){
    keys.forEach(item => {
        if(event.code === lowerCaseEN[item.id]["code"]) {
            item.classList.add('active');
        }
    })
})
document.addEventListener('keyup', function(event){
    keys.forEach(item => {
        if(event.code === lowerCaseEN[item.id]["code"]) {
            item.classList.remove('active');
        }
    })
})
   