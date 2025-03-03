function jumping () {
    if (jump == 0 || jump == 1) {
        mySprite.vy = randint(-48, -57)
        if (jump == 1) {
            mySprite.startEffect(effects.trail, randint(100, 222))
        }
        jump += 1
    }
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    jumping()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    jumping()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`playeral`,
    335,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    game.showLongText("", DialogLayout.Bottom)
    tiles.setCurrentTilemap(tilemap`level0`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 0))
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`playera`,
    355,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    game.setGameOverPlayable(false, music.melodyPlayable(music.spooky), false)
    game.setGameOverEffect(false, effects.melt)
    game.setGameOverMessage(false, "You melted in lava")
    game.gameOver(false)
})
let v2 = 0
let jump = 0
let mySprite: Sprite = null
game.setDialogFrame(assets.image`df`)
game.setDialogTextColor(1)
game.setDialogCursor(assets.image`dc`)
mySprite = sprites.create(assets.image`player1`, SpriteKind.Player)
mySprite.setStayInScreen(true)
mySprite.ay = 11
mySprite.setBounceOnWall(false)
scene.cameraFollowSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level1`)
tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 14))
controller.moveSprite(mySprite, 50, 0)
game.onUpdate(function () {
    mySprite.vx = 0
    if (!(mySprite.isHittingTile(CollisionDirection.Bottom))) {
        animation.stopAnimation(animation.AnimationTypes.ImageAnimation, mySprite)
        mySprite.ay = 50
        v2 = 1
        controller.moveSprite(mySprite, 25, 0)
        if (jump == 0) {
            jump = 1
        }
    } else if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        jump = 0
        controller.moveSprite(mySprite, 60, 0)
        if (v2 == 1) {
            v2 = 0
        }
    }
})
