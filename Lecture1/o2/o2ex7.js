

const user = "admin";
const password = "TheMaster1";


if (user === ("admin")) {

    if (password === "TheMaster") {
        console.log("Welcome!");
    } else if (password === "cancel") {
        console.log("canceled");
    } else {
        console.log("Wrong password");
    }

} else if (user === "cancel") {

    console.log("canceled");

} else {

    console.log("I don't know you.");

}