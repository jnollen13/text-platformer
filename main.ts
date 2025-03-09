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
            if (sound == 1) {
                music.play(music.melodyPlayable(music.jumpUp), music.PlaybackMode.InBackground)
            }
        }
    }
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    jumping()
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
    if (character == 1) {
        animation.runImageAnimation(
        mySprite,
        assets.animation`Jodim-walk-L`,
        250,
        true
        )
    } else if (character == 2) {
        mySprite.setImage(assets.image`Skovgaard`)
    } else {
        animation.runImageAnimation(
        mySprite,
        assets.animation`playeral`,
        335,
        true
        )
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    if (v3 == 1) {
        game.showLongText("Level complete.", DialogLayout.Full)
        game.reset()
    } else {
        lvl += 1
        if (lvl == 1) {
            game.showLongText("starting level 2", DialogLayout.Full)
            tiles.setCurrentTilemap(tilemap`level02`)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 30))
            if (story_mode == 1) {
                game.showLongText("This area contains tons of blocks floating in the air and many bad paths...", DialogLayout.Center)
            }
        } else if (lvl == 2) {
            game.showLongText("starting level 3", DialogLayout.Full)
            tiles.setCurrentTilemap(tilemap`level0`)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 18))
            if (story_mode == 1) {
                game.showLongText("This area contains both long jumps and consecutive short jumps.            press up to climb the ladders.", DialogLayout.Center)
            }
        } else if (lvl == 3) {
            game.showLongText("starting level 4", DialogLayout.Full)
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
            if (story_mode == 1) {
                game.showLongText("This area contains ladders and a door to try and stop enemies.", DialogLayout.Center)
            }
        } else if (lvl == 4) {
            game.showLongText("starting level 5", DialogLayout.Full)
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
            if (story_mode == 1) {
                game.showLongText("Beware the spikes...", DialogLayout.Center)
            }
        } else if (lvl == 5) {
            sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
            game.showLongText("starting level 6", DialogLayout.Full)
            tiles.setCurrentTilemap(tilemap`level6`)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 14))
            if (story_mode == 1) {
                game.showLongText("Ladders with the bottoms floating above lava!? Isn't that awesome?", DialogLayout.Center)
            }
        } else if (lvl == 6) {
            game.showLongText("starting level 7", DialogLayout.Full)
            tiles.setCurrentTilemap(tilemap`level8`)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 14))
            if (story_mode == 1) {
                game.showLongText("There is a second way out of this area but you melt in it which makes it kind of hard to use...", DialogLayout.Center)
            }
        } else if (lvl == 7) {
            game.showLongText("starting level 8", DialogLayout.Full)
            tiles.setCurrentTilemap(tilemap`level11`)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 14))
            game.showLongText("Jumps so far you can't see the next platform. what's next!", DialogLayout.Bottom)
        } else if (lvl == 8) {
            game.showLongText("starting level 9", DialogLayout.Full)
            tiles.setCurrentTilemap(tilemap`level15`)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 168))
            birdtype = randint(1, 2)
            bird2 = sprites.create(assets.image`birdL`, SpriteKind.bird)
            tiles.placeOnTile(bird2, tiles.getTileLocation(15, 116))
            bird2.setVelocity(-75, 0)
            go = 1
            bird2.setBounceOnWall(true)
        } else if (lvl == 9) {
            game.showLongText("starting level 10", DialogLayout.Full)
            if (story_mode == 1) {
                game.showLongText("In this area there are high gravity places that will pull you into lava. fun, right?", DialogLayout.Bottom)
            }
            tiles.setCurrentTilemap(tilemap`level-perfect skill`)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 19))
        } else if (lvl == 10) {
            tiles.setCurrentTilemap(tilemap`level36`)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 0))
        }
        if (select == 1) {
            v3 = 1
        }
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (character == 1) {
        animation.runImageAnimation(
        mySprite,
        assets.animation`Jodim-walk-R`,
        250,
        true
        )
    } else if (character == 2) {
        mySprite.setImage(assets.image`SkovgaardR`)
    } else {
        animation.runImageAnimation(
        mySprite,
        assets.animation`playera`,
        355,
        true
        )
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile17`, function (sprite, location) {
    mySprite.vy += 32
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
        mySprite.vy += -5
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
    if (sound == 1) {
        music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.InBackground)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile14`, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.coinlvl3, function (sprite, otherSprite) {
    if (sound == 1) {
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
    }
    sprites.destroy(mySprite2, effects.rings, 111)
    tiles.setWallAt(tiles.getTileLocation(23, 7), false)
    tiles.setTileAt(tiles.getTileLocation(23, 7), assets.tile`myTile0`)
    tiles.setWallAt(tiles.getTileLocation(23, 8), false)
    tiles.setTileAt(tiles.getTileLocation(23, 8), assets.tile`myTile0`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (sound == 1) {
        music.play(music.melodyPlayable(music.powerDown), music.PlaybackMode.InBackground)
    }
    game.splash("Congratulations!", "You were stabbed...")
    if (lvl == 4) {
        tiles.placeOnTile(mySprite, tiles.getTileLocation(31, 1))
    }
})
let v2 = 0
let bird2: Sprite = null
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
let v3 = 0
let jump = 0
let select = 0
let story_mode = 0
let lvl1not = 0
let character = 0
let sound = 0
let speedrun = 0
let gravityud = 0
let mySprite: Sprite = null
let lvl = 0
let go = 0
let start = 0
scene.setBackgroundImage(assets.image`bg`)
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
story.showPlayerChoices("Play as default character", "Play as Jodim", "Play as Skovgaard")
if (story.checkLastAnswer("Play as Jodim")) {
    character = 1
    mySprite.setImage(assets.image`Jodim`)
} else if (story.checkLastAnswer("Play as Skovgaard")) {
    character = 2
    mySprite.setImage(assets.image`SkovgaardR`)
    mySprite.setScale(0.4, ScaleAnchor.Middle)
} else {
    character = 0
}
story.showPlayerChoices("in order (Recommended)", "random level", "level select")
if (story.checkLastAnswer("in order (Recommended)")) {
    game.setDialogFrame(assets.image`df2`)
    game.setDialogTextColor(15)
    game.setDialogCursor(assets.image`dc2`)
    lvl1not = 1
    story.showPlayerChoices("story mode", "normal")
    if (story.checkLastAnswer("story mode")) {
        game.setDialogFrame(assets.image`dfadventue`)
        story_mode = 1
    } else if (story.checkLastAnswer("normal")) {
        lvl1not = 1
    }
} else if (story.checkLastAnswer("random level")) {
    lvl = randint(1, 8)
    tiles.setCurrentTilemap(tilemap`levelrandit`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 0))
    lvl1not = 0
    select = 1
} else if (story.checkLastAnswer("level select")) {
    select = 1
    story.showPlayerChoices("level 1", "level 2", "level 3", "higher")
    if (story.checkLastAnswer("higher")) {
        story.showPlayerChoices("level 4", "level 5", "level 6", "higher")
        if (story.checkLastAnswer("higher")) {
            story.showPlayerChoices("level 7", "level 8", "level 9", "level 10")
            if (story.checkLastAnswer("level 7")) {
                lvl = 5
                tiles.setCurrentTilemap(tilemap`levelrandit`)
                tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 0))
            } else if (story.checkLastAnswer("level 8")) {
                lvl = 6
                tiles.setCurrentTilemap(tilemap`levelrandit`)
                tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 0))
            } else if (story.checkLastAnswer("level 9")) {
                lvl = 7
                tiles.setCurrentTilemap(tilemap`levelrandit`)
                tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 0))
            } else if (story.checkLastAnswer("level 10")) {
                lvl = 8
                tiles.setCurrentTilemap(tilemap`levelrandit`)
                tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 0))
            }
        } else if (story.checkLastAnswer("level 4")) {
            lvl = 2
            tiles.setCurrentTilemap(tilemap`levelrandit`)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 0))
        } else if (story.checkLastAnswer("level 5")) {
            lvl = 3
            tiles.setCurrentTilemap(tilemap`levelrandit`)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 0))
        } else if (story.checkLastAnswer("level 6")) {
            lvl = 4
            tiles.setCurrentTilemap(tilemap`levelrandit`)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 0))
        }
    } else if (story.checkLastAnswer("level 1")) {
        lvl1not = 1
    } else if (story.checkLastAnswer("level 2")) {
        lvl = 0
        tiles.setCurrentTilemap(tilemap`levelrandit`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 0))
    } else if (story.checkLastAnswer("level 3")) {
        lvl = 1
        tiles.setCurrentTilemap(tilemap`levelrandit`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 0))
    }
}
controller.moveSprite(mySprite, 53, 0)
mySprite.setVelocity(0, 0)
start = 0
scene.cameraFollowSprite(mySprite)
if (lvl1not == 1) {
    tiles.setCurrentTilemap(tilemap`level1`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 14))
    if (story_mode == 1) {
        game.showLongText("You are entering a castle on the moon. In order to get in, you have to beat all the obstacles ahead. The castle added these to keep out intruders.", DialogLayout.Center)
        game.showLongText("welcome to castle Lavacrate!", DialogLayout.Full)
    }
}
let delay = game.runtime()
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
        info.setScore(game.runtime() - delay)
    }
})
game.onUpdate(function () {
    if (controller.B.isPressed() && mySprite.tileKindAt(TileDirection.Left, assets.tile`myTile7`)) {
        tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 0))
    }
})
game.onUpdate(function () {
    if (go == 1) {
        if (bird2.isHittingTile(CollisionDirection.Left)) {
            bird2.setImage(assets.image`birdR`)
        } else if (bird2.isHittingTile(CollisionDirection.Right)) {
            bird2.setImage(assets.image`birdL`)
        }
    }
})
game.onUpdateInterval(61328, function () {
    if (sound == 1 && Math.percentChance(13.2)) {
        music.play(music.createSong(assets.song`song0`), music.PlaybackMode.UntilDone)
    }
})
