
const item = document.querySelector("#item_87363892");
//console.log(body);

const h1 = item.querySelector("h1");
//console.log(h1);
item.prepend(h1);

let newItem = item.cloneNode(true);
//newItem.setAttribute("id", "item_87363893");
newItem.id = "item_87363893";

newItem.querySelector("h1 a.item_link").textContent = "Hatt";
newItem.querySelector("p.list_price").textContent = "150kr";
newItem.querySelector('img.item_image').src = "https://cdn.blocket.com/static/2/lithumbs/73/7308470456.jpg";

let today = new Date();
let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
let dateTime = date+' '+time;
newItem.querySelector("time").setAttribute("datetime", dateTime);
newItem.querySelector("time").textContent = "Idag 13:37";

document.querySelector("body").appendChild(newItem);


const manualCopy = document.createElement("article");
manualCopy.classList.add("item_row");

const newH1 = document.createElement("h1");
newH1.classList.add("media-heading");
manualCopy.appendChild(newH1);

const headerLink = document.createElement("a");
headerLink.textContent = "Brödröst";
headerLink.href = 'https://www.blocket.se';
headerLink.classList.add('item_link');
newH1.appendChild(headerLink);

const imageLink = document.createElement("a");
manualCopy.appendChild(imageLink);

const image = document.createElement("img");
image.href = 'https://www.blocket.se';
image.src = 'https://cdn.blocket.com/static/2/lithumbs/30/3084337223.jpg';
imageLink.appendChild(image);

const newDiv = document.createElement("div");
manualCopy.appendChild(newDiv);

const header = document.createElement("header");
newDiv.appendChild(header);

const innerDiv = document.createElement("div");
price.classList.add('pull_left');
header.appendChild(innerDiv);

const innerLink = document.createElement("a");
innerLink.textContent = 'Köksjox ';
innerLink.href = 'https://www.blocket.se';
innerDiv.appendChild(innerLink);

const innerLink2 = document.createElement("a");
innerLink2.textContent = 'Kista, Hässelby, Vällingb…';
innerLink2.href = 'https://www.blocket.se';
innerDiv.appendChild(innerLink2);

const timeElement = document.createElement("time");
timeElement.textContent = 'Idag 14:47';
manualCopy.appendChild(timeElement);

const price = document.createElement("p");
price.textContent = '200 kr';
price.classList.add('list_price');
manualCopy.appendChild(price);



document.querySelector("body").appendChild(manualCopy);

















