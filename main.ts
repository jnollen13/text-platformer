namespace SpriteKind {
    export const coinlvl3 = SpriteKind.create()
    export const bird = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.splash("no cheating", "or skips for you")
    game.reset()
})
function jumping () {
    if (start == 0) {
        if (jump == 0 || jump == 1) {
            mySprite.vy = randint(-48, -59)
            if (jump == 1) {
                mySprite.startEffect(effects.trail, randint(222, 777))
            }
            jump += 1
        }
    }
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    jumping()
})
controller.combos.attachCombo("U+DU+DBBA", function () {
    lvl += 1
    game.splash("U+DU+DBBA", "developer button combo")
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile15`, function (sprite, location) {
    if (controller.B.isPressed()) {
        mySprite.vy = 0
        jump = 0
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    jumping()
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
        tiles.setCurrentTilemap(tilemap`level02`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 30))
    } else if (lvl == 2) {
        game.showLongText("lvl 2 complete", DialogLayout.Full)
        tiles.setCurrentTilemap(tilemap`level0`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 18))
    } else if (lvl == 3) {
        game.showLongText("lvl 3 complete", DialogLayout.Full)
        tiles.setCurrentTilemap(tilemap`level3`)
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
        mySprite3.setVelocity(0, 10)
        mySprite2.setVelocity(0, 15)
        mySprite4.setVelocity(0, 20)
        mySprite5.setVelocity(0, 25)
        mySprite6.setVelocity(0, 30)
        mySprite7.setVelocity(0, 35)
        mySprite8.setVelocity(0, 40)
        mySprite9.setVelocity(0, 45)
        mySprite10.setVelocity(0, 50)
        mySprite11.setVelocity(0, 55)
        mySprite12.setVelocity(0, 60)
        mySprite13.setVelocity(0, 65)
        mySprite14.setVelocity(0, 10)
    } else if (lvl == 5) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
        game.showLongText("Lvl 5 complete", DialogLayout.Full)
        tiles.setCurrentTilemap(tilemap`level6`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 14))
    } else if (lvl == 6) {
        game.showLongText("lvl 6 complete", DialogLayout.Full)
        tiles.setCurrentTilemap(tilemap`level8`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 14))
    } else if (lvl == 7) {
        game.showLongText("lvl 7 complete", DialogLayout.Full)
        tiles.setCurrentTilemap(tilemap`level11`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 14))
    } else if (lvl == 8) {
        game.showLongText("Lvl 8 complete", DialogLayout.Full)
        tiles.setCurrentTilemap(tilemap`level15`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 168))
        birdtype = randint(1, 2)
        bird = sprites.create(assets.image`birdL`, SpriteKind.bird)
        tiles.placeOnTile(bird, tiles.getTileLocation(15, 116))
        bird.setVelocity(-75, 0)
        go = 1
        bird.setBounceOnWall(true)
    } else if (lvl == 9) {
        tiles.setCurrentTilemap(tilemap`level18`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 0))
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
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy += 21
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    game.setGameOverPlayable(false, music.melodyPlayable(music.spooky), false)
    game.setGameOverEffect(false, effects.melt)
    game.setGameOverMessage(false, "You melted in lava")
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    if (controller.up.isPressed()) {
        mySprite.vy += -10
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.bird, function (sprite, otherSprite) {
    if (birdtype == 1) {
        jump = 0
    } else if (birdtype == 2) {
        if (gravityud == 0) {
            gravityud = 1
            mySprite.ay = -50
            mySprite.y += -33
        } else if (gravityud == 1) {
            gravityud = 0
            mySprite.ay = 50
            mySprite.y += 33
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile14`, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.coinlvl3, function (sprite, otherSprite) {
    sprites.destroy(mySprite2, effects.rings, 111)
    tiles.setWallAt(tiles.getTileLocation(23, 7), false)
    tiles.setTileAt(tiles.getTileLocation(23, 7), assets.tile`myTile0`)
    tiles.setWallAt(tiles.getTileLocation(23, 8), false)
    tiles.setTileAt(tiles.getTileLocation(23, 8), assets.tile`myTile0`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.splash("Congratulations!", "You were stabbed...")
    if (lvl == 4) {
        tiles.placeOnTile(mySprite, tiles.getTileLocation(31, 1))
    }
})
let v2 = 0
let bird: Sprite = null
let birdtype = 0
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
let sound = 0
let gravityud = 0
let mySprite: Sprite = null
let lvl = 0
let go = 0
let start = 0
let speedrun = 0
start = 1
go = 0
lvl = 0
game.setDialogFrame(assets.image`df`)
game.setDialogTextColor(1)
game.setDialogCursor(assets.image`dc`)
mySprite = sprites.create(assets.image`player1`, SpriteKind.Player)
mySprite.setStayInScreen(true)
mySprite.ay = 0
mySprite.setBounceOnWall(false)
scene.cameraFollowSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level1`)
tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 14))
gravityud = 0
game.splash("game options")
story.showPlayerChoices("show physics", "don't show physics")
if (story.getLastAnswer() == "show physics") {
    mySprite.setFlag(SpriteFlag.ShowPhysics, true)
} else {
    mySprite.setFlag(SpriteFlag.ShowPhysics, false)
    mySprite.setVelocity(0, 0)
}
story.showPlayerChoices("speed-running mode", "normal mode")
if (story.getLastAnswer() == "normal mode") {
    speedrun = 0
} else if (story.checkLastAnswer("speed-running mode")) {
    speedrun = 1
}
story.showPlayerChoices("sound on?", "Sound off?")
if (story.checkLastAnswer("sound on?")) {
    sound = 1
} else if (story.checkLastAnswer("sound off?")) {
    sound = 0
}
controller.moveSprite(mySprite, 53, 0)
pause(100)
mySprite.setVelocity(0, 0)
start = 0
game.onUpdate(function () {
    if (!(mySprite.isHittingTile(CollisionDirection.Bottom))) {
        animation.stopAnimation(animation.AnimationTypes.ImageAnimation, mySprite)
        v2 = 1
        controller.moveSprite(mySprite, 31, 0)
        if (gravityud == 0) {
            mySprite.ay = 50
        }
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
game.onUpdate(function () {
    if (speedrun == 1) {
        info.setScore(game.runtime())
    }
})
game.onUpdate(function () {
    if (controller.B.isPressed() && mySprite.tileKindAt(TileDirection.Left, assets.tile`myTile7`)) {
        tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 0))
    }
})
game.onUpdate(function () {
    if (go == 1) {
        if (bird.isHittingTile(CollisionDirection.Left)) {
            bird.setImage(assets.image`birdR`)
        } else if (bird.isHittingTile(CollisionDirection.Right)) {
            bird.setImage(assets.image`birdL`)
        }
    }
})
game.onUpdateInterval(60000, function () {
    if (sound == 1 && Math.percentChance(12.2)) {
        music.play(music.createSong(assets.song`song0`), music.PlaybackMode.UntilDone)
    }
})
