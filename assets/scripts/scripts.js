const getTimeContainer = document.getElementById("current-time")

const getMicStatuses = document.querySelectorAll("main div section.profile-info p span.mic")
const getProfileImgs = document.querySelectorAll("main div img")

const utilitiesNav = document.getElementById("utilities")
const utilitiesInputs = utilitiesNav.querySelectorAll("div.nav-square > input")
const utilitiesModals = utilitiesNav.querySelectorAll("section.utilitiesModal")

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

setUpFunctions = {
    
    // ----------------------------------------------dates---------------------------------------------------

    createDate() {
        setInterval(function(){
            // console.log(date)
            date[0] >= 59 ? (date[0]=0, date[1]++) : date[0]++
            setUpFunctions.formatDate(date)
        }, 1000)
    },
    
    formatDate(date) {
        date.forEach(function(element, index, array) {
          
            array[index] = element.toString().padStart(2, '0')
            // console.log("Element: " + element)
            // console.log("array: " + array)
    
        })
    
        // console.log("saido da foreach: " + date)
    
        getTimeContainer.innerText = date[1] + ":" + date[0]
    },

    // ----------------------------------------------profiles---------------------------------------------------

    addProfiles() {
        names.forEach(function(element, index, array) {
            let profile = document.createElement("div")
            // console.log("adding name " + element + " to profile " + (index+1))
            profile.classList.add("profile") 
            profile.innerHTML = setUpFunctions.generateProfile(element)

            document.querySelector("main").appendChild(profile)
        })

        profilesList = document.querySelectorAll("#profile")
    },

    generateProfile(element) {
        const ProfileModel = `
            <img src="https://cdn.pixabay.com/photo/2021/05/22/17/06/hybrid-6274156_960_720.jpg" alt="Foto de Perfil">
            <section class="flex-row profile-info">
                <p id="profile-name">${element}<span id="mic-status" class="hidden mic">🎙️</span><span class="info">○○○</span></p>
            </section>
        `

        return ProfileModel
    },
    
    // ----------------------------------------------reactive_utilities---------------------------------------------------

    addEventListenerToElements() {

        // for inputs in nav bar
        utilitiesInputs.forEach(
            function(element) {
                element.addEventListener("change", function(event){utilities.toggleUtilitiesModal(event)})
            }
        )

        inputsStartScreen = document.querySelectorAll("section#enterMeeting-modal div.otherOptions input[type=radio]")
        inputsStartScreen.forEach((element, index, array) => {
            element.addEventListener("change", (e) => {utilities.SelectThisAudioOption(e.target)})
        })

    },

    // ----------------------------------------------Participants_list---------------------------------------------------

    createListParticipants() {
        numberOfParticipants = document.querySelectorAll(".profile")

        document.getElementById("participantsNumber").innerText = numberOfParticipants.length


        numberOfParticipants.forEach(function(participantElement, index, array) {
            // console.log(participantElement)

            profileName = participantElement.querySelector("#profile-name").innerText
            // console.log(profileName)

            profileImgSrc = participantElement.querySelector("img").getAttribute("src")
            // console.log(profileImgSrc)

            createli = document.createElement("li")
            createli.innerHTML = setUpFunctions.generateParticipantLi(profileName, profileImgSrc)
            // console.log(createli)


            document.querySelector("#participants-list ul").appendChild(createli)
        })

        
    },

    generateParticipantLi() {
        templateParticipantsList = `
            <img src="${profileImgSrc}" alt="Foto de Perfil">
            <h6>${profileName}</h6>
            <span>�</span>
        `

        return templateParticipantsList
    }
}


utilities = {
    // ----------------------------------------------profile_speaking---------------------------------------------------

    changeProfileSpeaking() {
        profilesList.forEach(function(element, index, array) {
            rdmNumber = Math.random()   
            rdmNumberProfile = Math.random() * .4
            rdmNumber < rdmNumberProfile ? (getMicStatuses[index].classList.remove("hidden"), getProfileImgs[index].classList.add("personSpeaking")) : (getMicStatuses[index].classList.add("hidden"), getProfileImgs[index].classList.remove("personSpeaking"))
        })
    },

    // ----------------------------------------------toggling_utilities---------------------------------------------------

    // console.log(utilitiesInputs)
    toggleUtilitiesModal(event) {
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
    },

    // ----------------------------------------------chat---------------------------------------------------

    sendMessage() {
        
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
        
    },

    createMessage(messageSend, timeSend) {
        const messageTemplate = document.createElement("div")
        messageTemplate.classList.add("message")

        messageTemplate.innerHTML =
        `
        <time class="message-description">${timeSend}</time>
        <p class="message-text">${messageSend}</p>
        `

        return messageTemplate
    },

    SelectThisAudioOption(elementChanged) {

        console.log(elementChanged)
        document.querySelectorAll("section#enterMeeting-modal div.otherOptions-config").forEach((element) => {
            element.classList.add("hidden")
        })

        // console.log(elementChanged)
        elementChanged.parentNode.parentNode.querySelector("div.otherOptions-config").classList.remove("hidden")
    }
}

setUp = [
    setUpFunctions.formatDate(date),
    setUpFunctions.createDate(),
    setUpFunctions.addProfiles(),

    //activating randomly changeProfileSpeaking()
    setInterval(setUpFunctions.changeProfileSpeaking, (Math.random()*4000)),

    setUpFunctions.addEventListenerToElements(),
    setUpFunctions.createListParticipants()
]

function transitionSnap() {
    document.querySelector("#enterMeeting-modal").remove()
    setTimeout(() => {
        document.querySelector(".background-modal").remove()
    }, 100); 
}

function inputAudioChange(inputAudio) {
    inputAudioSlider = document.querySelector(".otherOptions-config input[type=checkbox]")
    inputAudioRange = document.querySelector(".otherOptions-config input[type=range]")
    
    if(inputAudio == inputAudioRange && inputAudioRange != 0) {
        inputAudioSlider.checked = false
    } else if(inputAudio == inputAudioSlider && inputAudioSlider.checked == true) {
        inputAudioRange.value = 0
    }

    // console.log(" inputAudioSlider.value : " +  inputAudioSlider.checked)
    // console.log(" inputAudioRange.value : " +  inputAudioRange.value)
}