controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (jump == 0 || jump == 1) {
        mySprite.vy = randint(-39, -48)
        if (jump == 1) {
            mySprite.startEffect(effects.trail, 100)
        }
        jump += 1
    }
})
let v2 = 0
let jump = 0
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`player1`, SpriteKind.Player)
mySprite.setStayInScreen(true)
mySprite.ay = 11
mySprite.setBounceOnWall(false)
scene.cameraFollowSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level2`)
tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 8))
animation.runImageAnimation(
mySprite,
assets.animation`playera`,
355,
true
)
game.onUpdate(function () {
    mySprite.vx = 67
    if (!(mySprite.isHittingTile(CollisionDirection.Bottom))) {
        animation.stopAnimation(animation.AnimationTypes.ImageAnimation, mySprite)
        mySprite.ay = 30
        v2 = 1
    } else if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        jump = 0
        if (v2 == 1) {
            animation.runImageAnimation(
            mySprite,
            assets.animation`playera`,
            355,
            true
            )
            v2 = 0
        }
    }
})
