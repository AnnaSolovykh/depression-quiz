const button = document.querySelector('#btn')
let result = document.querySelector('#result')
let resultContainer = document.querySelector('#resultContainer')
let depressionSeverity = document.querySelector('.depression-severity')

button.addEventListener('click', calculatePoints)

function calculatePoints(e) {
    e.preventDefault()

    let points = 0;

    if (document.querySelector('.oneOne').checked) {
        points ++
    }
    if (document.querySelector('.twoOne').checked) {
        points ++
    }
    if (document.querySelector('.threeOne').checked) {
        points ++
    }
    if (document.querySelector('.fourOne').checked) {
        points ++
    }
    if (document.querySelector('.fiveOne').checked){
        points ++
    }
    if (document.querySelector('.sixOne').checked) {
        points ++
    }
    if (document.querySelector('.sevenOne').checked) {
        points ++
    }
    if (document.querySelector('.eightOne').checked) {
        points ++
    }
    if (document.querySelector('.nineOne').checked) {
        points ++
    }

    if (document.querySelector('.oneTwo').checked) {
        points = points+2
    } 
    if (document.querySelector('.twoTwo').checked) {
        points = points+2
    } 
    if (document.querySelector('.threeTwo').checked) {
        points = points+2
    } 
    if (document.querySelector('.fourTwo').checked) {
        points = points+2
    } 
    if (document.querySelector('.fiveTwo').checked) {
        points = points+2
    } 
    if (document.querySelector('.sixTwo').checked) {
        points = points+2
    } 
    if (document.querySelector('.sevenTwo').checked) {
        points = points+2
    } 
    if (document.querySelector('.eightTwo').checked) {
        points = points+2
    } 
    if (document.querySelector('.nineTwo').checked) {
        points = points+2
    }

    if (document.querySelector('.oneThree').checked) {
        points = points+3
    } 
    if (document.querySelector('.twoThree').checked) {
        points = points+3
    } 
    if (document.querySelector('.threeThree').checked) {
        points = points+3
    } 
    if (document.querySelector('.fourThree').checked) {
        points = points+3
    } 
    if (document.querySelector('.fiveThree').checked) {
        points = points+3
    } 
    if (document.querySelector('.sixThree').checked) {
        points = points+3
    } 
    if (document.querySelector('.sevenThree').checked) {
        points = points+3
    } 
    if (document.querySelector('.eightThree').checked) {
        points = points+3
    } 
    if (document.querySelector('.nineThree').checked) {
        points = points+3
    }
    resultContainer.style.display = 'block';
    resultContainer.style.display = 'flex';
    result.textContent = "Total points: " + points;

    learnDepressionSeverity()

    function learnDepressionSeverity() {

        if (points <= 4 && points >= 0) {
            depressionSeverity.textContent = "Great! You have no depression!"
        }

        else if (points <= 9 && points >= 5) {
            depressionSeverity.textContent = "You have mild depression. Take care!"
        }

        else if (points <= 14 && points >= 10) {
            depressionSeverity.textContent = "You have moderate depression. You are advised to consult a psycologist."
        }

        else if (points <= 19 && points >= 15) {
            depressionSeverity.textContent = "You have moderate severe depression, it is high time to help yourself and go to the doctor."
        }

        else {
            depressionSeverity.textContent = "You have severe depression, be kind to yourself, visit a doctor to make your life better!"
        }
    }
}