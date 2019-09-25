


// let res = val > 4 ? 'big' : val > 2 ? 'medium' : 'small';

console.log(" -- using for loop");
console.log(testFor("Employee"));
console.log(testFor("Director"));
console.log(testFor("wewewe"));
console.log(testFor(""));
console.log(testFor());


console.log(" -- using ? operator");
console.log(testQuestion("Employee"));
console.log(testQuestion("Director"));
console.log(testQuestion("wewewe"));
console.log(testQuestion(""));
console.log(testQuestion());

function testFor(login) {

    let message;
    if (login === 'Employee') {
        message = 'Hello';
    } else if (login === 'Director') {
        message = 'Greetings';
    } else if (login === '') {
        message = 'No login';
    } else {
        message = '';
    }
    return message;
}

function testQuestion(login) {
    let message = (login === 'Employee') ? 'Hello' : (login === 'Director') ? 'Greetings' : (login === '') ? 'No login' : '';
    return message;
}







