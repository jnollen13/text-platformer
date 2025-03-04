namespace SpriteKind {
    export const coinlvl3 = SpriteKind.create()
}
function jumping () {
    if (jump == 0 || jump == 1) {
        mySprite.vy = randint(-48, -57)
        if (jump == 1) {
            mySprite.startEffect(effects.trail, randint(222, 777))
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
controller.combos.attachCombo("DDBB", function () {
    lvl += 1
    game.splash("DD+BB")
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    tiles.setTileAt(tiles.getTileLocation(11, 25), assets.tile`myTile`)
    tiles.setWallAt(tiles.getTileLocation(11, 24), false)
    tiles.setTileAt(tiles.getTileLocation(11, 24), assets.tile`myTile`)
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
    lvl += 1
    if (lvl == 1) {
        game.showLongText("lvl 1 complete", DialogLayout.Full)
        tiles.setCurrentTilemap(tilemap`level0`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 30))
    } else if (lvl == 2) {
        game.showLongText("lvl 2 complete", DialogLayout.Full)
        tiles.setCurrentTilemap(tilemap`level8`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 18))
    } else if (lvl == 3) {
        game.showLongText("lvl 3 complete", DialogLayout.Full)
        tiles.setCurrentTilemap(tilemap`level11`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 15))
        mySprite2 = sprites.create(assets.image`coin`, SpriteKind.coinlvl3)
        tiles.placeOnTile(mySprite2, tiles.getTileLocation(32, 6))
        animation.runImageAnimation(
        mySprite2,
        assets.animation`coinanimation`,
        111,
        true
        )
    } else if (lvl == 4) {
        game.showLongText("lvl 4 complete", DialogLayout.Full)
        tiles.setCurrentTilemap(tilemap`level5`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(31, 1))
        mySprite3 = sprites.create(assets.image`spike`, SpriteKind.Enemy)
        mySprite2 = sprites.create(assets.image`spike`, SpriteKind.Enemy)
        mySprite4 = sprites.create(assets.image`spike0`, SpriteKind.Enemy)
        mySprite5 = sprites.create(assets.image`spike0`, SpriteKind.Enemy)
        mySprite6 = sprites.create(assets.image`spike1`, SpriteKind.Enemy)
        mySprite7 = sprites.create(assets.image`spike1`, SpriteKind.Enemy)
        mySprite8 = sprites.create(assets.image`spike2`, SpriteKind.Enemy)
        mySprite9 = sprites.create(assets.image`spike2`, SpriteKind.Enemy)
        mySprite10 = sprites.create(assets.image`spike3`, SpriteKind.Enemy)
        mySprite11 = sprites.create(assets.image`spike3`, SpriteKind.Enemy)
        mySprite12 = sprites.create(assets.image`spike3`, SpriteKind.Enemy)
        mySprite13 = sprites.create(assets.image`spike4`, SpriteKind.Enemy)
        mySprite14 = sprites.create(assets.image`spike4`, SpriteKind.Enemy)
        tiles.placeOnTile(mySprite3, tiles.getTileLocation(29, 11))
        tiles.placeOnTile(mySprite2, tiles.getTileLocation(28, 11))
        tiles.placeOnTile(mySprite4, tiles.getTileLocation(27, 11))
        tiles.placeOnTile(mySprite5, tiles.getTileLocation(26, 11))
        tiles.placeOnTile(mySprite6, tiles.getTileLocation(25, 11))
        tiles.placeOnTile(mySprite7, tiles.getTileLocation(24, 11))
        tiles.placeOnTile(mySprite8, tiles.getTileLocation(23, 11))
        tiles.placeOnTile(mySprite9, tiles.getTileLocation(22, 11))
        tiles.placeOnTile(mySprite10, tiles.getTileLocation(21, 11))
        tiles.placeOnTile(mySprite11, tiles.getTileLocation(20, 11))
        tiles.placeOnTile(mySprite12, tiles.getTileLocation(19, 11))
        tiles.placeOnTile(mySprite13, tiles.getTileLocation(18, 11))
        tiles.placeOnTile(mySprite14, tiles.getTileLocation(17, 11))
        mySprite3.setBounceOnWall(true)
        mySprite2.setBounceOnWall(true)
        mySprite4.setBounceOnWall(true)
        mySprite5.setBounceOnWall(true)
        mySprite6.setBounceOnWall(true)
        mySprite7.setBounceOnWall(true)
        mySprite8.setBounceOnWall(true)
        mySprite9.setBounceOnWall(true)
        mySprite10.setBounceOnWall(true)
        mySprite11.setBounceOnWall(true)
        mySprite12.setBounceOnWall(true)
        mySprite13.setBounceOnWall(true)
        mySprite14.setBounceOnWall(true)
        mySprite3.setVelocity(0, 15)
        mySprite2.setVelocity(0, 25)
        mySprite4.setVelocity(0, 30)
        mySprite5.setVelocity(0, 40)
        mySprite6.setVelocity(0, 50)
        mySprite7.setVelocity(0, 55)
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`playera`,
    355,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
    mySprite.setVelocity(-999, 0)
    mySprite.x = -9999
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    game.setGameOverPlayable(false, music.melodyPlayable(music.spooky), false)
    game.setGameOverEffect(false, effects.melt)
    game.setGameOverMessage(false, "You melted in lava")
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    if (controller.up.isPressed()) {
        mySprite.y += -5
    }
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setFlag(SpriteFlag.ShowPhysics, true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.coinlvl3, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        sprites.destroy(mySprite2, effects.rings, 111)
        tiles.setWallAt(tiles.getTileLocation(23, 7), false)
        tiles.setTileAt(tiles.getTileLocation(23, 7), assets.tile`myTile0`)
        tiles.setWallAt(tiles.getTileLocation(23, 8), false)
        tiles.setTileAt(tiles.getTileLocation(23, 8), assets.tile`myTile0`)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.setGameOverMessage(false, "You were stabbed...")
    game.setGameOverEffect(false, effects.slash)
    game.gameOver(false)
})
let v2 = 0
let mySprite14: Sprite = null
let mySprite13: Sprite = null
let mySprite12: Sprite = null
let mySprite11: Sprite = null
let mySprite10: Sprite = null
let mySprite9: Sprite = null
let mySprite8: Sprite = null
let mySprite7: Sprite = null
let mySprite6: Sprite = null
let mySprite5: Sprite = null
let mySprite4: Sprite = null
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let jump = 0
let mySprite: Sprite = null
let lvl = 0
lvl = 0
info.setScore(0)
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
    info.setScore(game.runtime())
})
game.onUpdate(function () {
    if (!(mySprite.isHittingTile(CollisionDirection.Bottom))) {
        animation.stopAnimation(animation.AnimationTypes.ImageAnimation, mySprite)
        mySprite.ay = 50
        v2 = 1
        controller.moveSprite(mySprite, 31, 0)
        if (jump == 0) {
            jump = 1
        }
    } else if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.setBounceOnWall(false)
        jump = 0
        controller.moveSprite(mySprite, 60, 0)
        if (v2 == 1) {
            v2 = 0
        }
    }
})
