const hoursEl = document.getElementById("hour");
const minutesEl = document.getElementById("minute");
const secondsEl = document.getElementById("second");
const theme = document.getElementById("theme");
const timeformat = document.getElementById("timeformat");
const dateEl = document.getElementById("date");
const timeEl = document.getElementById("time");

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]

setInterval(() => {
    const time = new Date();
    const day = time.getDay();
    const date = time.getDate();
    const month = time.getMonth();
    const hour = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const all = hour + ":" + minutes;
    const all2 = days[day] + " " + date + " " + months[month];
    const minutesUnder10 = hour + ":" + 0 + minutes;
    dateEl.innerText = all2;
    timeEl.innerText = all;

    if (minutes < 10){
        timeEl.innerText = minutesUnder10;
    }
    hoursEl.style.transform = `translate(-50%, -100%) rotate(${hour * 30}deg)`

    minutesEl.style.transform = `translate(-50%, -100%) rotate(${minutes * 6}deg)`

    secondsEl.style.transform = `translate(-50%, -100%) rotate(${seconds * 6}deg)`
}, 1000)

theme.addEventListener("click", () => {
    const html = document.querySelector("html");
    if(html.classList.contains("light")) {
        html.classList.remove("light");
        document.body.style.backgroundColor = "#191919";
        document.getElementById("date").style.color = "white";
        document.getElementById("clock").style.borderColor = "white";
        theme.innerHTML = "Light mode";
    } else{
        html.classList.add("dark");
        theme.innerHTML = "L mode";
    }
    if(html.classList.contains("dark")) {
        html.classList.remove("dark");
        html.classList.add("light");
        document.body.style.backgroundColor = "white";
        document.getElementById("clock").style.borderColor = "black";
        document.getElementById("date").style.color = "black";
        theme.innerHTML = "Dark mode";
    }
})
