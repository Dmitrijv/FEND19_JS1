


console.log(getSecondsLeftToday());

function getSecondsLeftToday() {
    const now = new Date();
    const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
    const diff = tomorrow - now;
    return Math.round(diff / 1000);
}