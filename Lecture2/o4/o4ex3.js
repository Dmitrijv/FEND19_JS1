


console.log( sayHi("Filip", "yoski broski", 3) );


function sayHi(name, greeting, timesToGreet) {

    const DEFAULT_GREETING = 'Hey there';

    if (greeting === "" || greeting === undefined || greeting === null)
        greeting = DEFAULT_GREETING;

    if ( timesToGreet < 0 || timesToGreet === null || timesToGreet === undefined)
        timesToGreet = 1;

    for (let i = 0; i < timesToGreet ; i++) {
        console.log(greeting + " " + name);
    }

}
