

let age = null;
console.log(isEligibleToVote(age));

age = -213;
console.log(isEligibleToVote(age));

age = "-33";
console.log(isEligibleToVote(age));

age = "WEQWDwdawd";
console.log(isEligibleToVote(age));

age = NaN;
console.log(isEligibleToVote(age));

age = undefined;
console.log(isEligibleToVote(age));


function isEligibleToVote(age) {

    age = Number(age);

    let reply = "Du får inte rösta ännu";

    if ( isNaN(age) ){
        reply = age + " är inte en ålder";
    } else if (age >= 18) {
        reply = "Du får rösta";
    }

    return reply;

}