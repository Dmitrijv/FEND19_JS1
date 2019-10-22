const products = [
    {
        name: 'Three Weiss Men',
        style: 'weiss',
        abv: '4.5',
        price: '3'
    },
    {
        name: 'Blondie',
        style: 'blonde',
        abv: '6.5',
        price: '2.3'
    },
    {
        name: 'Saisons in the Sun',
        style: 'saison',
        abv: '4.8',
        price: '2.8'
    },
    {
        name: 'Palebearer',
        style: 'pale ale',
        abv: '4.8',
        price: '2.5'
    },
    {
        name: 'Red Live Redemption',
        style: 'amber',
        abv: '5.3',
        price: '3.2'
    },
    {
        name: 'Lead a Bitter Life',
        style: 'bitter',
        abv: '4.8',
        price: '2.4'
    },
    {
        name: 'Charlie Brown',
        style: 'brown ale',
        abv: '5.2',
        price: '2.2'
    },
    {
        name: 'Stand up and Stout',
        style: 'stout',
        abv: '8.8',
        price: '5'
    },
    {
        name: 'A Lover in Every Porter',
        style: 'porter',
        abv: '6.2',
        price: '4.2'
    },
    {
        name: 'Not Barely Wine',
        style: 'barley wine',
        abv: '12.2',
        price: '8.2'
    }
];

const colors = {
    light: ['weiss', 'blonde', 'saison', 'pale ale'],
    medium: ['amber', 'bitter', 'brown ale'],
    dark: ['stout', 'porter', 'barley wine']
};


//console.log(getBeerColor("blonde", colors));
function getBeerColor(style, colors) {
    for (let color of Object.keys(colors)) {
        const beerTypes = colors[color];
        if (beerTypes.includes(style))
            return color;
    }
}

const updatedProducts = products.map(beer => {
    beer["color"] = getBeerColor(beer.style, colors);
    return beer;
});
//console.log(updatedProducts);






const menuAnchor = document.querySelector("#menu-anchor");
for (let color of Object.keys(colors)) {
    const newButton = document.createElement("button");
    newButton.textContent = color;
    newButton.addEventListener('click', clickMenuButton);
    menuAnchor.appendChild(newButton);
}

const listAnchor = document.querySelector("#list-anchor");
function clickMenuButton(event) {

    const selectedColor = event.currentTarget.textContent;
    listAnchor.innerHTML = '';
    const selectedBeers = updatedProducts.filter(beer => beer.color === selectedColor);

    const beerList = document.createElement("ul");
    selectedBeers.forEach(function(beer) {
        const listItem = document.createElement("li");
        listItem.textContent = `${beer.name} (${beer.abv}) - ${beer.price}€`;
        beerList.appendChild(listItem);
    });

    listAnchor.appendChild(beerList);

}










