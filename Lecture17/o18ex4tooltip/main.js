const box = document.querySelector('.box');
const tooltip = document.createElement('p');
tooltip.classList.add('tooltip');
box.appendChild(tooltip);

let timeoutID;
box.addEventListener('mouseenter', function(event) {

    timeoutID = setTimeout(function () {
        tooltip.textContent = event.target.dataset.tooltip;
        tooltip.classList.add('show')
    }, 400);

});

box.addEventListener('mouseleave', function(event) {
    clearInterval(timeoutID);
    tooltip.classList.remove('show');
});