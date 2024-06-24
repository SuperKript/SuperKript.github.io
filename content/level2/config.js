export const level2Config = {
    gravity: 1400,
    playerSpeed: 400,
    jumpForce: 650,
    nbLives: 15,
    playerStartPosX: 1400,
    playerStartPosY: 100,
    flamePositions: [
      () => vec2(2595, 600),
      () => vec2(2655, 600),
      () => vec2(2775, 600),
      () => vec2(2875, 600),
      () => vec2(2965, 600),
      () => vec2(4100, 600),
      () => vec2(4220, 550),
      () => vec2(5200, 550),
      () => vec2(5300, 550),
      () => vec2(5700, 550),
      () => vec2(5800, 550),
      () => vec2(5900, 550),
    ],
    flameRanges: [300, 500, 400, 300, 500, 900, 800, 500, 500, 900, 800, 500],

   

    mushroomPositions: [
      () => vec2(2200, 100),
      () => vec2(1900, 0),
      () => vec2(3200, 200),

    ],
    mushroomRanges: [300, 150, 150, 300, 300],
    mushroomDurations: [2, 1, 1, 2, 2],
    mushroomType: 2,

    axesSwingDurations: [1, 2, 3, 2],
    axesPositions: [
      () => vec2(8000, 350), 
      () => vec2(9000, 350)],
    axesRanges: [300, 500],
    
    sawPositions: [      
      () => vec2(3500, 300),
      () => vec2(4500, 300),],
    sawRanges: [300, 500],
}
  