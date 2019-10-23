

console.log(getSecondsToday());

function getSecondsToday() {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const diff = now - today;
    return Math.round(diff / 1000);
}