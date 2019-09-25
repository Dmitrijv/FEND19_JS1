/*
    ta emot protokoll, subdomän, domän, toppdomän och en resurs,
    och skall sedan returnera en komplett url.
    Använd backticks (`) för att sätta ihop din sträng.

*/


console.log( buildUrl('https', 'www', 'mysite', 'se', 'contact') );

function buildUrl( protocol, subdomain, domain, topdomain, resourse ) {

    // https://www.mysite.se/resource

    return protocol + '://' + subdomain + '/' + domain + '.' + topdomain + '/' + resourse;

}