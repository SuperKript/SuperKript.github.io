
import kaboom from "./libs/kaboom.mjs"

import { Player } from "./entities/Player.js"
import { Mushroom } from "./entities/Mushroom.js"
import { attachCamera }from "./utils/camera.js"
import { Level } from "./utils/Level.js"
import { uiManager } from "./utils/UIManager.js"
import { load } from "./utils/loader.js"
import { level1Config } from "./content/level1/config.js"
import { level1Layout, level1Mappings } from "./content/level1/level1Layout.js"
import { level2Config } from "./content/level2/config.js"
import { level2Layout, level2Mappings } from "./content/level2/level2Layout.js"
import { level3Config } from "./content/level3/config.js"
import { level3Layout, level3Mappings } from "./content/level3/level3Layout.js"
import { Projectiles } from "./entities/Projectiles.js"
import { Axes } from "./entities/Axes.js"
import { Saws } from "./entities/Saws.js"
import { Bats } from "./entities/Bats.js"








kaboom({
    width: 1280,
    height: 720,
    letterbox: true
})
load.fonts()
load.sounds()
load.assets()


const scenes = {
    menu: () => {
        const introAmbience = play("intro",{
            volume: 0.1,
            loop: true
        })
        onSceneLeave(() =>{
            introAmbience.paused = true
        })

        
        uiManager.displayMainMenu()
    },
    controls: () => {
        uiManager.displayControlsMenu()

    },
    1: () => {
        const waterAmbience = play("water-ambience",{
            volume: 0.08,
            loop: true
        })
        onSceneLeave(() =>{
            waterAmbience.paused = true
        })
 

        const level1 = new Level()
        setGravity(level1Config.gravity)
        level1.drawBackground("no-background")
        level1.drawMapLayout(level1Layout, level1Mappings)

        const player = new Player(
            level1Config.playerStartPosX, 
            level1Config.playerStartPosY,
            level1Config.playerSpeed,
            level1Config.jumpForce,
            level1Config.nbLives,
            1,
            false

        )
            player.enablePassthrough()
            player.enableCoinPickUp()
            player.enableMobVunerability()
            player.update()

            const mushrooms = new Mushroom(
                level1Config.mushroomPositions.map(mushroomPos => mushroomPos()),
                level1Config.mushroomRanges,
                level1Config.mushroomDurations,
                level1Config.mushroomType,
            )
            mushrooms.setMovementPattern()
            mushrooms.enablePassthrough()

            const fish = new Projectiles (
                level1Config.fishPositions.map(fishPos => fishPos()),
                level1Config.fishRanges,
                "fish"
            )
            fish.setMovementPattern()  

       attachCamera(player.gameObj, 0, 200)   

        level1.drawWaves("water", "wave")

        uiManager.displayCoinCount()
        player.updateCoinCount(uiManager.coinCountUI)

        uiManager.displayLivesCount()
        player.updateLives(uiManager.livesCountUI)
    },

    2: () => {
        const lavaAmbience = play("lava-ambience",{
            volume: 0.1,
            loop: true
        })
        onSceneLeave(() =>{
            lavaAmbience.paused = true
        })

        const level2 = new Level()
        setGravity(level2Config.gravity)
        level2.drawBackground("moon-background")
        level2.drawMapLayout(level2Layout, level2Mappings)

        const player = new Player(
            level2Config.playerStartPosX, 
            level2Config.playerStartPosY,
            level2Config.playerSpeed,
            level2Config.jumpForce,
            level2Config.nbLives,
            2,
            false

        )
            player.enablePassthrough()
            player.enableCoinPickUp()
            player.enableMobVunerability()
            player.update()

            const mushrooms = new Mushroom(
                level2Config.mushroomPositions.map(mushroomPos => mushroomPos()),
                level2Config.mushroomRanges,
                level2Config.mushroomDurations,
                level2Config.mushroomType,
            )
            mushrooms.setMovementPattern()
            mushrooms.enablePassthrough()  

            const flame = new Projectiles (
                level2Config.flamePositions.map(flamePos => flamePos()),
                level2Config.flameRanges,
                "flame"
            )
            flame.setMovementPattern() 
            const axes = new Axes(
                level2Config.axesPositions.map(axesPos => axesPos()),
                level2Config.axesSwingDurations
            )
          axes.setMovementPattern()

          const saws = new Saws(
            level2Config.sawPositions.map(sawPos => sawPos()),
            level2Config.sawRanges,
          )
            saws.setMovementPattern()

       attachCamera(player.gameObj, 0, 200)   

        level2.drawWaves("lava", "wave")

        uiManager.displayCoinCount()
        player.updateCoinCount(uiManager.coinCountUI)

        uiManager.displayLivesCount()
        player.updateLives(uiManager.livesCountUI)

    },
    3: () => {
        const windAmbience = play("strong-wind", {
            volume: 0.08,
            loop: true
        })
        onSceneLeave(() =>{
            windAmbience.paused = true
        })

        const level3 = new Level()
        setGravity(level2Config.gravity)
        level3.drawBackground("star-background")
        level3.drawMapLayout(level3Layout, level3Mappings)

        const player = new Player(
            level3Config.playerStartPosX, 
            level3Config.playerStartPosY,
            level3Config.playerSpeed,
            level3Config.jumpForce,
            level3Config.nbLives,
            3,
            true

        )
            player.enablePassthrough()
            player.enableCoinPickUp()
             player.enableMobVunerability()
            player.update()


            const bats = new Bats(
                level3Config.batPositions.map(batsPos => batsPos()),
                level3Config.batRanges,

            )
              bats.setMovementPattern()

              const mushrooms = new Mushroom(
                level3Config.mushroomPositions.map(mushroomPos => mushroomPos()),
                level3Config.mushroomRanges,
                level3Config.mushroomDurations,
                level3Config.mushroomType,
            )
            mushrooms.setMovementPattern()
            mushrooms.enablePassthrough()
            
            

        attachCamera(player.gameObj, 0, 200)   

        level3.drawWaves("cloud", "wave")

        uiManager.displayCoinCount()
        player.updateCoinCount(uiManager.coinCountUI)

        uiManager.displayLivesCount()
        player.updateLives(uiManager.livesCountUI)


    },
gameover: () => {
uiManager.displayGameOverScreen()
},
end: () => {
uiManager.displayEndGameScreen()
}
   
}

for (const key in scenes) {
    scene(key, scenes[key])
}

go( "menu")