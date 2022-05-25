let colors = ["red", "green", "blue", "yellow", "aqua"]
let current_time = document.querySelector(".current_time");
let current_date = document.querySelector(".current_date");


//changing time after every second
setInterval(() => {
    var date = new Date();
    var hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
    var am_pm = date.getHours() >= 12 ? "PM" : "AM";
    hours = hours < 10 ? "0" + hours : hours;
    var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    var seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    time = hours + ":" + minutes + ":" + seconds + " " + am_pm;
    current_time.innerText = time;
    current_date.innerHTML = `<img src="https://icon-library.com/images/stopwatch-icon/stopwatch-icon-6.jpg" alt="">${date.toDateString()}`;

    let dayLeft = new Date(date.getFullYear(), date.getMonth(), 0).getDate() - date.getDate();
    let dayLeftPercent = (date.getDate() / 29) * 100;
    let year_progress_container = document.querySelector(".year_progress");
    year_progress_container.style.background = `linear-gradient(90deg, rgb(255,0,0) ${dayLeftPercent}%, rgba(255,255,255,1) 1%)`
    year_progress_container.innerText = `${dayLeft} days left in this month`


}, 1000)

//Timer Full screen controls scripts
let isFullscreen = false;
function fullScreen() {
    if(!isFullscreen){
        document.body.requestFullscreen()
        isFullscreen = true;
    }else{
        document.exitFullscreen()
        isFullscreen = false
    }
}


//Wake time all time

let isWakeSupported = 'wakeLock' in navigator;
console.log(isWakeSupported)

if(isWakeSupported){
    navigator.wakeLock.request('screen');
}else{
    console.log("Wake api is not supported by this browser");
    setTimeout(() => {
        alert("Update your browser or Increase your sleep time from setting.");
    }, 1000 * 10)
}