/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanSymbol = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }

    const letter = s.split('');
    let sum = 0;
    for (let i = 0; i < letter.length; i++) {
        if (i+1 < letter.length && romanSymbol[letter[i]] < romanSymbol[letter[i+1]]) {
            sum -= romanSymbol[letter[i]];
        } else {
            sum += romanSymbol[letter[i]];
        }
    }
    return sum;
};