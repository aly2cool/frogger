console.log('loaded')

let canvas = document.getElementById('gameCanvas')
let ctx = canvas.getContext('2d')
let x = canvas.width/2, y = canvas.height-75
let theFrog = new Image()
let dx = 25, dy = -25
//let rightPressed = false, leftPressed = false, upPressed = false, downPressed = false
let highway = new Image()
let highway2 = new Image()
let car = new Image()
let car2 = new Image()
let carPosX = 50
let carPosY = 200
let car2PosX = 50
let car2PosY = 320



function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
        x += dx
    }
    if(e.keyCode == 37) {
        leftPressed = true;
        x -= dx
    }
    if(e.keyCode == 38){
        upPressed = true
        y += dy
    }
    if(e.keyCode == 40){
        downPressed = true;
        y -= dy
    }
}

function draw() {
  ctx.font = '30px serif';
  ctx.fillText('Score: ', 10, 50);
  ctx.fillStyle = 'red'
}
function drawCar(){
  car.onload = function(){
    ctx.drawImage(car, canvas.width - carPosX, carPosY - 50, 100, 100)
  }
  car.src = 'car.png'
  car2.onload = function(){
    ctx.drawImage(car2, car2PosX, car2PosY, 100, 100)
  }
  car2.src = 'car2.png'
  carPosX += dx
  car2PosX += dx
   if(carPosX + dx < 0){
       carPosX += 2
   }
   if(carPosX + dx > canvas.width){
      carPosX = canvas.width - carPosX
       carPosX -= 2
   }
   if(car2PosX + dx > canvas.width){
      car2PosX = 50
       car2PosX -= 2
   }

}
function drawHighway(){
  highway.onload = function(){
    ctx.drawImage(highway, 0, canvas.height-200, 700, 100)
  }
  highway.src = 'highway.png'
  highway2.onload = function(){
    ctx.drawImage(highway, 0, canvas.height-370, 700, 100)
  }
  highway2.src = 'highway2.png'
}

function drawFrog(){
ctx.beginPath()
drawHighway()
drawCar()
theFrog.onload = function(){
  ctx.drawImage(theFrog, x-25, y, 40, 40)
}
theFrog.src = './frog.png'
ctx.font = '30px Arial'
ctx.fillText('hi', canvas.width/2 - 50, 350)
ctx.fillStyle = 'red'
ctx.closePath();
collision()
}

function collision(){
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  if(y + dy < -25){
    y -= dy
  }

  if(y + dy > canvas.height-75){
    y += dy
  }

  if(x + dx < 75) {
      x += dx
  }

  if(x + dx > canvas.width - 25){
      x -= dx
    }

    if(x  == car2PosX){
      if(y == car2PosY){
        console.log('hit')
        console.log(x)
      }
      //x = x-25
      //y = y
    }
  }





document.addEventListener('keydown', keyDownHandler, false)
setInterval(drawFrog, 100)

//drawHighway()
