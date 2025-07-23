/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // s = '1 ;3kfj,d'
    
    const alphanumeric = (char) => {
        const lower = char.toLowerCase();
        return 'abcdefghijklmnopqrstuvwxyz0123456789'.includes(lower)
    }
    const textToArray = s.split('');
    const filtered = textToArray.filter(alphanumeric);
    const filteredLowerCase = filtered.map((text) => text.toLowerCase());
    const joinText = filteredLowerCase.join('');
    
    return joinText === filteredLowerCase.reverse().join('');
};