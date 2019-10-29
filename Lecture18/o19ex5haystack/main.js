/*

5. haystack
Du har följande data:

const hayStack = [
  {
    id: 0,
    name: 'Straw'
  },
  {
    id: 1,
    name: 'Grass'
  },
  {
    id: 2,
    name: 'Needle'
  },
  {
    id: 3,
    name: 'Stick'
  }
]

Skriv en funktion, findByName(), som tar emot en sträng och en array med objekt, och returnerar ett promise.
Om du kan hitta ett objekt med ett namn som matchar strängen skall ditt promise resolva med det objektet.
Annars skall du rejecta med meddelandet: “Matching object not found”

findByName('Needle', hayStack).then(function(result) {
  console.log(result) // { id: 2, name: 'Needle' }
})

findByName('Football', hayStack).catch(function(error) {
  console.log(error) // Matching object not found
})

 */

const hayStack = [
    {
        id: 0,
        name: 'Straw'
    },
    {
        id: 1,
        name: 'Grass'
    },
    {
        id: 2,
        name: 'Needle'
    },
    {
        id: 3,
        name: 'Stick'
    }
];


function findByName(str,array) {
    return new Promise((resolve, reject) => {
        const result = array.find(item => {return item.name === str});
        if (result){
            resolve(result);
        } else {
            reject(`Matching object not found`);
        }

    })
}


findByName('Needle', hayStack).then(function(result) {
    console.log(result) // { id: 2, name: 'Needle' }
});

findByName('Football', hayStack).catch(function(error) {
    console.log(error) // Matching object not found
});