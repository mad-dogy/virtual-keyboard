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

    for(let key in EN) {
        let keyboardItem = document.createElement('li');
        keyboardItem.innerHTML = EN[key]["key"];

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

        if(EN[key]["keyCode"] > 64 && EN[key]["keyCode"] < 91) {
            keyboardItem.className = 'key symbol letter';
        }

        keyboardItem.id = key;
        keyboard.append(keyboardItem); 
    }

    return document.querySelectorAll('.key');
}

function changeShiftKeyboard() {
    let whichKey = "key";
    keys = document.querySelectorAll('.key');

    if(shiftMode === true) {
        whichKey = "bigKey";
    }
    for(let i = 0; i < keys.length; ++i) {
        if(EN[keys[i].id]["bigKey"] === false) {
            keys[i].innerHTML = EN[keys[i].id]["key"];
        }
        else {
            keys[i].innerHTML = EN[keys[i].id][whichKey];
        }
    }
}

function changeCapsKeyboard() {
    let whichKey = "key";
    keys = document.querySelectorAll('.key');

    if(capsMode === true) {
        whichKey = "bigKey";
    }
    for(let i = 0; i < keys.length; ++i) {
        if(keys[i].classList.contains('letter')) {
            keys[i].innerHTML = EN[keys[i].id][whichKey];
        }
    }
}

let keys = fillKeyboard();
let count = 0;

document.addEventListener('keydown', function(event) {
    keys.forEach(item => {
        if(event.key === "Shift" && event.code === EN[item.id]["code"]) {
            item.classList.add('active');
            shiftMode = true;
            changeShiftKeyboard();
            return ;
        }

        if(event.key === "CapsLock" && event.code === EN[item.id]["code"]) {
            if(capsMode === true){
                item.classList.remove('active');
            }
            else {
                item.classList.add('active');
            }
            
            capsMode = !capsMode;
            changeCapsKeyboard();
            return ;
        }

        if(event.key === "Backspace" && event.code === EN[item.id]["code"]) {
            let textareaLength = textarea.textContent.length;
                let leftPart = '';
                if(textarea.selectionStart !== 0) {
                    leftPart = textarea.textContent.slice(textarea.selectionStart, textareaLength - 1);
                }
                
                textarea.textContent = textarea.textContent.slice(0, textarea.selectionStart - 1);
                textarea.textContent += leftPart;
            item.classList.add('active');
            
            return;
        }

        if(event.key === "Enter" && event.code === EN[item.id]["code"]) {
            textarea.textContent += '\n';
            item.classList.add('active');
            return ;
        }
        
        if(event.code === EN[item.id]["code"] && (event.key === "Control" ||
           event.key === "Tab" ||
           event.key === "Alt" ||
           event.key === "Meta" ||
           event.key === "Delete")) {
            item.classList.add('active');
            return ;
        }

        if(event.code === EN[item.id]["code"]) {
            console.log(textarea.textContent)
            item.classList.add('active');
            textarea.textContent += item.textContent;
            return ;
        }
    })
})
document.addEventListener('keyup', function(event) {
    keys.forEach(item => {
        
        if(event.key === "Shift" && event.code === EN[item.id]["code"]) {
            shiftMode = false;
            changeShiftKeyboard();
            item.classList.remove('active');
            return ;
        }

        if(event.key === "CapsLock" && event.code === EN[item.id]["code"]) {
            return ;
        }

        if(event.code === EN[item.id]["code"]) {
            item.classList.remove('active');
            return ;
        }
    })
})

keyboard.addEventListener('click', function() {
    for(let key of keys){
        
        key.onclick = function(){
            if(key.innerHTML === "Shift") {
                shiftMode = !shiftMode;
                changeShiftKeyboard();
                return ;
            }
            if(shiftMode === true) {
                shiftMode = false;
                changeShiftKeyboard();
                textarea.textContent += key.textContent;
                return ;
            }
            if(key.innerHTML === "Caps Lock") {
                capsMode = !capsMode;
                key.classList.toggle('active');
                changeCapsKeyboard();
                return ;
            }
            if(key.innerHTML === "Backspace") {
                let textareaLength = textarea.textContent.length;
                console.log(textareaLength)
                textarea.textContent = textarea.textContent.slice(0, textareaLength - 1);
                return;
            }
            if(key.innerHTML === "Enter") {
                textarea.textContent += '\n';
                return ;
            }
            textarea.textContent += key.textContent;
        }
    }
})

textarea.addEventListener('click', function() {
    console.log(textarea.selectionStart)
})
 
