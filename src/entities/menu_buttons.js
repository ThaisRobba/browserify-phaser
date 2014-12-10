module.exports = {
    pos: [-50, 50, 150],
    callbacks: ['playState', 'playState', 'playState'],
    draw: function () {
        this.button1 = this.addButton(1, this.playState);
        this.button1.anchor.setTo(0.5, 0.5);

        this.button2 = this.addButton(2, this.playState);
        this.button2.anchor.setTo(0.5, 0.5);

        this.button3 = this.addButton(3, this.playState);
        this.button3.anchor.setTo(0.5, 0.5);
    },

    addButton: function (position, func) {
        return game.add.button(game.world.centerX, game.world.centerY + this.pos[position - 1], 'menu_button' + position, func);
    },

    playState: function () {
        game.state.start('play');
    }
};
