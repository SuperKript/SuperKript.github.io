export class Mushroom {

    constructor(positions, ranges, durations, type) {
      this.ranges = ranges
      this.durations = durations
      this.mushrooms = []
      for (const position of positions) {
        this.mushrooms.push(
           add([
               sprite(`mushroom-${type}`, { anim: "crawl" }),
               pos(position),
               area({
                  shape: new Rect(vec2(0, 4.5), 20, 20),
                  collisionIgnore: ["mushrooms"],
              }),
               anchor("center"),
               body(),
               scale(3),
               state("idle", ["idle", "crawl-left", "crawl-right"]),
               offscreen(),
               "mushrooms"
            ])
        )
      }
    }
  
    async crawl(mushroom, moveBy, duration) {
      if (mushroom.curAnim() !== "crawl") mushroom.play("crawl")
  
      await tween(
        mushroom.pos.x,
        mushroom.pos.x + moveBy,
        duration,
        (posX) => (mushroom.pos.x = posX),
        easings.easeOutSine
      )
    }
  
    setMovementPattern() {
      for (const [index, mushroom] of this.mushrooms.entries()) {
           const idle = mushroom.onStateEnter("idle", async (previousState) => {
                if (mushroom.curAnim () !== "idle") mushroom.play("idle")
  
               await new Promise((resolve) => {
                   setTimeout(() => resolve(), 3000)
               })
  
               if (previousState === "crawl-left") {
                   mushroom.enterState("crawl-right")
                   return
                } 
                
                  mushroom.jump()
                if (!mushroom.isOffScreen()) {
                     play("mushroom-attack", { volume: 0.1 })
                 }
  
                  mushroom.enterState("crawl-left")
             })
       
  
        const crawlLeft = mushroom.onStateEnter("crawl-left", async (previousState) => {
          mushroom.flipX = false
  
           await this.crawl(
               mushroom,
               -this.ranges[index],
               this.durations[index]
           )
        mushroom.enterState("idle", "crawl-left")
        })
  
        const crawlRight = mushroom.onStateEnter("crawl-right", async () => {
          mushroom.flipX = true
  
          await this.crawl(
              mushroom, 
              this.ranges[index], 
              this.durations[index],
            )
        mushroom.enterState("idle", "crawl-right")
        })
  
        onSceneLeave(() => {
          idle.cancel()
          crawlLeft.cancel()
          crawlRight.cancel()
        })
      }
    }
  
    enablePassthrough() {
      for (const mushroom of this.mushrooms) {
        mushroom.onBeforePhysicsResolve((collision) => {
          if (collision.target.is("passthrough") && mushroom.isJumping()) {
            collision.preventResolution()
          }
        })
      }
    }
    
}