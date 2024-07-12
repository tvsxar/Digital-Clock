const hrs = document.querySelector('#hrs');
const min = document.querySelector('#min');
const sec = document.querySelector('#sec');
const day = document.querySelector('#day');

let days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

function updateTime() {
    let now = new Date();

    hrs.innerHTML = now.getHours() < 10 ? '0' + now.getHours() : now.getHours();
    min.innerHTML = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes();
    sec.innerHTML = now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds();
    day.innerHTML = days[now.getDay()].toUpperCase();
}

updateTime();

setInterval(updateTime, 1000);