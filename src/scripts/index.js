"use strict";
import EN from './keyboardLayouts.js';


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

let shiftMode = 0;
let capsMode = 0;

function fillKeyboard() {
    let whichKey = "key";
    
    console.log(whichKey);
    if(shiftMode === 1) {
        whichKey = "bigKey";
    }
    console.log(whichKey);
    for(let key in EN){
        let keyboardItem = document.createElement('li');
        keyboardItem.innerHTML = EN[key][whichKey];
        if(EN[key]["key"] === '◀' 
              || EN[key]["key"] === '▼' 
              || EN[key]["key"] === '▶' 
              || EN[key]["key"] === '▲'){
            keyboardItem.className = 'key arrow';
        }
        else if(key.length === 1) {
            keyboardItem.className = 'key symbol';
        }
        else if(key === 'Space') {
            keyboardItem.className = 'key space';
        }
        else if(EN[key]["key"] === 'Shift' || EN[key]["key"] === 'Enter') {
            keyboardItem.className = 'key bigModifier';
        }
        else {
            keyboardItem.className = 'key modifier';
        }
        keyboardItem.id = key;
        keyboard.append(keyboardItem); 
    }

    return document.querySelectorAll('.key');
}

let keys = fillKeyboard();
console.log(keys);

document.addEventListener('keydown', function(event) {
    keys.forEach(item => {
        /* if(event.key === "Shift") {
            shiftMode = 1;
            keyboard.remove();
            fillKeyboard();
        } */
        if(event.code === EN[item.id]["code"]) {
            item.classList.add('active');
            textarea.textContent += item.textContent;
        }
    })
})
document.addEventListener('keyup', function(event) {
    keys.forEach(item => {
        if(event.code === EN[item.id]["code"]) {
            item.classList.remove('active');
        }
    })
})

for(let key of keys){
    key.onclick = function(){
        textarea.textContent += key.textContent;
    }
} 
