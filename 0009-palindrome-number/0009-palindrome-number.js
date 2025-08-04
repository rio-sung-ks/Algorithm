var isPalindrome = function(x) {
    const xArray = x.toString().split('');

    console.log("xArray : ",xArray);
    const xReverse = [...xArray].reverse();
    console.log("xReverse : ",xReverse);
    for (let i = 0; i < xArray.length; i++) {
        if (xArray[i] !== xReverse[i]) {
            return false;
        }
    }
    return true;
};
