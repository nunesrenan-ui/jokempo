let radiosValue = 0
let randomOutput = 0

function randomNumber() {
    random1 = Math.floor(Math.random() * 3 + 1)
    randomOutput = random1
    return randomOutput.toString
}

randomNumber()

const submitButton = document.getElementById("submitButton")
submitButton.onclick = function () {
    radios = document.getElementsByName("itemSelected")
    for (let i = 0; i, radios.length; i++) {
        if (radios[i].checked) {
            console.log(radios[i].value)
            radiosValue = radios[i].value
            return radiosValue.toString()
        }
    }
}

const randomButton = document.getElementById("randomButton")
randomButton.onclick = function () {
    if (radiosValue === 0) {
        alert("Remember to save your choice!")
    }
    else if (radiosValue === "1" && randomOutput === 3) {
        let winner = document.createElement("div")
        winner.innerHTML = '<img src="tenor.gif" alt="paper" width="360" height="360">'
        document.body.appendChild(winner)
        let finalMessage = document.createElement("div")
        finalMessage.innerHTML = '<p> You are the champions my friend!</p>'
        document.body.appendChild(finalMessage)
    }
    else if (radiosValue === "1" && randomOutput === 2) {
        let paper = document.createElement("div")
        paper.innerHTML = '<img src="papel.gif" alt="paper" width="360" height="360">'
        document.body.appendChild(paper)
        let finalMessage = document.createElement("div")
        finalMessage.innerHTML = '<p>Almost there, try again!</p>'
        document.body.appendChild(finalMessage)
    }
    else if (radiosValue === "2" && randomOutput == 1) {
        let winner = document.createElement("div")
        winner.innerHTML = '<img src="tenor.gif" alt="paper" width="360" height="360">'
        document.body.appendChild(winner)
        let finalMessage = document.createElement("div")
        finalMessage.innerHTML = '<p> You are the champions my friend!</p>'
        document.body.appendChild(finalMessage)
    }
    else if (radiosValue === "2" && randomOutput === 3) {
        let scissors = document.createElement("div")
        scissors.innerHTML = '<img src="tesoura-unscreen.gif" alt="tesoura" width="360" height="360">'
        document.body.appendChild(scissors)
        let finalMessage = document.createElement("div")
        finalMessage.innerHTML = '<p>Take care, you can cut yourself!</p>'
        document.body.appendChild(finalMessage)
    }
    else if (radiosValue === "3" && randomOutput === 2) {
        let winner = document.createElement("div")
        winner.innerHTML = '<img src="tenor.gif" alt="paper" width="360" height="360">'
        document.body.appendChild(winner)
        let finalMessage = document.createElement("div")
        finalMessage.innerHTML = '<p> You are the champions my friend!</p>'
        document.body.appendChild(finalMessage)
    }
    else if (radiosValue === "3" && randomOutput === 1) {
        let rock = document.createElement("div")
        rock.innerHTML = '<img src="Geodude-30827-unscreen.gif" alt="rock" width="360" height="360">'
        document.body.appendChild(rock)
        let finalMessage = document.createElement("div")
        finalMessage.innerHTML = '<p>NOOOP, you lost!</p>'
        document.body.appendChild(finalMessage)
    }
    else {
        let tie = document.createElement("div")
        tie.innerHTML = '<img src="large.gif" alt="tie" width="360" height="360">'
        document.body.appendChild(tie)
    }
}

