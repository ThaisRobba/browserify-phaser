browserify-phaser
=================

Testing and building Phaser projects with Browserify and Beefy!

###Installation

Installation is dead easy and assumes you have already installed node.js and npm.

Download and extract the template and cd into it from the command line.

    npm install    

Done? Awesome.

###Running

Now, still at the root directory, we can either run the following command:

    beefy src/game.js:bundle.js --live --open
    
Or simple start the shell script that does exactly the same:

    sh start.sh
    
Done!

###Extras

The template includes a few useful default states (loading screen, menu, play state), the code is commented and should be easy enough to understand. There are also a few assets included, mostly to give you a baseline to work from.

![Loading screen](http://i.imgur.com/eDImkI5.png)