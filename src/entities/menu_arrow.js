module.exports = {
    draw: function () {
        this.arrow = game.add.image(game.world.centerX - 100, game.world.centerY - 50, 'menu_arrow');
        this.arrow.anchor.setTo(0.5, 0.5);
        this.arrow.moveDelay = 200;
        this.arrow.canMove = true;
        this.arrow.currentButton = 1;
        game.add.tween(this.arrow)
            .to({
                x: this.arrow.x - 10
            }, 700, Phaser.Easing.Quadratic.Out)
            .to({
                x: this.arrow.x
            }, 400, Phaser.Easing.Quadratic.In)
            .loop()
            .start();
    },

    move: function (cursors, buttons) {
        if (cursors.down.isDown && this.arrow.canMove) {
            this.arrow.canMove = false;
            this.allowMovement();
            if (this.arrow.currentButton === 1) {
                this.tween(buttons, 2);
            } else if (this.arrow.currentButton === 2) {
                this.tween(buttons, 3);
            } else {
                this.tween(buttons, 1);
            }
        }

        if (cursors.up.isDown && this.arrow.canMove) {
            this.arrow.canMove = false;
            this.allowMovement();
            if (this.arrow.currentButton === 1) {
                this.tween(buttons, 3);
            } else if (this.arrow.currentButton === 2) {
                this.tween(buttons, 1);
            } else {
                this.tween(buttons, 2);
            }
        }

        if (game.input.keyboard.isDown(Phaser.Keyboard.ENTER)) {
            this.activateButton(buttons, this.arrow.currentButton);
        }
    },

    tween: function (buttons, buttonNum) {
        game.add.tween(this.arrow)
            .to({
                y: game.world.centerY + buttons.pos[buttonNum - 1]
            }, this.arrow.moveDelay, Phaser.Easing.Quadratic.In)
            .start();
        this.arrow.currentButton = buttonNum;
    },

    allowMovement: function () {
        game.time.events.add(255, (function () {
            this.arrow.canMove = true;
        }), this);
    },

    activateButton: function (buttons, currentButton) {
        buttons[buttons.callbacks[currentButton - 1]]();
    }
};
