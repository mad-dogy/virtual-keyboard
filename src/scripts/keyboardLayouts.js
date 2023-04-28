const EN = {
    '`': {"key": "0", "keyCode": 48, "code": "Digit0", "bigKey": "~"},
    '1': {"key": "1", "keyCode": 49, "code": "Digit1", "bigKey": "!"},
    '2': {"key": "2", "keyCode": 50, "code": "Digit2", "bigKey": "@"},
    '3': {"key": "3", "keyCode": 51, "code": "Digit3", "bigKey": "#"},
    '4': {"key": "4", "keyCode": 52, "code": "Digit4", "bigKey": "$"},
    '5': {"key": "5", "keyCode": 53, "code": "Digit5", "bigKey": "%"},
    '6': {"key": "6", "keyCode": 54, "code": "Digit6", "bigKey": "^"},
    '7': {"key": "7", "keyCode": 55, "code": "Digit7", "bigKey": "&"},
    '8': {"key": "8", "keyCode": 56, "code": "Digit8", "bigKey": "*"},         
    '9': {"key": "9", "keyCode": 57, "code": "Digit9", "bigKey": "("},
    '0': {"key": "`", "keyCode": 192, "code": "Backquote", "bigKey": ")"},
    '-': {"key": "-", "keyCode": 189, "code": "Minus", "bigKey": "_"},
    '=': {"key": "=", "keyCode": 187, "code": "Equal", "bigKey": "+"},
    'Backspace': {"key": "Backspace", "keyCode": 8, "code": "Backspace", "bigKey": false},

    'Tab': {"key": "Tab", "keyCode": 9, "code": "Tab", "bigKey": false},
    'q': {"key": "q", "keyCode": 81, "code": "KeyQ", "bigKey": "Q"},
    'w': {"key": "w", "keyCode": 87, "code": "KeyW", "bigKey": "W"},
    'e': {"key": "e", "keyCode": 69, "code": "KeyE", "bigKey": "E"},
    'r': {"key": "r", "keyCode": 82, "code": "KeyR", "bigKey": "R"},
    't': {"key": "t", "keyCode": 84, "code": "KeyT", "bigKey": "T"},
    'y': {"key": "y", "keyCode": 89, "code": "KeyY", "bigKey": "Y"},
    'u': {"key": "u", "keyCode": 85, "code": "KeyU", "bigKey": "U"},
    'i': {"key": "i", "keyCode": 73, "code": "KeyI", "bigKey": "I"},
    'o': {"key": "o", "keyCode": 79, "code": "KeyO", "bigKey": "O"},
    'p': {"key": "p", "keyCode": 80, "code": "KeyP", "bigKey": "P"},
    '[': {"key": "[", "keyCode": 219, "code": "BracketLeft", "bigKey": "{"},
    ']': {"key": "]", "keyCode": 221, "code": "BracketRight", "bigKey": "}"},
    '\\': {"key": "\\", "keyCode": 220, "code": "Backslash", "bigKey": "|"},
    'Del': {"key": "Del", "keyCode": 46, "code": "Delete", "bigKey": false},

    'CapsLock': {"key": "Caps Lock", "keyCode": 20, "code": "CapsLock", "bigKey": false},
    'a': {"key": "a", "keyCode": 65, "code": "KeyA", "bigKey": "A"},
    's': {"key": "s", "keyCode": 83, "code": "KeyS", "bigKey": "S"},
    'd': {"key": "d", "keyCode": 68, "code": "KeyD", "bigKey": "D"},
    'f': {"key": "f", "keyCode": 70, "code": "KeyF", "bigKey": "F"},
    'g': {"key": "g", "keyCode": 71, "code": "KeyG", "bigKey": "G"},
    'h': {"key": "h", "keyCode": 72, "code": "KeyH", "bigKey": "H"},
    'j': {"key": "j", "keyCode": 74, "code": "KeyJ", "bigKey": "J"},
    'k': {"key": "k", "keyCode": 75, "code": "KeyK", "bigKey": "K"},
    'l': {"key": "l", "keyCode": 76, "code": "KeyL", "bigKey": "L"},
    ';': {"key": ";", "keyCode": 186, "code": "Semicolon", "bigKey": ":"},
    '\'': {"key": "\'", "keyCode": 222, "code": "Quote", "bigKey": "\""},
    'Enter': {"key": "Enter", "keyCode": 13, "code": "Enter", "bigKey": false},

    'ShiftLeft': {"key": "Shift", "keyCode": 16, "code": "ShiftLeft", "bigKey": false},
    'z': {"key": "z", "keyCode": 90, "code": "KeyZ", "bigKey": "Z"},
    'x': {"key": "x", "keyCode": 88, "code": "KeyX", "bigKey": "X"},
    'c': {"key": "c", "keyCode": 67, "code": "KeyC", "bigKey": "C"},
    'v': {"key": "v", "keyCode": 86, "code": "KeyV", "bigKey": "V"},
    'b': {"key": "b", "keyCode": 66, "code": "KeyB", "bigKey": "B"},
    'n': {"key": "n", "keyCode": 78, "code": "KeyN", "bigKey": "N"},
    'm': {"key": "m", "keyCode": 77, "code": "KeyM", "bigKey": "M"},
    ',': {"key": ",", "keyCode": 188, "code": "Comaa", "bigKey": "<"},
    '.': {"key": ".", "keyCode": 190, "code": "Period", "bigKey": ">"},
    '/': {"key": "/", "keyCode": 191, "code": "Slash", "bigKey": "?"},
    'ArrowUp': {"key": "▲", "keyCode": 38, "code": "ArrowUp", "bigKey": false},
    'ShiftRight': {"key": "Shift", "keyCode": 16, "code": "ShiftRight", "bigKey": false},

    'ControlLeft': {"key": "Ctrl", "keyCode": 17, "code": "ControlLeft", "bigKey": false},
    'Win': {"key": "Win", "keyCode": 91, "code": "MetaLeft", "bigKey": false},
    'AltLeft': {"key": "Alt", "keyCode": 18, "code": "AltLeft", "bigKey": false},
    'Space': { "key": "&nbsp;", "keyCode": 32, "code": "Space", "bigKey": false},
    'AltRight': {"key": "Alt", "keyCode": 18, "code": "AltRight", "bigKey": false},
    'ArrowLeft': {"key": "◀", "keyCode": 37, "code": "ArrowLeft", "bigKey": false},
    'ArrowDown': {"key": "▼", "keyCode": 40, "code": "ArrowDown", "bigKey": false},
    'ArrowRight': {"key": "▶", "keyCode": 39, "code": "ArrowRight", "bigKey": false},
    'ControlRight': {"key": "Ctrl", "keyCode": 17, "code": "ControlRight", "bigKey": false},
}

const RU = {
    'ё': {"key": "0", "keyCode": 48, "code": "Digit0", "bigKey": "Ё"},
    '1': {"key": "1", "keyCode": 49, "code": "Digit1", "bigKey": "!"},
    '2': {"key": "2", "keyCode": 50, "code": "Digit2", "bigKey": "\""},
    '3': {"key": "3", "keyCode": 51, "code": "Digit3", "bigKey": "№"},
    '4': {"key": "4", "keyCode": 52, "code": "Digit4", "bigKey": ";"},
    '5': {"key": "5", "keyCode": 53, "code": "Digit5", "bigKey": "%"},
    '6': {"key": "6", "keyCode": 54, "code": "Digit6", "bigKey": ":"},
    '7': {"key": "7", "keyCode": 55, "code": "Digit7", "bigKey": "?"},
    '8': {"key": "8", "keyCode": 56, "code": "Digit8", "bigKey": "*"},         
    '9': {"key": "9", "keyCode": 57, "code": "Digit9", "bigKey": "("},
    '0': {"key": "`", "keyCode": 192, "code": "Backquote", "bigKey": ")"},
    '-': {"key": "-", "keyCode": 189, "code": "Minus", "bigKey": "_"},
    '=': {"key": "=", "keyCode": 187, "code": "Equal", "bigKey": "+"},
    'Backspace': {"key": "Backspace", "keyCode": 8, "code": "Backspace", "bigKey": false},

    'Tab': {"key": "Tab", "keyCode": 9, "code": "Tab", "bigKey": false},
    'й': {"key": "q", "keyCode": 81, "code": "KeyQ", "bigKey": "Й"},
    'ц': {"key": "w", "keyCode": 87, "code": "KeyW", "bigKey": "Ц"},
    'у': {"key": "e", "keyCode": 69, "code": "KeyE", "bigKey": "У"},
    'к': {"key": "r", "keyCode": 82, "code": "KeyR", "bigKey": "К"},
    'е': {"key": "t", "keyCode": 84, "code": "KeyT", "bigKey": "Е"},
    'н': {"key": "y", "keyCode": 89, "code": "KeyY", "bigKey": "Н"},
    'г': {"key": "u", "keyCode": 85, "code": "KeyU", "bigKey": "Г"},
    'ш': {"key": "i", "keyCode": 73, "code": "KeyI", "bigKey": "Ш"},
    'щ': {"key": "o", "keyCode": 79, "code": "KeyO", "bigKey": "Щ"},
    'з': {"key": "p", "keyCode": 80, "code": "KeyP", "bigKey": "З"},
    'х': {"key": "[", "keyCode": 219, "code": "BracketLeft", "bigKey": "Х"},
    'ъ': {"key": "]", "keyCode": 221, "code": "BracketRight", "bigKey": "Ъ"},
    '\\': {"key": "\\", "keyCode": 220, "code": "Backslash", "bigKey": "/"},
    'Del': {"key": "Del", "keyCode": 46, "code": "Delete", "bigKey": false},

    'CapsLock': {"key": "Caps Lock", "keyCode": 20, "code": "CapsLock", "bigKey": false},
    'ф': {"key": "a", "keyCode": 65, "code": "KeyA", "bigKey": "Ф"},
    'ы': {"key": "s", "keyCode": 83, "code": "KeyS", "bigKey": "Ы"},
    'в': {"key": "d", "keyCode": 68, "code": "KeyD", "bigKey": "В"},
    'а': {"key": "f", "keyCode": 70, "code": "KeyF", "bigKey": "А"},
    'п': {"key": "g", "keyCode": 71, "code": "KeyG", "bigKey": "П"},
    'р': {"key": "h", "keyCode": 72, "code": "KeyH", "bigKey": "Р"},
    'о': {"key": "j", "keyCode": 74, "code": "KeyJ", "bigKey": "О"},
    'л': {"key": "k", "keyCode": 75, "code": "KeyK", "bigKey": "Л"},
    'д': {"key": "l", "keyCode": 76, "code": "KeyL", "bigKey": "Д"},
    'ж': {"key": ";", "keyCode": 186, "code": "Semicolon", "bigKey": "Ж"},
    'э': {"key": "\'", "keyCode": 222, "code": "Quote", "bigKey": "Э"},
    'Enter': {"key": "Enter", "keyCode": 13, "code": "Enter", "bigKey": false},

    'ShiftLeft': {"key": "Shift", "keyCode": 16, "code": "ShiftLeft", "bigKey": false},
    'я': {"key": "z", "keyCode": 90, "code": "KeyZ", "bigKey": "Я"},
    'ч': {"key": "x", "keyCode": 88, "code": "KeyX", "bigKey": "Ч"},
    'с': {"key": "c", "keyCode": 67, "code": "KeyC", "bigKey": "С"},
    'м': {"key": "v", "keyCode": 86, "code": "KeyV", "bigKey": "М"},
    'и': {"key": "b", "keyCode": 66, "code": "KeyB", "bigKey": "И"},
    'т': {"key": "n", "keyCode": 78, "code": "KeyN", "bigKey": "Т"},
    'ь': {"key": "m", "keyCode": 77, "code": "KeyM", "bigKey": "Ь"},
    'б': {"key": ",", "keyCode": 188, "code": "Comaa", "bigKey":"Б"},
    'ю': {"key": ".", "keyCode": 190, "code": "Period", "bigKey": "Ю"},
    '.': {"key": "/", "keyCode": 191, "code": "Slash", "bigKey": ","},
    'ArrowUp': {"key": "▲", "keyCode": 38, "code": "ArrowUp", "bigKey": false},
    'ShiftRight': {"key": "Shift", "keyCode": 16, "code": "ShiftRight", "bigKey": false},

    'ControlLeft': {"key": "Ctrl", "keyCode": 17, "code": "ControlLeft", "bigKey": false},
    'Win': {"key": "Win", "keyCode": 91, "code": "MetaLeft", "bigKey": false},
    'AltLeft': {"key": "Alt", "keyCode": 18, "code": "AltLeft", "bigKey": false},
    'Space': { "key": "&nbsp;", "keyCode": 32, "code": "Space", "bigKey": false},
    'AltRight': {"key": "Alt", "keyCode": 18, "code": "AltRight", "bigKey": false},
    'ArrowLeft': {"key": "◀", "keyCode": 37, "code": "ArrowLeft", "bigKey": false},
    'ArrowDown': {"key": "▼", "keyCode": 40, "code": "ArrowDown", "bigKey": false},
    'ArrowRight': {"key": "▶", "keyCode": 39, "code": "ArrowRight", "bigKey": false},
    'ControlRight': {"key": "Ctrl", "keyCode": 17, "code": "ControlRight", "bigKey": false},

}

export default EN;