const getTimeContainer = document.getElementById("current-time")

date = [
    //minutes in array[0]
    0,
    //seconds in array[1]
    0
]



function createDate() {
    setInterval(function(){
        date[0] >= 59 ? (date[0]=0, date[1]++, date[0]++) : date[0]++
        formatDate(date)
    }, 1000)
}

function formatDate(date) {
    date.forEach(function(element, index, array) {
      
        array[index] = element.toString().padStart(2, '0')
        // console.log("Element: " + element)
        // console.log("array: " + array)

    })

    // console.log("saido da foreach: " + date)

    getTimeContainer.innerText = date[1] + ":" + date[0]
}

formatDate(date)
createDate()