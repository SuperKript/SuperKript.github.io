class UIManager{
    
    
    displayLivesCount(player) {
        this.livesCountUI = add([
            text("", {
                font: "Round",
                size: 40
                
            }),
            fixed(),
            pos(70, 5)
           
        ])

        this.livesCountUI.add([
            sprite("heart-icon"),
            pos(-60, -3),
            scale(2.2),
            fixed()
            

        ])
    }
    
    
    displayCoinCount(player) {
        this.coinCountUI = add([
            text("", {
                font: "Round",
                size: 40,
               
                
            }),
            {
                fullCoinCount: get("coin", { recursive: true}).length
            },
            fixed(),
            pos(70, 70)
        ])

        this.coinCountUI.add([
            sprite("coin-icon"),
            pos(-60, -10),
            scale(3),
            fixed()
        ])
    }

    displayBlinkingUIMessage(content, position) {
        const message = add([
            text(content, {
                size: 30,
                font: "Round"
            }),
            area(),
            anchor("center"),
            pos(position),
            opacity(),
            state("flash-up", ["flash-up", "flash-down"])
        ])

        message.onStateEnter("flash-up", async () =>{
           await tween(
            message.opacity,
            0,
            0.5,
            (nextOpacityValue) => message.opacity = nextOpacityValue,
            easings.linear
           ) 
            message.enterState("flash-down")
        })

        message.onStateEnter("flash-down", async () =>{
            await tween(
             message.opacity,
             1,
             0.5,
             (nextOpacityValue) => message.opacity = nextOpacityValue,
             easings.linear
            ) 
             message.enterState("flash-up")
         })

    }

    displayMainMenu() {
        add([
            sprite("no-background"),
            scale(5)
        ])
        add([
            sprite("logo"), 
            area(),
            anchor("center"),
            pos(center().x, center().y -150),
            scale(8)
        ])

        this.displayBlinkingUIMessage(
            "Press [ Enter ] To Start Game",
            vec2(center().x, center().y + 35)

        )

        onKeyPress("enter", () =>{
            play("confirm-ui", { speed: 1.5 })
            go("controls")
        })
    }

    displayControlsMenu() {
         add([
                sprite("no-background"),
                scale(5)
            ]) 
            add([
                text("Controls", {font: "Round", size: 50}), 
                area(),
                anchor("center"),
                pos(center().x, center().y -200)
            ])

        const controlPrompts =  add([
                pos(center().x + 30, center().y -15)
        ])
        controlPrompts.add([
            sprite("up"),
            pos(0,-80)
        ])
        controlPrompts.add([sprite("down")])
        controlPrompts.add([sprite("left"), pos(-80, 0)])
        controlPrompts.add([sprite("right"), pos(80, 0)])
        controlPrompts.add([sprite("space"), pos(-200, 0)])
        controlPrompts.add([
          text("Jump", { font: "Round", size: 32 }),
          pos(-190, 100),
          color(255, 76, 89)
        ])
        controlPrompts.add([
            text("Move", { font: "Round", size: 32 }),
            pos(10, 100),
            color(255, 76, 89)
          ])

          this.displayBlinkingUIMessage(
            "Press [ Enter ] To Start Game",
            vec2(center().x, center().y + 265),
            //color(255, 181, 73)
        )

        onKeyPress("enter", () =>{
            play("confirm-ui", { speed: 1.5 })
            go("1")
        })
    }
    displayGameOverScreen() {

        add([rect(1280, 720), color(0, 0, 0)])
        add([
          text("Game Over!", { size: 50, font: "Round" }),
          area(),
          anchor("center"),
          pos(center()),
        ])
    
        this.displayBlinkingUIMessage(
          "Press [ Enter ] to Start Game",
          vec2(center().x, center().y + 100)
        )
    
        onKeyPress("enter", () => {
          play("confirm-ui")
          go(1)
        })
      }
    
      displayEndGameScreen() {

        add([rect(1280, 720), color(0, 0, 0)])
        add([
          text("You Won! Thanks for Playing.", { size: 50, font: "Round" }),
          area(),
          anchor("center"),
          pos(center()),
        ])
    
        this.displayBlinkingUIMessage(
          "Press [ Enter ] to Play Again",
          vec2(center().x, center().y + 100)
        )
    
        onKeyPress("enter", () => {
          play("confirm-ui")
          go("menu")
        })
      }
    
}

export const uiManager = new UIManager()