function clock() {
const now = new Date();

let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");
let millisecond = document.getElementById("millisecond");
let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");

hour.innerHTML = now.getHours();
minute.innerHTML = now.getMinutes();
second.innerHTML = now.getSeconds();
millisecond.innerHTML = now.getMilliseconds();
day.innerHTML = now.getDate();
month.innerHTML = now.getMonth() + 1;
year.innerHTML = now.getFullYear();

}
setInterval(clock, 50);
