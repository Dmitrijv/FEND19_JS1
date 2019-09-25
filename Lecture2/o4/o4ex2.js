

const DEFAULT_GREETING = 'Hey there';
function sayHi(name, greeting) {
    if (greeting === "" || greeting === undefined || greeting === null)
        console.log(DEFAULT_GREETING + " " + name);
    else
       console.log(greeting + " " + name);
}

