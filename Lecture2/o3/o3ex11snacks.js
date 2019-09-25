/*

Skriv ett program som räknar ut det totala priset på ditt chipsinköp. Du kommer att fortsätta köpa chips tills du får slut på pengar på kontot. Efter det kommer också att köpa smågodis om du har pengar över.
Du kommer att behöva bestämma några variabler: pengar på kontot, kostnaden för en påse chips och kostnaden för en bit smågodis.
Skriv sedan en loop där du fortsätter köpa chipspåsar så länge du har råd. Köp sedan så mycket smågodis du kan för pengarna som finns kvar.
När du “handlat klart”, skriv ut hur många påsar chips och hur många bitar smågodis pengarna räckte till.

*/



const PRIS_CHIPS = 30; // kr
const PRIS_GODIS = 14; // kr

let budget = 300;  // kr

let koptaChips = 0;
let koptaGogis = 0;

console.log(`Du har ${budget}kr att handla med.`);

console.log(`En påse CHIPS kostar ${PRIS_CHIPS}kr.`);
console.log(`En påse GODIS kostar ${PRIS_GODIS}kr.`);


while ( (budget/PRIS_CHIPS) > 1){
    koptaChips++;
    budget = budget - PRIS_CHIPS;
}

while ( (budget/PRIS_GODIS) > 1 ) {
    koptaGogis++;
    budget = budget - PRIS_GODIS;
}

console.log(`Det gick att köpa ${koptaChips} chips och ${koptaGogis} godis. Du har ${budget}kr kvar.`);

/*
while (budget > 0){

    if ( (budget/PRIS_CHIPS) > 1){
        koptaChips++;
        budget = budget - PRIS_CHIPS;
        continue;
    } else if ( (budget/PRIS_GODIS) > 1 ) {
        koptaGogis++;
        budget = budget - PRIS_GODIS;
        continue;
    } else {
        console.log(`Det gick att köpa ${koptaChips} chips och ${koptaGogis} godis. Du har ${budget}kr kvar.`);
        break;
    }

}

*/


















