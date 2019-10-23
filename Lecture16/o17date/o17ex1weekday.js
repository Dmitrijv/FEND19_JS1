
const weekDays = {
    0: "sön",
    1: "mån",
    2: "tis",
    3: "ons",
    4: "to",
    5: "fre",
    6: "lör",
};


const date = new Date(2014, 0, 3); // 3 Jan 2014

console.log(getWeekDay(date)); // fre


function getWeekDay(date) {
    return weekDays[date.getDay()];
}