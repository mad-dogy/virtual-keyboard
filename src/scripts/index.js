"use strict";
import EN from './keyboardLayouts.js';
import RU from './keyboardLayouts.js';

let language = EN;

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

let shiftMode = false;
let capsMode = false;

function fillKeyboard() {
    keyboard.innerHTML = "";
    let whichKey = "key";
    
    if(shiftMode === true) {
        whichKey = "bigKey";
    }

    for(let key in EN) {
        let keyboardItem = document.createElement('li');
        if(EN[key]["bigKey"] === false) {
            keyboardItem.innerHTML = EN[key]["key"];
        }
        else {
            keyboardItem.innerHTML = EN[key][whichKey];
        }

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

    return document.querySelectorAll('.key')
}

let keys = fillKeyboard();

document.addEventListener('keydown', function(event) {
    keys.forEach(item => {
        if(event.key === "Shift" && event.code === EN[item.id]["code"]) {
            console.log(111)
            console.log(item);
            item.classList.add('active');

            shiftMode = true;
            keys = fillKeyboard();
        }
        else if(event.code === EN[item.id]["code"] && (event.key === "CapsLock" ||
           event.key === "Control" ||
           event.key === "Tab" ||
           event.key === "Alt" ||
           event.key === "Meta" ||
           event.key === "Delete")) {
            console.log(item);
            item.classList.add('active');
            return ;
        }
        else if(event.code === EN[item.id]["code"]) {
            item.classList.add('active');
            textarea.textContent += item.textContent;
        }
    })
})
document.addEventListener('keyup', function(event) {
    keys.forEach(item => {
        if(event.key === "Shift" && event.code === EN[item.id]["code"]) {
            shiftMode = false;
            keys = fillKeyboard();
            item.classList.remove('active');
        }
        if(event.code === EN[item.id]["code"]) {
            item.classList.remove('active');
        }
    })
})

keyboard.addEventListener('click', function() {
    keys = fillKeyboard();
    for(let key of keys){
        
        key.onclick = function(){
            console.log(key);
            if(key.innerHTML === "Shift") {
                shiftMode = !shiftMode;
                keys = fillKeyboard();
                return ;
            }
            textarea.textContent += key.textContent;
        }
    }
})
 
