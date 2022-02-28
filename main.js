const hoursEl = document.getElementById("hour");
const minutesEl = document.getElementById("minute");
const secondsEl = document.getElementById("second");
const theme = document.getElementById("theme");
const timeformat = document.getElementById("timeformat");
const dateEl = document.getElementById("date");
const timeEl = document.getElementById("time");

//Tehdään array viikonpäiville
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

//Array kuukausille
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]

//SetInterval päivittää kellon sekuntin välein jotta sekuntti viisari liikkuu
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
    //Output date ja time elementteihin
    dateEl.innerText = all2;
    timeEl.innerText = all;

    //Jos minuutit on alle kymmenen lisäämme nollan minuutin eteen
    if (minutes < 10){
        timeEl.innerText = minutesUnder10;
    }
    //Liikutetaan viisareita
    hoursEl.style.transform = `translate(-50%, -100%) rotate(${hour * 30}deg)`

    minutesEl.style.transform = `translate(-50%, -100%) rotate(${minutes * 6}deg)`

    secondsEl.style.transform = `translate(-50%, -100%) rotate(${seconds * 6}deg)`
}, 1000)

//Muutetaan dark teeman ja light teema välillä napin painaessa
theme.addEventListener("click", () => {
    const html = document.querySelector("html");
    if(html.classList.contains("light")) {
        html.classList.remove("light");
        document.body.style.backgroundColor = "#191919";
        document.getElementById("date").style.color = "white";
        document.getElementById("clock").style.borderColor = "white";
        document.getElementById("clock").style("clockwhite");
        theme.innerHTML = "Light mode";
    } else{
        html.classList.add("dark");
        theme.innerHTML = "Dark mode";
    }
    if(html.classList.contains("dark")) {
        html.classList.remove("dark");
        html.classList.add("light")
        document.body.style.backgroundColor = "white";
        document.getElementById("clock").style.borderColor = "black";
        document.getElementById("date").style.color = "black";
        theme.innerHTML = "Dark mode";
    }
})

