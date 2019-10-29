

function isSmall(num) {
    return new Promise((resolve, reject) => {

        if (isNaN(parseInt(num))){
            reject("was not a number");
        } else if (parseInt(num) > 100){
            reject("was not small")
        } else {
            resolve("was small")
        }

    })
}

isSmall("25")
    .then(msg => {
        console.log(msg);
    })
    .catch((error) => {
        console.log(error);
    })
;