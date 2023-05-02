import EN from './ENlayout.js';
import RU from './RUlayout.js';

let language = 'EN';
if(window.localStorage.getItem('language')) {
  language = window.localStorage.getItem('language');
} else {
  language = 'EN';
}
let langObj = EN;
if(language === 'RU') {
  langObj = RU;
}

const container = document.createElement('div');
container.className = 'container';
document.body.append(container);

const title = document.createElement('h1');
title.className = 'title';
title.innerHTML = 'Virtual Keyboard';
container.prepend(title);

const textarea = document.createElement('textarea');
textarea.id = 'keyboardInput';
textarea.name = 'keyboard';
textarea.cols = '25';
textarea.rows = '5';
container.append(textarea);

const keyboard = document.createElement('ul');
keyboard.className = 'keyboard';
container.append(keyboard);

let shiftMode = false;
let capsMode = false;

function fillKeyboard () {
  keyboard.innerHTML = '';

  for (const item in langObj) {
    const keyboardItem = document.createElement('li');
    keyboardItem.innerHTML = langObj[item].key;

    if (langObj[item].key === 'language') {
      keyboardItem.className = 'key';
      keyboardItem.innerHTML = language;
    }
    if (langObj[item].key === '◀' ||
        langObj[item].key === '▼' ||
        langObj[item].key === '▶' ||
        langObj[item].key === '▲') {
      keyboardItem.className = 'key arrow';
    } else if (item.length === 1) {
      keyboardItem.className = 'key symbol';
    } else if (item === 'Space') {
      keyboardItem.className = 'key space';
    } else if (langObj[item].key === 'Shift' || langObj[item].key === 'Enter') {
      keyboardItem.className = 'key bigModifier';
    } else {
      keyboardItem.className = 'key modifier';
    }

    if (langObj[item].keyCode > 64 && langObj[item].keyCode < 91) {
      keyboardItem.className = 'key symbol letter';
    }

    keyboardItem.id = item;
    keyboard.append(keyboardItem);
  }

  return document.querySelectorAll('.key');
}
function changeShiftKeyboard () {
  let whichKey = 'key';
  keys = document.querySelectorAll('.key');
  if (shiftMode === true) {
    whichKey = 'bigKey';
  }
  for (let i = 0; i < keys.length; ++i) {
    if (langObj[keys[i].id].key === 'language') {
      continue;
    }
    if (langObj[keys[i].id][whichKey] === false) {
      keys[i].innerHTML = langObj[keys[i].id].key;
    } else {
      keys[i].innerHTML = langObj[keys[i].id][whichKey];
    }
  }
}
function changeCapsKeyboard () {
  keys = document.querySelectorAll('.key');
  for (let i = 0; i < keys.length; ++i) {
    if (langObj[keys[i].id].key === 'language') {
      continue;
    }
    if (keys[i].classList.contains('letter') || keys[i].classList.contains('symbol')) {
      if (capsMode === false) {
        keys[i].innerHTML = keys[i].innerHTML.toLowerCase();
        continue;
      }
      keys[i].innerHTML = keys[i].innerHTML.toUpperCase();
    }
  }
}

function changeLanguage () {
  keys = document.querySelectorAll('.key');
  let i = 0;
  if (language === 'EN') {
    language = 'RU';
    langObj = RU;
    for (const key in RU) {
      if (keys[i].innerHTML === 'EN') {
        keys[i].innerHTML = language;
        ++i;
        continue;
      }
      keys[i].innerHTML = RU[key].key;
      keys[i].id = key;
      ++i;
    }
  } else {
    language = 'EN';
    langObj = EN;
    for (const key in EN) {
      if (keys[i].innerHTML === 'RU') {
        keys[i].innerHTML = language;
        ++i;
        continue;
      }
      keys[i].innerHTML = EN[key].key;
      keys[i].id = key;
      ++i;
    }
  }
  window.localStorage.setItem('language', language);
  window.localStorage.setItem('langObj', langObj);
  console.log(langObj);
}

let keys = fillKeyboard();

let flag = false;

document.onkeydown = function (event) {
  if (event.code === 'ControlLeft') {
    flag = true;
  }
  if (event.code === 'AltLeft' && flag) {
    flag = false;
    changeLanguage();
  }
};

document.addEventListener('keydown', function (event) {
  keys.forEach(item => {
    if (event.key === 'Shift' && event.code === langObj[item.id].code) {
      item.classList.add('active');
      shiftMode = true;
      changeShiftKeyboard();
      return;
    }

    if (event.key === 'CapsLock' && event.code === langObj[item.id].code) {
      if (capsMode === true) {
        item.classList.remove('active');
      } else {
        item.classList.add('active');
      }
      capsMode = !capsMode;
      changeCapsKeyboard();
      return;
    }

    if (event.key === 'Backspace' && event.code === langObj[item.id].code) {
      const textareaLength = textarea.textContent.length;
      let leftPart = '';
      if (textarea.selectionStart !== 0) {
        leftPart = textarea.textContent.slice(textarea.selectionStart, textareaLength - 1);
      }
      textarea.textContent = textarea.textContent.slice(0, textarea.selectionStart - 1);
      textarea.textContent += leftPart;
      item.classList.add('active');
      return;
    }

    if (event.key === 'Enter' && event.code === langObj[item.id].code) {
      textarea.textContent += '\n';
      item.classList.add('active');
      return;
    }
    if (event.code === langObj[item.id].code && (event.key === 'Tab' ||
       event.key === 'Meta' ||
       event.key === 'Control' ||
       event.key === 'Alt' ||
       event.key === 'Delete')) {
      item.classList.add('active');
      return;
    }
    if (event.code === langObj[item.id].code) {
      item.classList.add('active');
      textarea.textContent += item.textContent;
    }
  });
});
document.addEventListener('keyup', function (event) {
  keys.forEach(item => {
    if (event.key === 'Shift' && event.code === langObj[item.id].code) {
      shiftMode = false;
      changeShiftKeyboard();
      item.classList.remove('active');
      return;
    }

    if (event.key === 'CapsLock' && event.code === langObj[item.id].code) {
      return;
    }
    if (event.code === 'ControlLeft') {
      flag = false;
    }
    if (event.key === 'Control') {
      item.classList.remove('active');
      return;
    }
    if (event.code === langObj[item.id].code) {
      item.classList.remove('active');
    }
  });
});

keyboard.addEventListener('click', function () {
  for (const key of keys) {
    key.onclick = function () {
      if (key.innerHTML === 'Shift') {
        shiftMode = !shiftMode;
        changeShiftKeyboard();
        return;
      }
      if (key.innerHTML === 'Ctrl' ||
           key.innerHTML === 'Alt' ||
           key.innerHTML === 'Win' ||
           key.innerHTML === 'Tab') {
        return;
      }
      if (key.innerHTML === 'EN' || key.innerHTML === 'RU') {
        changeLanguage();
        return;
      }
      if (key.innerHTML === 'Caps Lock') {
        capsMode = !capsMode;
        key.classList.toggle('active');
        changeCapsKeyboard();
        return;
      }
      if (key.innerHTML === 'Backspace') {
        const textareaLength = textarea.textContent.length;
        textarea.textContent = textarea.textContent.slice(0, textareaLength - 1);
        return;
      }
      if (key.innerHTML === 'Enter') {
        textarea.textContent += '\n';
        return;
      }
      if (shiftMode === true) {
        shiftMode = false;
        changeShiftKeyboard();
        textarea.textContent += key.textContent.toUpperCase();
        return;
      }
      textarea.textContent += key.textContent;
    };
  }
});

const textBlock = document.createElement('div');
textBlock.className = 'text';
const OSText = document.createElement('div');
OSText.innerHTML = 'Клавиатура создана в операционной системе Windows';
textBlock.append(OSText);
const switchLangText = document.createElement('div');
switchLangText.innerHTML = 'Комбинация для переключения языка: левые Ctrl + Alt';
textBlock.append(switchLangText);
container.append(textBlock);
