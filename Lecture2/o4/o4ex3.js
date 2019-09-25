




const DEFAULT_GREETING = 'Hey there';


function sayHi(name, greeting, timesToGreet) {

    if (greeting === "" || greeting === undefined || greeting === null)
        greeting = DEFAULT_GREETING;

    if (timesToGreet === NaN || timesToGreet < 0 || timesToGreet === null || timesToGreet === undefined)
        timesToGreet = 1;

    console.log(greeting + " " + name);
    
}
