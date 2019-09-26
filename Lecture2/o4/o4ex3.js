


console.log( sayHi("Filip", "yoski broski", 3) );


function sayHi(name, greeting, timesToGreet) {

    if (greeting === "" || greeting === undefined || greeting === null)
        greeting = 'Hey there';

    if ( timesToGreet < 0 || timesToGreet === null || timesToGreet === undefined)
        timesToGreet = 1;

    for (let i = 0; i < timesToGreet ; i++) {
        console.log(greeting + " " + name);
    }

}
