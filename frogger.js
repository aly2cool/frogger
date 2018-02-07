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
theLeftCar[0].style.left = "880px", theLeftCar[0].style.top = "510px"
theLeftCar[1].style.left = "880px", theLeftCar[1].style.top = "290px"
theRightCar[0].style.left = "0px", theRightCar[0].style.top = "440px"
theRightCar[1].style.left = "0px", theRightCar[1].style.top = "220px"
let testIt = document.getElementById('testCar')

  function moveFrog(e){
    if (e.keyCode == '38') {
        //up arrow
        let computedTop = parseInt(getComputedStyle(theFrog).getPropertyValue('top'))
        theFrog.style.top = parseInt(computedTop - 25) + 'px'

          //prevent frog from leaving the canvas
          if(parseInt(theFrog.style.top) < 0){
            theFrog.style.top = parseInt(computedTop + 25) + 'px'

          }
          // checkCollision(theFrog, theRightCar[0])
        }


     if (e.keyCode == '40') {
        // down arrow
        let computedTop = parseInt(getComputedStyle(theFrog).getPropertyValue('top'))
        theFrog.style.top = parseInt(computedTop + 25) + 'px'

        //prevent frog from going underground
        if(parseInt(theFrog.style.top) > 630){
          theFrog.style.top = parseInt(computedTop - 25) + 'px'
        }
        checkCollision(theFrog, theRightCar[0])
    }

     if (e.keyCode == '37') {
       // left arrow
       let computedLeft = parseInt(getComputedStyle(theFrog).getPropertyValue('left'))
        theFrog.style.left = parseInt(computedLeft - 25) + 'px'

        //prevent frog from going into left wall
        if(parseInt(theFrog.style.left) < 0){
            theFrog.style.left = parseInt(computedLeft + 25) + 'px'
        }
        // checkCollision(theFrog, theRightCar[0])
    }

     if (e.keyCode == '39') {
       // right arrow
       let computedLeft = parseInt(getComputedStyle(theFrog).getPropertyValue('left'))
       theFrog.style.left = parseInt(computedLeft + 25) + 'px'

       //prevent frog from going into right wall
       if(parseInt(theFrog.style.left) > 970){
          theFrog.style.left = parseInt(computedLeft - 25) + 'px'
       }
       // checkCollision(theFrog, theRightCar[0])
     }

  }

  function checkCollision(rect1, rect2) {
       rect1.getBoundingClientRect();
       rect2.getBoundingClientRect();

      if (rect1.x < rect2.x + rect2.width && rect1.x + rect1.width > rect2.x &&
          rect1.y < rect2.y + rect2.height && rect1.height + rect1.y > rect2.y) {
            console.log('collided')
            return true  // collision detected!
          }
  }

function frogDown(){
  theFrog.style.left = "500px"
  theFrog.style.top = "600px"
  theFrog.src='images/frog.png  '
}


function moveCars(){
  //compute left of first car facing right
    let computedLeft = parseInt(getComputedStyle(theRightCar[0]).getPropertyValue('left'))
    //compute left of second car facing right
    let computedLeft1 = parseInt(getComputedStyle(theRightCar[1]).getPropertyValue('left'))
    //compute left of first car facing left
    let computedLeft2 = parseInt(getComputedStyle(theLeftCar[0]).getPropertyValue('left'))
    //compute left of second car facing right
    let computedLeft3 = parseInt(getComputedStyle(theLeftCar[1]).getPropertyValue('left'))


    theRightCar[0].style.left = parseInt(computedLeft + 50) + 'px' // shift car 70 px
    if(parseInt(theRightCar[0].style.left) > 1000) {theRightCar[0].style.left = '-70px'}
    //if the car is passed the wall, respawn on other side.
    theRightCar[1].style.left = parseInt(computedLeft1 + 65) + 'px'
    if(parseInt(theRightCar[1].style.left) > 1000) {theRightCar[1].style.left = '-70px'}

    theLeftCar[0].style.left = parseInt(computedLeft2 - 48) + 'px'
    if(parseInt(theLeftCar[0].style.left) < -40) {theLeftCar[0].style.left = '1000px'}

    theLeftCar[1].style.left = parseInt(computedLeft3 - 84) + 'px'
    if(parseInt(theLeftCar[1].style.left) < -40) {theLeftCar[1].style.left = '1000px'}



    if(checkCollision(theFrog, theRightCar[0])){
      theFrog.src='images/sadFrog.png'
      setTimeout(frogDown, 2000)
      }
    if(checkCollision(theFrog, theRightCar[1])){
      theFrog.src='images/sadFrog.png'
      setTimeout(frogDown, 2000)
    }
    if(checkCollision(theFrog, theLeftCar[0])){
      theFrog.src='images/sadFrog.png'
      setTimeout(frogDown, 2000)
    }
    if(checkCollision(theFrog, theLeftCar[1])){
      theFrog.src='images/sadFrog.png'
      setTimeout(frogDown, 2000)
    }

    }


window.addEventListener('keydown', moveFrog, false)
setInterval(moveCars, 200)
