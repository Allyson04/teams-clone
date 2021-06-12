const getTimeContainer = document.getElementById("current-time")

date = [
    //minutes in array[0]
    0,
    //seconds in array[1]
    0
]

names = [
    "Allyson Eduardo",
    "Samantha Flowers",
    "Juliana Ribeiro",
    "Jeff Andonuts",
    "Sabin Renê Figaro",
    "Crono"
]

formatDate(date)
createDate()
addProfiles()
const getMicStatuses = document.querySelectorAll("main div section.profile-info p span.mic")
const getProfileImgs = document.querySelectorAll("main div img")

//generating random timers to when activating function
setInterval(changeProfileSpeaking, (Math.random()*4000))

function createDate() {
    setInterval(function(){
        // console.log(date)
        date[0] >= 59 ? (date[0]=0, date[1]++) : date[0]++
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

function addProfiles() {
    names.forEach(function(element, index, array) {
        let profile = document.createElement("div")
        // console.log("adding name " + element + " to profile " + (index+1))
        profile.id = "profile" 
        profile.innerHTML = generateProfile(element)

        document.querySelector("main").appendChild(profile)
    })

    profilesList = document.querySelectorAll("#profile")
}

function generateProfile(element) {
    const ProfileModel = `
        <img src="https://cdn.pixabay.com/photo/2021/05/22/17/06/hybrid-6274156_960_720.jpg" alt="Foto de Perfil">
        <section class="flex-row profile-info">
            <p id="profile-name">${element}<span id="mic-status" class="hidden mic">🎙️</span><span class="info">○○○</span></p>
        </section>
    `

    return ProfileModel
}



function changeProfileSpeaking() {
    profilesList.forEach(function(element, index, array) {
        rdmNumber = Math.random()   
        rdmNumberProfile = Math.random() * .4
        rdmNumber < rdmNumberProfile ? (getMicStatuses[index].classList.remove("hidden"), getProfileImgs[index].classList.add("personSpeaking")) : (getMicStatuses[index].classList.add("hidden"), getProfileImgs[index].classList.remove("personSpeaking"))
    })
}

const utilitiesNav = document.getElementById("utilities")
const utilitiesInputs = utilitiesNav.querySelectorAll("div.nav-square > input")
const utilitiesModals = utilitiesNav.querySelectorAll("section.utilitiesModal")
utilitiesInputs.forEach(function(element) {
    element.addEventListener("change", function(event){toggleUtilitiesModal(event)})
})

// console.log(utilitiesInputs)
function toggleUtilitiesModal(event) {
    console.clear()

    // console.log(event.target.checked)
    previousEventState = event.target.checked

    for(i=0;i<utilitiesInputs.length;i++) {  
        
            // console.log(utilitiesModals)
            // console.log(utilitiesInputs)
            utilitiesInputs[i].checked = false
            console.log(utilitiesNav.querySelectorAll("section.utilitiesModal")[i]);
            if(utilitiesModals[i] != undefined){
            utilitiesModals[i].classList.add("hidden") 
        } 
    }

    event.target.checked = previousEventState;


    if(event.target.checked) {
        // console.log(event.target.parentElement)
        event.target.parentElement.querySelector("section.utilitiesModal").classList.remove("hidden")
    }
}

function sendMessage() {
    
    messageSend = document.getElementById("messageText").value

    if(messageSend != "") {
        actualTime = new Date()
        dd = (actualTime.getDate()).toString().padStart(2, '0')
        mm = (actualTime.getMonth() + 1).toString().padStart(2, '0')
        yy = (actualTime.getFullYear())
        actualDaysMonthsYears = dd + '/' + mm + '/' +  yy
        actualHoursMinutes = (actualTime.getHours()).toString().padStart(2, '0') + ":" + (actualTime.getMinutes()).toString().padStart(2, '0')
        timeSend = actualDaysMonthsYears + " " + actualHoursMinutes
        // console.log(messageSend)
        // console.log(timeSend)
        
        message = createMessage(messageSend, timeSend)
        // console.log(message)
        
        document.getElementById("chat-bar").appendChild(message)

        document.getElementById("messageText").value = ""
    }
    
}

function createMessage(messageSend, timeSend) {
    const messageTemplate = document.createElement("div")
    messageTemplate.classList.add("message")

    messageTemplate.innerHTML =
    `
    <time class="message-description">${timeSend}</time>
    <p class="message-text">${messageSend}</p>
    `



    return messageTemplate
}