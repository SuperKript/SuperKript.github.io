export const load = {
    fonts: () => {
        loadFont("Round", "./assets/Round9x13.ttf")
        loadFont("Pixel", "./assets/Pixelmania.ttf")
    },
    assets: () => {

        loadSprite("up", "./assets/Arrow_Up_Key_Light.png")
        loadSprite("down", "./assets/Arrow_Down_Key_Light.png")
        loadSprite("left", "./assets/Arrow_Left_Key_Light.png")
        loadSprite("right", "./assets/Arrow_Right_Key_Light.png")
        loadSprite("space", "./assets/Space_Key_Light.png")
        loadSprite("coin-icon", "./assets/Coins_Ui.png")
        loadSprite("heart-icon", "./assets/armored_heart_16x16.png")
        loadSprite("coin", "./assets/Coin.png")
        loadSprite("bridge", "./assets/Bridge.png")

        loadSprite("no-background", "./assets/ScatteredCloudsSky.png" )
        loadSprite("moon-background", "./assets/Moon Sky.png" )
        loadSprite("star-background", "./assets/EnhancedStar black.png" )
        loadSprite("logo", "./assets/Sprite-logo.png")
        
        loadSprite("grass-tileset", "./assets/Grass_tileset.png", {
            sliceX: 3,
            sliceY: 4,
            anims: {
                tl: 0,
                tm: 1,
                tr: 2,
                ml: 3,
                mm: 4,
                mr: 5,
                bl: 6,
                bm: 7,
                br: 8

            }
        }),
        loadSprite("grass-oneway-tileset", "./assets/Grass_Oneway.png", {
            sliceX: 3,
            sliceY: 4,
            anims: {
              tl: 0,
              tm: 1,
              tr: 2,
              ml: 3,
              mm: 4,
              mr: 5,
              bl: 6,
              bm: 7,
              br: 8,
            },
          })

          loadSprite("brick-tileset", "./assets/Brick_tileset.png", {
            sliceX: 3,
            sliceY: 4,
            anims: {
                tl: 0,
                tm: 1,
                tr: 2,
                ml: 3,
                mm: 4,
                mr: 5,
                bl: 6,
                bm: 7,
                br: 8

            }
        }),
        
        loadSprite("brick-oneway-tileset", "./assets/Brick_Oneway.png", {
            sliceX: 3,
            sliceY: 4,
            anims: {
              tl: 0,
              tm: 1,
              tr: 2,
              ml: 3,
              mm: 4,
              mr: 5,
              bl: 6,
              bm: 7,
              br: 8,
            },
          })

          loadSprite("rock-tileset", "./assets/Cloud_tileset.png", {
            sliceX: 3,
            sliceY: 4,
            anims: {
                tl: 0,
                tm: 1,
                tr: 2,
                ml: 3,
                mm: 4,
                mr: 5,
                bl: 6,
                bm: 7,
                br: 8

            }
        }),
        
        loadSprite("rock-oneway-tileset", "./assets/Grass_Rock_Oneway.png", {
            sliceX: 3,
            sliceY: 4,
            anims: {
              tl: 0,
              tm: 1,
              tr: 2,
              ml: 3,
              mm: 4,
              mr: 5,
              bl: 6,
              bm: 7,
              br: 8,
            },
          })

          loadSprite("water", "./assets/Water.png", {
          sliceX: 8,
          sliceY: 1, 
          anims: {
              wave:{
                  from: 0,
                  to: 7,
                  speed: 16,
                  loop: true,
              },
          },
        })

        loadSprite("lava", "./assets/Lava.png", {
            sliceX: 8,
            sliceY: 1, 
            anims: {
                wave:{
                    from: 0,
                    to: 7,
                    speed: 16,
                    loop: true,
                },
            },
          })

          loadSprite("cloud", "./assets/Clouds.png", {
            sliceX: 8,
            sliceY: 1, 
            anims: {
                wave:{
                    from: 0,
                    to: 7,
                    speed: 16,
                    loop: true,
                },
            },
          })

            loadSprite("player", "./assets/FinnSprite.png",{
                sliceX: 28,
                sliceY: 1,
                anims: {
                  idle: {
                    from: 0,
                    to: 8,
                    loop: true,
                  },
                  run: {
                    from: 9,
                    to: 14,
                    loop: true,
                  },
                  "jump-up": 15,
                  "jump-down": 15,
                },   
            })

            loadSprite("bridge", "./assets/Bridge.png")
            loadSprite("mushroom-1", "./assets/Lightmushroom.png", {
              sliceX: 16,
              sliceY: 2,
              anims: {
                
                idle: { 
                  from: 16, 
                  to: 29, 
                  loop: true },
                crawl: { 
                  from: 0, 
                  to: 15, 
                  loop: true
                 },

              },
            })
            loadSprite("mushroom-2", "./assets/Darkmushroom.png", {
              sliceX: 16,
              sliceY: 2,
              anims: {
                crawl: { from: 0, to: 15, loop: true },
                idle:  { from: 16, to: 29, loop: true },
              },
            })
            loadSprite("mushroom-3", "./assets/Evendarkermushroom.png", {
              sliceX: 16,
              sliceY: 2,
              anims: {
                crawl: { from: 0, to: 15, loop: true },
                idle:  { from: 16, to: 29, loop: true },
              },
            })
            loadSprite("fish", "./assets/Fish_1.png", {
              sliceX: 2,
              sliceY:1,
              anims: {
                swim: { from: 0, to: 1, loop: true },
              },
            })

            loadSprite("flame", "./assets/Flame_1.png", {
              sliceX: 2,
              sliceY:1,
              anims: {
                burn: { from: 0, to: 1, loop: true },
              },
            })
            loadSprite("axe", "./assets/Axe_Trap.png")
            loadSprite("saw", "./assets/Circular_Saw.png")
            loadSprite("bat", "./assets/Flying.png", {
              sliceX: 7,
              sliceY: 1,
              anims: {
              fly: { from: 0, to: 6, loop: true },
              speed:9,
              loop: true,
              },
            })
            
            
        },
    sounds: () => {
       
      loadSound("intro", "./sounds/intro.wav")
       loadSound("jump", "./sounds/jump.wav") 
       loadSound("hit", "./sounds/hit.wav")
       loadSound("water-ambience", "./sounds/water-ambience.mp3")
       loadSound("coin", "./sounds/coin.wav")
       loadSound("confirm-ui", "./sounds/confirm-ui.wav")
       loadSound("mushroom-attack", "./sounds/mushroom-attack.wav")
       loadSound("swinging-axe", "./sounds/swinging-axe.mp3")
       loadSound("saw", "./sounds/saw.wav")
       loadSound("dive", "./sounds/Bat.wav")
       loadSound("fireball", "./sounds/fireball.wav")
       loadSound("strong-wind", "./sounds/strong-wind.wav")
       loadSound("lava-ambience", "./sounds/lava.wav")
    }
}
