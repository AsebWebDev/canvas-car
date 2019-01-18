// js/main.js
var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')

var redCar = new Car(
  278/10,500/10, // width and height with the same ratio
  100,100, // x and y
  Math.PI/4, // angle of 45 degrees
  'Red'
)
var greenCar = new Car(
  278/10,500/10,
  200,100,
  Math.PI/4,
  'Green'
) 

function drawEverything(){
  ctx.clearRect(0,0,canvas.width,canvas.height)
  redCar.draw(ctx)
  greenCar.draw(ctx)
}

function updateEverything() {
  redCar.update()
  greenCar.update()
  if (checkCollision(redCar,greenCar)){
    console.log('Collision!')
  }
}

function checkCollision(car1,car2) {
  return dist(car1,car2) < car1.width/2 + car2.width/2
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
      // redCar.angle -= 0.1 // Naive solution
      redCar.vAngle = -0.03 
      break
    case 39: // right
      // redCar.angle += 0.1 // Naive solution
      redCar.vAngle = 0.03 
      break
    case 87: // W
      greenCar.speed += 1
      break
    case 83: // S
      greenCar.speed -= 1
      break
    case 65: // A
      greenCar.vAngle = -0.03 
      break
    case 68: // D
      greenCar.vAngle = 0.03 
      break
  }
}
document.onkeyup = function(e){
  switch (e.keyCode) {
    case 37: // left
    case 39: // right
      redCar.vAngle = 0
      break
    case 65: // A
    case 68: // D
      greenCar.vAngle = 0
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
