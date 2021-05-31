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
}

function generateProfile(element) {
    const ProfileModel = `
        <img src="https://cdn.pixabay.com/photo/2021/05/22/17/06/hybrid-6274156_960_720.jpg" alt="Foto de Perfil">
        <section id="profile-info"  class="flex-row">
            <p id="profile-name">${element}<span id="mic-status" class="hidden">🎙️</span></p>
        </section>
    `

    return ProfileModel
}

formatDate(date)
createDate()
addProfiles()