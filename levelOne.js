console.log('script loaded')
let theFrog = document.getElementById('the-frog')
let theLeftCar = document.getElementsByClassName('carLeft')
let theRightCar = document.getElementsByClassName('carRight')
//default position for frog
theFrog.style.left = "500px"
theFrog.style.top = "600px"
//set positions of cars
theLeftCar[0].style.left = "880px", theLeftCar[0].style.top = "510px"
theLeftCar[1].style.left = "880px", theLeftCar[1].style.top = "290px"
theRightCar[0].style.left = "0px", theRightCar[0].style.top = "440px"
theRightCar[1].style.left = "0px", theRightCar[1].style.top = "220px"
let lilypad = document.getElementsByClassName('lilypad')
let theLily = new Image()
let headerScore = document.getElementsByClassName('header-score')
theLily.src='images/frogOnLily.png'
let score = 0;
let lives = 3;
let headerLives = document.getElementsByClassName('header-lives')
let levelButton = document.getElementById('levelTwo')
//let timer = document.getElementsByClassName('timer')
let timer = new Timer();
timer.start();
timer.addEventListener('secondsUpdated', function (e) {
    $('#timer').html(timer.getTimeValues().toString());
});

  function moveFrog(e){
    if (e.keyCode == '38') {
        //up arrow
        let computedTop = parseInt(getComputedStyle(theFrog).getPropertyValue('top'))
        theFrog.style.top = parseInt(computedTop - 25) + 'px'
          //prevent frog from leaving the canvas
          if(parseInt(theFrog.style.top) < 0){
            theFrog.style.top = parseInt(computedTop + 25) + 'px'

          }
        }


     if (e.keyCode == '40') {
        // down arrow
        let computedTop = parseInt(getComputedStyle(theFrog).getPropertyValue('top'))
        theFrog.style.top = parseInt(computedTop + 25) + 'px'

        //prevent frog from going underground
        if(parseInt(theFrog.style.top) > 630){
          theFrog.style.top = parseInt(computedTop - 25) + 'px'
          timer.start()
        }
      }


     if (e.keyCode == '37') {
       // left arrow
       let computedLeft = parseInt(getComputedStyle(theFrog).getPropertyValue('left'))
        theFrog.style.left = parseInt(computedLeft - 25) + 'px'

        //prevent frog from going into left wall
        if(parseInt(theFrog.style.left) < 0){
            theFrog.style.left = parseInt(computedLeft + 25) + 'px'
          }
       }

     if (e.keyCode == '39') {
       // right arrow
       let computedLeft = parseInt(getComputedStyle(theFrog).getPropertyValue('left'))
       theFrog.style.left = parseInt(computedLeft + 25) + 'px'

       //prevent frog from going into right wall
       if(parseInt(theFrog.style.left) > 970){
          theFrog.style.left = parseInt(computedLeft - 25) + 'px'
       }
     }

     //check if frogs landed on lilypad
     checkLily(theFrog, lilypad[0])
     checkLily(theFrog, lilypad[1])
     checkLily(theFrog, lilypad[2])
     checkLily(theFrog, lilypad[3])
     checkLily(theFrog, lilypad[4])


     if(checkLily(theFrog, lilypad[0]) == lilypad[0]){
       positionFrogOnLily(theFrog, lilypad[0])
     }

     if(checkLily(theFrog, lilypad[1]) == lilypad[1]){
       positionFrogOnLily(theFrog, lilypad[1])
     }

     if(checkLily(theFrog, lilypad[2]) == lilypad[2]){
       positionFrogOnLily(theFrog, lilypad[2])
     }
     if(checkLily(theFrog, lilypad[3]) == lilypad[3]){
       positionFrogOnLily(theFrog, lilypad[3])
     }
     if(checkLily(theFrog, lilypad[4]) == lilypad[4]){
       positionFrogOnLily(theFrog, lilypad[4])
     }

}

//collision detection for frogs entering lilypad
  function checkLily(obj1, obj2){
    obj1.getBoundingClientRect();
    obj2.getBoundingClientRect();

   if (obj1.x < obj2.x + obj2.width && obj1.x + obj1.width > obj2.x &&
       obj1.y < obj2.y + obj2.height && obj1.height + obj1.y > obj2.y) {
         console.log('on lilypad')
         return obj2  // collision detected!
       }
  }
//collision detection for cars running over the frog
  function checkCollision(rect1, rect2) {
       rect1.getBoundingClientRect();
       rect2.getBoundingClientRect();
//compare x POS of frog if less than x POS of car plus width of car and x POS of frog plus the width
//is greater than x POS of car and y POS of frog less than height of car and height of frog plus
//y POS of frog is greater than y POS of car
      if (rect1.x < rect2.x + rect2.width && rect1.x + rect1.width > rect2.x &&
          rect1.y < rect2.y + rect2.height && rect1.height + rect1.y > rect2.y) {
            console.log('collided')
            return true  // collision detected!
          }
  }

function frogDown(){
  //when the frog gets run over
  theFrog.style.left = "500px"
  theFrog.style.top = "600px"
  //theFrog.style.visibility='hidden'
  setTimeout(function(){
    theFrog.src='images/frog.png'
  }, 1500)
  lives -= 1
  headerLives[0].innerHTML = `Lives: ${lives}`
  if (lives == 0){
  gameOver()
  }
}

function gameOver(){
  //remove entire display for frog enlargement
  lilypad[0].style.display = 'none'
  lilypad[1].style.display = 'none'
  lilypad[2].style.display = 'none'
  lilypad[3].style.display = 'none'
  lilypad[4].style.display = 'none'
  theLeftCar[0].style.display = 'none'
  theLeftCar[1].style.display = 'none'
  theRightCar[0].style.display = 'none'
  theRightCar[1].style.display = 'none'
  theFrog.src = 'images/frog.png'
  theFrog.style.height = '700px'
  theFrog.style.width = '700px'
  theFrog.style.left = '150px'
  theFrog.style.top = '0px'
  setTimeout(function (){
    theFrog.src = 'images/sadFrogStanding.png'
  }, 3000)
  console.log(timer.getTimeValues().toString())
  timer.stop()
  //console.log(timer.getPropertyValue())
  //console.log(timer.getTimeValues().minutes + ':' + timer.getTimeValues().seconds + ':' + timer.getTimeValues().secondTenths)
}


function positionFrogOnLily(weMadeIt, whichLily){
  console.log('positioned.') //confirmation frog made it to lilypad
  whichLily.src = theLily.src
  setTimeout(function(){
    whichLily.style.display = 'none'
  }, 2000)
  score += 1
  headerScore[0].innerHTML = 'Lilys: ' + score
  theFrog.style.left = "500px"
  theFrog.style.top = "600px"
  if(score == 5){
    whichLily.style.visibility = 'hidden'
    theLeftCar[0].style.display = 'none'
    theLeftCar[1].style.display = 'none'
    theRightCar[0].style.display = 'none'
    theRightCar[1].style.display = 'none'
    setTimeout(function(){
      theFrog.style.height = '700px'
      theFrog.style.width = '700px'
      theFrog.style.left = '150px'
      theFrog.style.top = '0px'
    }, 2000)
  }
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

    let computedTop = parseInt(getComputedStyle(theFrog).getPropertyValue('top'))


    theRightCar[0].style.left = parseInt(computedLeft + 85) + 'px' // shift car 70 px
    if(parseInt(theRightCar[0].style.left) > 1000) {theRightCar[0].style.left = '-70px'}
    //if the car is passed the wall, respawn on other side.
    theRightCar[1].style.left = parseInt(computedLeft1 + 65) + 'px'
    if(parseInt(theRightCar[1].style.left) > 1000) {theRightCar[1].style.left = '-70px'}

    theLeftCar[0].style.left = parseInt(computedLeft2 - 75) + 'px'
    if(parseInt(theLeftCar[0].style.left) < -40) {theLeftCar[0].style.left = '1000px'}

    theLeftCar[1].style.left = parseInt(computedLeft3 - 84) + 'px'
    if(parseInt(theLeftCar[1].style.left) < -40) {theLeftCar[1].style.left = '1000px'}



    if(checkCollision(theFrog, theRightCar[0])){
      theFrog.src='images/sadFrog.png'
      frogDown()
      }
    if(checkCollision(theFrog, theRightCar[1])){
      theFrog.src='images/sadFrog.png'
      frogDown()
}
    if(checkCollision(theFrog, theLeftCar[0])){
      theFrog.src='images/sadFrogLeft.png'
      frogDown()
    }
    if(checkCollision(theFrog, theLeftCar[1])){
      theFrog.src='images/sadFrogLeft.png'
      frogDown()
    }
}


window.addEventListener('keydown', moveFrog, false)
setInterval(moveCars, 200) // keep cars moving at a steady rate
