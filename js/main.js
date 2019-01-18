// js/main.js
var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')

var redCar = new Car(
  278/10,500/10, // width and height with the same ratio
  100,100, // x and y
  Math.PI/4, // angle of 45 degrees
  'Green'
)

function drawEverything(){
  ctx.clearRect(0,0,canvas.width,canvas.height)
  redCar.draw(ctx)
}

function updateEverything() {
  redCar.update()
}

// Listen for keydown events
document.onkeydown = function(e){
  e.preventDefault() // stop default behaviour (scrolling)
  console.log(e.keyCode)
  switch (e.keyCode) {
    case 38: // up
      redCar.speed += 1
      break
    case 40: // down
      redCar.speed -= 1
      break
    case 37: // left
      redCar.angle += 0.1
      break
    case 39: // right
      redCar.angle -= 0.1
      break
  }
}

// Animation
function animation() {
  updateEverything()
  drawEverything()
  window.requestAnimationFrame(animation)
}
animation()
