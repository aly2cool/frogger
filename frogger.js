console.log('script loaded')
//let theFrog = document.getElementById('the-frog')
//$('.the-frog').addEventListener("keydown", movements)
//let marginleft = theFrog.offsetLeft;
//let margintop = theFrog.offsetTop;
let theWalls = document.getElementById('main')
let moveLeft = 0;
theFrog = document.getElementById('the-frog')

window.addEventListener('keydown', moveFrog, false)
  function moveFrog(e){
    if (e.keyCode == '38') {
        console.log('up key was pressed')
        theFrog.style.top - 20 +'px'
        //moves to position 20 on y axis

    }

     if (e.keyCode == '40') {
        // down arrow
        theFrog.style.top += 20 + 'px'
        console.log('down key was pressed')
        //doesn't move
    }

     if (e.keyCode == '37') {
       // left arrow

        theFrog.style.left = parseInt(theFrog.style.left - 25) + 'px'
        console.log('left arrow pressed')
        //experimenting with parseInt ...
    }
     if (e.keyCode == '39') {
       // right arrow
       theFrog.style.left += parseInt(theFrog.style.left + (25 + 'px'))
       console.log('right arrow pressed')
       //another experiment...

     }

  }
