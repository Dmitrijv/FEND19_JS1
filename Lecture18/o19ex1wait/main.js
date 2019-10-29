/*

1. wait
Skapa ett Promise-objekt (du behöver inte skapa en funktion, bara ett Promise), som kör en resolve efter 500ms:

wait.then(function() {
  console.log('We waited') // Detta körs efter 500ms
})

 */

const wait = new Promise(resolve => {
    setTimeout(resolve, 500);
});

wait.then(function() {
    console.log('We waited') // Detta körs efter 500ms
});

