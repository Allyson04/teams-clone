const getTimeContainer = document.getElementById("current-time")

minutes = 0;
seconds = 0;



function createDate() {
    setInterval(function(){
        minutes >= 59 ? minutes=0 : minutes++
        formatDate(minutes, seconds)
    }, 60000)
    
    setInterval(function(){
        seconds >= 59 ? seconds=0 : seconds++
        formatDate(minutes, seconds)
    }, 1000)
}

function formatDate(minutes, seconds) {
    minutes = minutes.toString().padStart(2, '0')
    seconds = seconds.toString().padStart(2, '0')

    getTimeContainer.innerText = minutes + ":" + seconds
}

formatDate(minutes, seconds)
createDate()