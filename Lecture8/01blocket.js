

/* Ex 1

const element = document.getElementById("item_87363892");
console.log(element);

 */


/* Ex 2

const all = document.querySelectorAll(".pull-left");
for (let i = 0; i < all.length; i++) {
    console.log(all[i]);
}

*/


/* Ex 3

const elements = document.querySelectorAll(".media-body");

const mediaBodys = document.querySelectorAll(".media-body");
const count = Array.from(mediaBodys).reduce(function(sum, element) {
    return sum + element.childElementCount;
}, 0);

console.log(count);

 */



/* Ex 4

const h1 = document.getElementsByTagName("h1")[0];
//console.log(h1);

const prevSibling = h1.previousElementSibling;
//console.log(prevSibling);

const firstChild = prevSibling.firstElementChild;
//console.log(firstChild);

const childOfChild = firstChild.firstElementChild;
//console.log(childOfChild);

const nextSibling = childOfChild.nextElementSibling;
//console.log(nextSibling);

const childNode = nextSibling.firstChild;
console.log(childNode);


 */


/* Ex 5

const kista = document.getElementsByTagName("a")[2].firstChild;
console.log(kista);

 */


/* Ex 6

const links = document.getElementsByTagName("a");
for (let i = 0; i < links.length; i++)
    console.log(links[i].firstChild);

*/


/* Ex 7
 */

const itemName = document.querySelectorAll(".item_link");
console.log(itemName);



/* Ex 8

const itemPrice = document.querySelector("#item_87363892").querySelector(".list_price").innerText;
console.log(itemPrice);

 */



/* Ex 9

const time = document.querySelector("#item_87363892").querySelector("div.desc time").getAttribute("datetime");
console.log(time);

 */


/* Ex 10

const datajs = document.querySelector("#item_87363892").querySelector("[data-js]");
console.log(datajs);

 */











