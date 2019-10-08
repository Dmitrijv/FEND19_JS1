

//console.log(screen.height, screen.width);
//alert('Screen size is ' +  screen.height + 'x' + screen.width);

//const size = screen.width;
//alert(`Screen size is ${size}`);

//alert('Window takes up ' +  Math.round((window.innerHeight/screen.height)*100) + '% x ' + Math.round((window.innerWidth/screen.width)*100)+'%');

alert("It is "+getBrowser(navigator.userAgent)+"!");

function getBrowser(userAgent) {

    if (userAgent.includes("Edge"))
        return "Edge";
    if (userAgent.includes("OPR"))
        return "Operah";
    if (userAgent.includes("Firefox"))
        return "Firefox";
    if (userAgent.includes("Safari") && !userAgent.includes("Chrome"))
        return "Safari";
    if (userAgent.includes("Chrome") && (!userAgent.includes("OPR") || !userAgent.includes("Edge")))
        return "Chrome";
    return "Unknown browser";

}


//alert(location.href);


/*
const identity = prompt("Who are you mate?");
alert(identity);
*/


/*
let age = prompt("What is your age?");
age = Number(age);

if (isNaN(age) === true){
    alert("You must write your age.");
} else {
    const message = (age >= 18) ? "Du får rösta" : "Du får INTE rösta";
    alert(message);
}
 */


/*
let num = prompt("What is your age?");
num = Number(num);

while (!inputValid(num)){
    num = prompt("Enter a number please: ");
    num = Number(num);
}

function inputValid(input) {
    return !isNaN(input) && input !== null && input !== "" && input > 100;
}
 */


/*
let array = [];
let record = prompt("Enter a record");
while (record !== null && record !== ""){
    array.push(record);
    record = prompt("Enter another one.");
}
alert(array);
*/



/*
const fruitBasket = ['Banana', 'Apple', 'Mango'];

let input = prompt("Enter a fruit");
while (!fruitBasket.includes(input)){
    if (input === '' || input === ""){
        alert('No more fruit for you');
        break
    } else {
        input = prompt("We don't have that fruit sorry!");
    }
}

if (fruitBasket.includes(input))
    alert(`You got a ${input} !`);
else
    alert('No more fruit for you');
*/


/*
// Ändra så att du får in antalet koppar per dag från en prompt()
// Ändra så att svaret skrivs ut med alert() istället för console.log()
const COFFEE_PRICE = 12; // kr
const RABATT = 10; // i%
let budget = prompt("Enter a number of cups");
while (budget === null || budget === "" || isNaN(budget)){
    budget = prompt("Enter a number of cups");
}
budget = Number(budget);

let spentMoney = COFFEE_PRICE * budget;

let report = `Du har köpt ${budget} koppar kaffe hos oss vilket motsvarar ${spentMoney}kr. \n`;

if (spentMoney >= 1000) {

    report = report + `Du har spenderat ${spentMoney}kr i vår butik och har därmed rätt att få rabatt. \n`;
    const multiplier = (100-RABATT)/100;
    const newPrice = COFFEE_PRICE * multiplier;
    report = report + `Nya priset på kaffet blir ${newPrice}kr \n`;

} else {

    report = report + `Du har spenderat ${spentMoney}kr i vår butik vilket ar för lite for att få rabatt. \n`;

    const remainingPurchases = Math.round((1000-spentMoney)/COFFEE_PRICE);
    report = report + `Du måste köpa ${remainingPurchases} koppar kaffe till innan du får reducerat pris. \n`;

}

alert(report);
*/


/*
// Ändra så att du får in mängden pengar via prompt()
// Ändra så att svaret skrivs ut med alert()
const PRIS_CHIPS = 30; // kr
const PRIS_GODIS = 14; // kr

let budget = prompt("Enter budget:");
while (budget === null || budget === "" || isNaN(budget)){
    budget = prompt("Enter a number of pls");
}
budget = Number(budget);

//console.log(`Du har ${budget}kr att handla med.`);
//console.log(`En påse CHIPS kostar ${PRIS_CHIPS}kr.`);
//console.log(`En påse GODIS kostar ${PRIS_GODIS}kr.`);

let koptaChips = 0;
while ( (budget/PRIS_CHIPS) > 1){
    koptaChips++;
    budget = budget - PRIS_CHIPS;
}

let koptaGogis = 0;
while ( (budget/PRIS_GODIS) > 1 ) {
    koptaGogis++;
    budget = budget - PRIS_GODIS;
}

//console.log(`Det gick att köpa ${koptaChips} chips och ${koptaGogis} godis. Du har ${budget}kr kvar.`);
alert(`Det gick att köpa ${koptaChips} påsar chips och ${koptaGogis} påsar godis. Du har ${budget}kr kvar.`);
*/


/*
// Ändra så att du får in användarnamnet via prompt()
// Ändra så att du får in lösenordet via prompt(), om användarnamnet är korrekt
// Ändra så att alla svar kommer via alert() istället för console.log()
// Ändra så att “cancelled” skrivs ut om användaren klickat på cancel
let user = prompt("Enter username"); //"admin";
while (user === null){
    user = prompt("Enter username");
}

if (user === ("admin")) {

    let password = prompt("Enter pass");
    while (password === null || password === ""){
        password = prompt("Enter a password");
    }

    if (password === "TheMaster") {
        alert("Welcome!");
    } else if (password === "cancel") {
        alert("canceled");
    } else {
        alert("Wrong password\"");
    }

} else if (user === "cancel" || user === "" || user === null) {
    alert("canceled");
} else {
    alert("I don't know you.");
}
*/






/*
const theCompany = {
    name: 'The Company',
    adress: 'Mainstreet 101',
    city: 'Capital City',
    employess: ['Byron Thomas', 'Terius Gray', 'Dwayne Carter'],
    products: ['Big wheels', 'Medium wheels', 'Small wheels']
};


let key = prompt("Enter what you want to know about company");
while (key !== null || key !== ""){
    console.log(typeof key);
    if (theCompany[key]) {
        alert(theCompany[key]);
        key = prompt("Enter what you want to know about company");
    } else {
        alert("Key does not exist");
        break;
    }
}

alert("Bye");

*/


/*
const persons = [
    {
        name: 'Akira',
        age: 26,
        number: '0543236543',
        likes: ['Pizza', 'Coding', 'Brownie Points']
    },
    {
        name: 'Harry',
        age: 16,
        number: '0994372684',
        likes: ['Hogwarts', 'Magic', 'Hagrid']
    },
    {
        name: 'Sherlock',
        age: 42,
        number: '0487345643',
        likes: ['Intriguing Cases', 'Violin']
    },
    {
        name: 'Kristian',
        age: 33,
        number: 'unknown',
        likes: ['JavaScript', 'Gaming', 'Foxes']
    }
];



let personName = prompt("Enter persons name");
while (personName !== null || personName !== ""){

    const person = getPerson(persons, personName);

    if (person) {

        let property = prompt("What do you want to know about "+personName+"?");

        if (person[property]){
            if (property === "likes"){
                let str = person[property].reduce(function (string, item) {
                    return string + item + ", ";
                }, personName+" likes ");
                str = str.substr(0, str.length -2);
                alert(str);
            } else {
                alert(person[property]);
            }
        } else {
            alert("Property does not exist.")
        }

    } else {
        if (personName === null || personName === ""){
            alert("Bye");
            break;
        }
        alert("Person does not exist");
    }

    personName = prompt("Enter persons name");

}


function getPerson(array, personName) {
    return array.find( ({ name }) => name === personName );
}

*/




















































