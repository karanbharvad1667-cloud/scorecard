let homeScore = 0
let guestScore = 0

let homeScoreEle = document.getElementById("home-score")
let guestScoreEle = document.getElementById("guest-score")

function homeAdd(points) {
    homeScore += points
    homeScoreEle.textContent = homeScore
}

function guestAdd(points) {
    guestScore += points
    guestScoreEle.textContent = guestScore
}