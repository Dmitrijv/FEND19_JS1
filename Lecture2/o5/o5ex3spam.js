



console.log(checkSpam('buy ViAgRA now')); // true
console.log(checkSpam('free xxxxx')); // true
console.log(checkSpam("innocent rabbit")); // false


function checkSpam(message) {

    message = message.toLowerCase();

    return message.includes("xxx") || message.includes("viagra");

}