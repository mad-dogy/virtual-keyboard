const RU = {
  ё: { key: '0', keyCode: 48, code: 'Digit0', bigKey: ')' },
  1: { key: '1', keyCode: 49, code: 'Digit1', bigKey: '!' },
  2: { key: '2', keyCode: 50, code: 'Digit2', bigKey: '"' },
  3: { key: '3', keyCode: 51, code: 'Digit3', bigKey: '№' },
  4: { key: '4', keyCode: 52, code: 'Digit4', bigKey: ';' },
  5: { key: '5', keyCode: 53, code: 'Digit5', bigKey: '%' },
  6: { key: '6', keyCode: 54, code: 'Digit6', bigKey: ':' },
  7: { key: '7', keyCode: 55, code: 'Digit7', bigKey: '?' },
  8: { key: '8', keyCode: 56, code: 'Digit8', bigKey: '*' },
  9: { key: '9', keyCode: 57, code: 'Digit9', bigKey: '(' },
  0: { key: 'ё', keyCode: 192, code: 'Backquote', bigKey: 'Ё' },
  '-': { key: '-', keyCode: 189, code: 'Minus', bigKey: '_' },
  '=': { key: '=', keyCode: 187, code: 'Equal', bigKey: '+' },
  Backspace: { key: 'Backspace', keyCode: 8, code: 'Backspace', bigKey: false },

  Tab: { key: 'Tab', keyCode: 9, code: 'Tab', bigKey: false },
  й: { key: 'й', keyCode: 81, code: 'KeyQ', bigKey: 'Й' },
  ц: { key: 'ц', keyCode: 87, code: 'KeyW', bigKey: 'Ц' },
  у: { key: 'у', keyCode: 69, code: 'KeyE', bigKey: 'У' },
  к: { key: 'к', keyCode: 82, code: 'KeyR', bigKey: 'К' },
  е: { key: 'е', keyCode: 84, code: 'KeyT', bigKey: 'Е' },
  н: { key: 'н', keyCode: 89, code: 'KeyY', bigKey: 'Н' },
  г: { key: 'г', keyCode: 85, code: 'KeyU', bigKey: 'Г' },
  ш: { key: 'ш', keyCode: 73, code: 'KeyI', bigKey: 'Ш' },
  щ: { key: 'щ', keyCode: 79, code: 'KeyO', bigKey: 'Щ' },
  з: { key: 'з', keyCode: 80, code: 'KeyP', bigKey: 'З' },
  х: { key: 'х', keyCode: 219, code: 'BracketLeft', bigKey: 'Х' },
  ъ: { key: 'ъ', keyCode: 221, code: 'BracketRight', bigKey: 'Ъ' },
  '\\': { key: '\\', keyCode: 220, code: 'Backslash', bigKey: '/' },
  language: { key: 'language', bigKey: false },

  CapsLock: { key: 'Caps Lock', keyCode: 20, code: 'CapsLock', bigKey: false },
  ф: { key: 'ф', keyCode: 65, code: 'KeyA', bigKey: 'Ф' },
  ы: { key: 'ы', keyCode: 83, code: 'KeyS', bigKey: 'Ы' },
  в: { key: 'в', keyCode: 68, code: 'KeyD', bigKey: 'В' },
  а: { key: 'а', keyCode: 70, code: 'KeyF', bigKey: 'А' },
  п: { key: 'п', keyCode: 71, code: 'KeyG', bigKey: 'П' },
  р: { key: 'р', keyCode: 72, code: 'KeyH', bigKey: 'Р' },
  о: { key: 'о', keyCode: 74, code: 'KeyJ', bigKey: 'О' },
  л: { key: 'л', keyCode: 75, code: 'KeyK', bigKey: 'Л' },
  д: { key: 'д', keyCode: 76, code: 'KeyL', bigKey: 'Д' },
  ж: { key: 'ж', keyCode: 186, code: 'Semicolon', bigKey: 'Ж' },
  э: { key: 'э', keyCode: 222, code: 'Quote', bigKey: 'Э' },
  Enter: { key: 'Enter', keyCode: 13, code: 'Enter', bigKey: false },

  ShiftLeft: { key: 'Shift', keyCode: 16, code: 'ShiftLeft', bigKey: false },
  я: { key: 'я', keyCode: 90, code: 'KeyZ', bigKey: 'Я' },
  ч: { key: 'ч', keyCode: 88, code: 'KeyX', bigKey: 'Ч' },
  с: { key: 'с', keyCode: 67, code: 'KeyC', bigKey: 'С' },
  м: { key: 'м', keyCode: 86, code: 'KeyV', bigKey: 'М' },
  и: { key: 'и', keyCode: 66, code: 'KeyB', bigKey: 'И' },
  т: { key: 'т', keyCode: 78, code: 'KeyN', bigKey: 'Т' },
  ь: { key: 'ь', keyCode: 77, code: 'KeyM', bigKey: 'Ь' },
  б: { key: 'б', keyCode: 188, code: 'Comaa', bigKey: 'Б' },
  ю: { key: 'ю', keyCode: 190, code: 'Period', bigKey: 'Ю' },
  '.': { key: '.', keyCode: 191, code: 'Slash', bigKey: ',' },
  ArrowUp: { key: '▲', keyCode: 38, code: 'ArrowUp', bigKey: false },
  ShiftRight: { key: 'Shift', keyCode: 16, code: 'ShiftRight', bigKey: false },

  ControlLeft: { key: 'Ctrl', keyCode: 17, code: 'ControlLeft', bigKey: false },
  Win: { key: 'Win', keyCode: 91, code: 'MetaLeft', bigKey: false },
  AltLeft: { key: 'Alt', keyCode: 18, code: 'AltLeft', bigKey: false },
  Space: { key: '&nbsp;', keyCode: 32, code: 'Space', bigKey: false },
  AltRight: { key: 'Alt', keyCode: 18, code: 'AltRight', bigKey: false },
  ArrowLeft: { key: '◀', keyCode: 37, code: 'ArrowLeft', bigKey: false },
  ArrowDown: { key: '▼', keyCode: 40, code: 'ArrowDown', bigKey: false },
  ArrowRight: { key: '▶', keyCode: 39, code: 'ArrowRight', bigKey: false },
  ControlRight: { key: 'Ctrl', keyCode: 17, code: 'ControlRight', bigKey: false }
};

export default RU;
