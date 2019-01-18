// When the variable is true, we see more things on the screen
var debug = true

// This function is drawing the base of the current referential
function drawCoordinates(ctx) {
  ctx.save()
  ctx.globalAlpha = 0.5
  ctx.strokeStyle = "red"
  ctx.lineWidth = 10
  
  // Draw the x coordinates (size of 100px)
  ctx.beginPath()
  ctx.moveTo(0,0)
  ctx.lineTo(100,0)
  ctx.stroke()

  // Draw the y coordinates (size of 100px)
  ctx.beginPath()
  ctx.moveTo(0,0)
  ctx.lineTo(0,100)
  ctx.stroke()
  
  ctx.restore()
}