// Car.js
class Car {
  constructor(width,height,initialX, initialY, initialAngle,color="Purple") {
    this.width = width
    this.height = height
    this.x = initialX // center of the car (not the top-left corner)
    this.y = initialY // center of the car (not the top-left corner)
    this.angle = initialAngle
    this.speed = 0
    this.img = new Image()
    this.img.src = `images/Car_${color}_Front.png`
  }
  draw(ctx) {
    ctx.save() // save and restore are used to don't change the state of the ctx outside of the method
    ctx.translate(this.x,this.y)
    ctx.rotate(this.angle)
    if (debug) drawCoordinates(ctx)
    ctx.drawImage(this.img,-this.width/2,-this.height/2,this.width,this.height)
    ctx.restore()
  }
  update() {
    // TODO
  }
  
}