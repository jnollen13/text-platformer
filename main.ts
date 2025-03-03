controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (jump == 0 || jump == 1) {
        mySprite.vy = randint(-39, -48)
        if (jump == 1) {
            mySprite.startEffect(effects.trail, 100)
        }
        jump += 1
    }
})
let jump = 0
let mySprite: Sprite = null
adventure.addToTextlog("ready?")
mySprite = sprites.create(assets.image`player1`, SpriteKind.Player)
mySprite.setStayInScreen(true)
mySprite.ay = 11
mySprite.setBounceOnWall(false)
scene.cameraFollowSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level2`)
mySprite.vx = 67
game.onUpdate(function () {
    if (!(mySprite.isHittingTile(CollisionDirection.Bottom))) {
        mySprite.ay = 30
    } else if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        jump = 0
    }
})
