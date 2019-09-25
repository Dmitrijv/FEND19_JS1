
/*

10.
Det finns ett kafé som ger 10% rabatt om man spenderar minst 1000kr på kaffe per månad.
Kostnaden per kaffekopp är i genomsnitt 12kr.

Skapa ett variabel som innehåller hur många koppar en person köper i genomsnitt per dag.
(Du kan själv ändra värdet i variabeln varje gång du kör programmet).
Programmet ska via console.log() visa om personen har rätt till rabatten och även visa hur mycket rabatt personen får.

Programmet ska visa via console.log() hur många fler kaffekoppar personen måste
köpa för att få 10% rabatt (i fall denne har spenderat för lite pengar).

*/

const COFFEE_PRICE = 12; // kr
const RABATT = 10; // i%

let purchasedCupsOfCoffee = Math.round(Math.random() * 200);
let spentMoney = COFFEE_PRICE * purchasedCupsOfCoffee;

console.log(`Du har köpt ${purchasedCupsOfCoffee} koppar kaffe hos oss vilket motsvarar ${spentMoney}kr.`);

if (spentMoney >= 1000) {

    console.log(`Du har spenderat ${spentMoney}kr i vår butik och har därmed rätt att få rabatt.`);

    const multiplier = (100-RABATT)/100;
    const newPrice = COFFEE_PRICE * multiplier;

    console.log(`Nya priset på kaffet blir ${newPrice}`);

} else {

    console.log(`Du har spenderat ${spentMoney}kr i vår butik vilket ar for lite for att fa rabatt.`);

    const remainingPurchases = Math.round((1000-spentMoney)/COFFEE_PRICE);
    console.log(`Du måste köpa ${remainingPurchases} koppar kaffe till innan du får reducerat pris.`);

}



