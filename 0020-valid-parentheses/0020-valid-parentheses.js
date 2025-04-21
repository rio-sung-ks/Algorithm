// var s = "()[]{}"

let isValid = function(string) {
    const parenthesis = {
        "[" : -3,
        "{" : -2,
        "(" : -1,
        ")" : 1,
        "}" : 2,
        "]" : 3,
    }
    //string 을 배열로 만든다
    let queue = [...string];
    let stack = [];  // 스택용 배열 변수 선언
    debugger;
    for (let i = 0 ; i < queue.length; i++ ) {
        if (queue.length === 1) {
            return false;
        }
        let queueValue = queue[i];

        if (parenthesis[queueValue] < 0) {
            stack.push(queueValue);
        } else {
            let stackValue = stack.pop();

            if (parenthesis[stackValue] + parenthesis[queueValue] !== 0) {

                return false;
            }
        }
    }
    return true;
};

let string = "()[]{}";
isValid(string);