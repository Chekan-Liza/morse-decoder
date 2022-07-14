const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    var parts = expr.split(/(.{10})/);
    var new_parts = [];
    let res = '';

    for(let r in parts){
      if(parts[r] != '') new_parts.push(parts[r]);
    }

    for(let k in new_parts){
      new_parts[k] = new_parts[k].replace(/^0+/, '').replace(/11/g, '-').replace(/10/g, '.').replace(/\*/g, ' ');
      if(MORSE_TABLE[new_parts[k]]){
        res += MORSE_TABLE[new_parts[k]];
      } else {
        res += ' ';
      }
    }

    return res;
}

module.exports = {
    decode
}
