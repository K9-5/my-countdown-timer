const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

let days = 20;
let hours =7;
let minutes = 58;
let seconds =49;

setInterval(updateCountdown, 1000);

function updateCountdown() {
 if (seconds > 0) {
 seconds--;
 } else if (minutes > 0) {
 minutes--;
 seconds = 59;
 } else if (hours > 0) {
 hours--;
 minutes = 59;
 seconds = 59;
 } else if (days > 0) {
 days--;
 hours = 23;
 minutes = 59;
 seconds = 59;
 }

daysEl.innerHTML = formatTime(days);
hoursEl.innerHTML = formatTime(hours);
minutesEl.innerHTML = formatTime(minutes);
secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
 return time < 10 ? `0${time}` : time;
}