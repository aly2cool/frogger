console.log('script loaded')
//let theFrog = document.getElementById('the-frog')
//$('.the-frog').addEventListener("keydown", movements)
//let marginleft = theFrog.offsetLeft;
//let margintop = theFrog.offsetTop;
// let theWalls = document.getElementById('main')
//let moveUp = 0;
let theFrog = document.getElementById('the-frog')
let theLeftCar = document.getElementsByClassName('carLeft')
let theRightCar = document.getElementsByClassName('carRight')
theFrog.style.left = "500px"
theFrog.style.top = "600px"
theLeftCar[0].style.left = "880px", theLeftCar[0].style.top = "430px"
theLeftCar[1].style.left = "880px", theLeftCar[1].style.top = "210px"
theRightCar[0].style.left = "-30px", theRightCar[0].style.top = "360px"
theRightCar[1].style.left = "-30px", theRightCar[1].style.top = "140px"

  function moveFrog(e){
    if (e.keyCode == '38') {
        let computedTop = parseInt(getComputedStyle(theFrog).getPropertyValue('top'))
        theFrog.style.top = parseInt(computedTop - 25) + 'px'
        console.log('up key was pressed')

    }


     if (e.keyCode == '40') {
        // down arrow
        let computedTop = parseInt(getComputedStyle(theFrog).getPropertyValue('top'))
        theFrog.style.top = parseInt(computedTop + 25) + 'px'
        console.log('down key was pressed')
        console.log(computedTop)
    }

     if (e.keyCode == '37') {
       // left arrow
       let computedLeft = parseInt(getComputedStyle(theFrog).getPropertyValue('left'))
        theFrog.style.left = parseInt(computedLeft - 25) + 'px'
        console.log('left arrow pressed')
        console.log(computedLeft)

    }
     if (e.keyCode == '39') {
       // right arrow
       let computedLeft = parseInt(getComputedStyle(theFrog).getPropertyValue('left'))
       theFrog.style.left = parseInt(computedLeft + 25) + 'px'
       console.log('right arrow pressed')
     }

  }

function moveCars(){
    let computedLeft = parseInt(getComputedStyle(theRightCar[0]).getPropertyValue('left'))
    let computedLeft1 = parseInt(getComputedStyle(theRightCar[1]).getPropertyValue('left'))
    let computedLeft2 = parseInt(getComputedStyle(theLeftCar[0]).getPropertyValue('left'))
    let computedLeft3 = parseInt(getComputedStyle(theLeftCar[1]).getPropertyValue('left'))


    theRightCar[0].style.left = parseInt(computedLeft + 70) + 'px'
    if(parseInt(theRightCar[0].style.left) > 1000) {theRightCar[0].style.left = '-70px'}

    theRightCar[1].style.left = parseInt(computedLeft1 + 45) + 'px'
    if(parseInt(theRightCar[1].style.left) > 1000) {theRightCar[1].style.left = '-70px'}

    theLeftCar[0].style.left = parseInt(computedLeft2 - 60) + 'px'
    if(parseInt(theLeftCar[0].style.left) < -40) {theLeftCar[0].style.left = '1000px'}

    theLeftCar[1].style.left = parseInt(computedLeft3 - 70) + 'px'
    if(parseInt(theLeftCar[1].style.left) < -40) {theLeftCar[1].style.left = '1000px'}

    }


window.addEventListener('keydown', moveFrog, false)
setInterval(moveCars, 200)
