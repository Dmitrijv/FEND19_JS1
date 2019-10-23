
/*

Skriv en funktion, formatDate(date), som tar emot ett datum, och returnerar en sträng enligt följande:

Om datumet var för 1 sekund eller mindre sedan, returnera “right now”
Annars, om datumet var mindre än 1 minut sedan, returnera “X sec. ago”
Annars, om mindre än en timme, returnera “X min. ago”
Annars, returnera fullständigt tid och datum i det här formatet: “DD.MM.YY HH.mm”, alltså “dag.månad.år timmar:minuter”:

Exempel:

 */

console.log(formatDate(new Date(new Date - 1))); // "right now"
console.log(formatDate(new Date(new Date - 30 * 1000))); // "30 sec. ago"
console.log(formatDate(new Date(new Date - 5 * 60 * 1000))); // "5 min. ago"
console.log(formatDate(new Date(new Date - 86400 * 1000))); // 20.10.19 19:20


function formatDate(target) {

    const now = new Date();
    const diff = Math.abs(Math.round((target - now) / 1000));
    //console.log(diff);

    if (diff <= 1)
        return "right now";
    else if (diff <= 60)
        return `${diff} sec. ago`;
    else if (diff <= (60 * 60))
        return `${Math.round(diff / 60)} min. ago`;
    else
        return target.toLocaleString().replace(/\//g, ".").replace(",", "").slice(0, -6);
        // “DD.MM.YY HH.mm”

}
