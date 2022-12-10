const startButton = document.getElementsByClassName("startButton")[0];
const pauseButton = document.getElementsByClassName("pauseButton")[0];
const continueButton = document.getElementsByClassName("continueButton")[0];
const restartButton = document.getElementsByClassName("restartButton")[0];
const stopWatchTag = document.getElementsByClassName("stopWatch")[0];
const resetButton = document.getElementsByClassName("resetButton")[0];

let second = 0, minute = 0 , hour = 0;

function startTime() {

    second +=1;    
    if(second === 60) {
        second = 0;
        minute += 1;
    }

    if(minute === 60) {
        minute = 0;
        hour += 1;
    }

    const secondText = second < 10 ? "0" + second.toString() : second;
    const minuteText = minute < 10 ? "0" + minute.toString() : minute;
    const hourText = hour < 10 ? "0" + hour.toString() : hour;

    stopWatchTag.textContent = `${hourText}:${minuteText}:${secondText}`
}

let intervalId ="";
startButton.addEventListener("click",() => {
    clearInterval(intervalId)
     intervalId = setInterval(startTime,1000);
})

pauseButton.addEventListener("click", () => 
    clearInterval(intervalId)
)

continueButton.addEventListener("click", () => {
    clearInterval(intervalId)
    intervalId = setInterval(startTime,1000);
})

restartButton.addEventListener("click",() => {
    clearInterval(intervalId)
    second = 0 , minute = 0 , hour = 0
    intervalId = setInterval(startTime,1000)
})

resetButton.addEventListener("click", () => {
    clearInterval(intervalId)
    second = 0 , minute = 0 , hour = 0
    stopWatchTag.textContent = "00:00:00"
})