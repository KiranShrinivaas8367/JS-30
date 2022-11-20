setInterval(setClock, 1000)

const hourHand = document.querySelector('[hour-hand]')
const minuteHand = document.querySelector('[min-hand]')
const secondHand = document.querySelector('[second-hand]')
const timeElement = document.querySelector('.time')
const dateElement = document.querySelector('.date')
const dayElement = document.querySelector('.day')

function setClock()
{
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio+currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio+currentDate.getHours()) / 12
    const day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    dateElement.textContent = `${currentDate.getDate()} / ${currentDate.getMonth()+1} / ${currentDate.getFullYear()}`
    timeElement.textContent = `${currentDate.getHours()} : ${currentDate.getMinutes()} : ${currentDate.getSeconds()}`
    dayElement.textContent = `${day[currentDate.getDay()]}`
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
    fixTransition(secondHand)
    fixTransition(minuteHand)
    fixTransition(hourHand)
}

function fixTransition(hand){
    const rotationValue = hand.style.getPropertyValue('--rotation');
    if(rotationValue==0){
        hand.style.transition="none";
    }
    else{
       hand.style.transition="transform .1s cubic-bezier(0.01, 2.5, 0.07, 1.31)";
    }
}

function setRotation(element,rotationRatio){
    element.style.setProperty('--rotation',rotationRatio * 360)
}

setClock()
