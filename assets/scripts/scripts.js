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
setInterval(changeProfileSpeaking, (Math.random()*2000))

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
        console.log("adding name " + element + " to profile " + (index+1))
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

