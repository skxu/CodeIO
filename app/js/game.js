
window.gameSpace = window.gameSpace || { };


SPRITE_PLAYER = 0x20;
SPRITE_ENEMY = 0x40;

var updateSidebar = function(target) {
  $("#paragraph1").hide();
  $("#part2").hide();


  $(target).show();
}


var addProgress = function(percent) {
  var width = $('.bar')[0].style.width;
  console.log(parseFloat(width));
  width = parseFloat(width) + percent;
  $('.bar').css("width", width + '%');
}



window.gameFunction = function() { //Wait for site to load
  var debug = false;
  //global variables can be accessed
  // via getters that this function returns at the end (yui model)
  var global_x = 0; //not actually global, todo: name change
  var global_y = 0; //not actually global
  var global_Player;
  var global_Pet;
  var global_Holding; //not actually global
  var global_Commander;

  

//front end

  var myDiv = document.getElementById("console"); //has to use document.getElementById
  if (debug) {
    console.log("divID: console, width = " + myDiv.offsetWidth);
  }
  var divWidth = myDiv.offsetWidth;
  var divHeight = myDiv.offsetHeight - 248;

  var canvas = $("#game");
  canvas.prop({width: divWidth, height:divHeight});
  canvas.imageSmoothingEnabled = false;
  canvas.webkitImageSmoothingEnabled = false;

  $(window).resize(function() {
    var myDiv = document.getElementById("console"); //has to use document.getElementById
  if (debug) {
    console.log("divID: console, width = " + myDiv.offsetWidth);
  }
  var divWidth = myDiv.offsetWidth;
  var divHeight = myDiv.offsetHeight - 248;

  var canvas = document.getElementById("#game"); //has to use document.getElementById
  if(canvas && canvas[0] && canvas[0].getContext('2d')) {
    ctx = canvas[0].getContext('2d');
    ctx.canvas.height = divHeight;
    ctx.canvas.width = divWidth;
    console.log(divHeight);
    console.log(divWidth);
    Q.width = divWidth;
    Q.height = divHeight;
    Q.cssWidth = divWidth;
    Q.cssHeight = divHeight;
  }
});

//initiate
var Q = window.Q = Quintus()
.include("Sprites, Scenes, Input, 2D, Anim, Touch, UI, Audio")
        // Maximize this game to whatever the size of the browser is
        .setup("game",{
          //upsampleWidth: 800, upsampleHeight: 450
        })
        // And turn on default input controls and touch input (for UI)
        .controls().touch()

        Q.el.focus(); //focuses the canvas after site loads
        canvas_focus = true;

        /* Q.animations('player', {
          right: {frames: [0,1,2,3,4,5,6,7,8,9], rate:1/10},
          left: {frames: [19,18,17,16,15,14,13,12,11,10], rate:1/10},
          right_idle: {frames: [0], rate:1},
          left_idle: {frames: [10], rate:1}
        });
  */
        Q.enableSound();
        Q.animations('player_crouch', {
          crouch_right: {frames: [0,1,2,3,4,5,6,7,8,9,10,11,12,13], rate:1/14},
          crouch_left: {frames: [27,26,25,24,23,22,21,20,19,18,17,16,15,14], rate:1/14},
          crouch_right_idle: {frames: [0], rate:1},
          crouch_left_idle: {frames: [14,], rate:1}
        });


        Q.animations('cat', {
          cat_right: {frames: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], rate:1/8},
          cat_left: {frames: [31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16], rate:1/8},
          cat_right_idle: {frames: [0], rate:1},
          cat_left_idle: {frames: [31], rate:1}
        });

        Q.animations('frog', {
          frog_right: {frames: [0], rate:1},
          frog_left: {frames: [1], rate:1}
        });

        Q.animations('player', {
          start_right: {frames: [46,45,44,43,42,41,40], rate:1/15},
          walk_right: {frames: [19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0], rate:1/15},
          right_idle: {frames:[92,91,90,89,88,87,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,85,84,83,82,81,80], rate:1/10},
          right_idle_4: {frames:[80], rate:1},
          right_fall: {frames:[120], rate:1},
          right_jump: {frames:[125,124,123,122,121,120], loop:false, rate:1/15},
          start_left: {frames:[60,61,62,63,64,65,66], rate:1/15},
          walk_left: {frames: [20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39], rate:1/15},
          left_idle: {frames:[100,101,102,103,104,105,106,106,106,106,106,106,106,106,106,106,106,106,106,106,106,106,106,106,106,106,106,106,106,106,106,106,106,106,106,106,106,106,106,106,106,107,108,109,110,111,112], rate:1/10},
          left_idle_2: {frames: [109], rate:1},
          left_idle_3: {frames: [110,111,112,113,114,115,116,117,118,119], rate:1/10},
          left_idle_4: {frames:[100], rate:1},
          left_fall: {frames:[145], rate:1},
          left_jump: {frames:[140,141,142,143,144,145], rate:1/15, loop: false }
        });

        Q.animations('blob', {
          blob_right: {frames: [0,1,2,3,4,5,6,7], rate: 1/4},
          blob_left: {frames:[15,14,13,12,11,10,9,8], rate:1/4}
        });

        Q.animations('gate', {
          gate_open: {frames: [0,1,2,3,4,5], loop: false, rate: 1/8},
          gate_close: {frames:[5,4,3,2,1,0], loop: false, rate: 1/8}
        });
        
        Q.animations('vase_break', {
          vase_break: {frames: [1,2,3], rate:1/6}
        });

Q.Sprite.extend("Command", {
  init: function(p) {
    this._super(p, {
      sheet: "player",
      sprite: "player",
      deploying: false,
      queue: []
      
    });
    this.hide();
  },
  step: function(dt) {
    global_Commander = this;
    var deploy_command = 0;
    if (!this.p.deploying && this.p.queue.length > 0) {
      deploy_command = this.p.queue.shift();
      this.p.deploying = true;
      console.log("deploying: " + deploy_command);
      if (deploy_command == "summon") {
        Q.stage().insert(new Q.Blob({x:400, y:20, Player:global_Player}));
        this.p.deploying = false;
      
      }

    }
  }
});

// ## Player Sprite
// The very basic player sprite, this is just a normal sprite
// using the player sprite sheet with default controls added to it.
Q.Sprite.extend("Player",{

  // the init constructor is called on creation
  init: function(p) {
    // You can call the parent's constructor with this._super(..)
    this._super(p, {
      totalTime: 0,
      timeCounter: true,
      sheet: "player",
      sprite: "player",
      w: 35, 
      x: 410,           
      y: 90,
      z: 5,
      old_x: 0,
      old_y: 0,
      startWalk: false,
      startIdle: false,
      holding: false,
      timer: 0,
      health: 10,
      type: 64,
      summon: false,   
    });

    // Add in pre-made components to get up and running quickly
    // The `2d` component adds in default 2d collision detection
    // and kinetics (velocity, gravity)
    // The `platformerControls` makes the player controllable by the
    // default input actions (left, right to move,  up or action to jump)
    // It also checks to make sure the player is on a horizontal surface before
    // letting them jump.
    this.p.w = 35;
    this.add('2d, platformerControls, animation, tween');



    // Write event handlers to respond hook into behaviors.
    // hit.sprite is called everytime the player collides with a sprite
    this.on("hit.sprite",function(collision) {

      // Check the collision, if it's the Tower, you win!
      if(collision.obj.isA("Tower")) {
        
      }

      if(collision.obj.isA("Portal")) {
        
      }
    });
  },
  
  setLeft: function() {
    if (this.p.direction == 'right') {
      this.p.directionChange = true;
    }
    this.p.direction = 'left';
    
  },

  setRight: function() {
    if (this.p.direction == 'left') {
      this.p.directionChange = true;
    }
    this.p.direction = 'right';
  },

  step: function(dt) {

    //summoning + getting stage from sprite Proof of Concept
    if(this.p.summon) {
      Q.stage().insert(new Q.Blob({x:400, y:20, Player:this}));
      this.p.summon = false;
    }

    if (Q.inputs['shift'] && Q.input_release['tab']) {
      canvas_focus = false;
      Q.input_release['tab'] = false;
      editor.focus();
    }

    if(this.p.health <= 0) {
      this.p.holding = false;
      global_Holding = false;
      this.destroy();
    }
    global_x = this.p.x;
    global_y = this.p.y;
    global_Player = this;
    if(global_Player.p.old_x == 0 && global_Player.p.old_y == 0) {

    }
    Q.input.on('left',this, "setLeft");
    Q.input.on('right',this, "setRight"); 
    if(Q.inputs['F']) {
      this.p.speed = 500;
    } else {
      this.p.speed = 150;
    }
    if(!this.p.startIdle) {
    this.p.timer += dt;
    }
    
      if (this.p.timer > 5) {
        this.p.startIdle = true;
        this.p.timer = 0;
      } 
    if (this.p.vy < 0 && this.p.direction == 'right' && !this.p.jumped) {
      this.play("right_jump");
      this.p.jumped = true;
    } else if (this.p.vy < 0 && this.p.direction == 'left' && !this.p.jumped) {
      this.play("left_jump");
      this.p.jumped = true;
    } else if (this.p.vy > 0 && this.p.direction == 'right' && this.p.jumped) {
      this.play("right_fall");
      this.p.jumped = false;
    } else if (this.p.vy > 0 && this.p.direction == 'left' && this.p.jumped) {
      this.play("left_fall");
      this.p.jumped = false;
    }

    if (this.p.vy < 0 && this.p.direction == 'right' && this.p.directionChange) {
      this.play("right_jump");
      this.p.directionChange = false;
    } else if (this.p.vy < 0 && this.p.direction == 'left' && this.p.directionChange) {
      this.play("left_jump");
      this.p.directionChange = false;
    } else if (this.p.vy > 0 && this.p.direction == 'right' && this.p.directionChange) {
      this.play("right_fall");
      this.p.directionChange = false;
    } else if (this.p.vy > 0 && this.p.direction == 'left' && this.p.directionChange) {
      this.play("left_fall");
      this.p.directionChange = false;
    }

    if (this.p.vx > 0 && this.p.vy == 0) {
      
      if(this.p.animationFrame >= 6 && this.p.animation == "start_right") {
        this.p.startWalk = true;
        this.p.directionChange = false;
      }
      if (this.p.startWalk) {
        this.play("walk_right");
      } else {
        this.play("start_right");
      }
      
    } else if (this.p.vx < 0 && this.p.vy == 0) {
      
      if(this.p.animationFrame >= 6 && this.p.animation == "start_left") {
        this.p.startWalk = true;
        this.p.directionChange = false;
      }
      if (this.p.startWalk) {
        this.play("walk_left");
      } else {
        this.play("start_left");
      }
      
    } else {
      this.p.startWalk = false;
    }
    if(Q.inputs['left'] || Q.inputs['right'] || this.p.vy < 0) {
      var still = false;
    } else {
      var still = true;
    }
    if (this.p.direction == "right" && this.p.vx == 0 && still) {
      this.p.startWalk = false;
      if (this.p.startIdle) {
        this.play("right_idle");
      } else {
        this.play("right_idle_4");
      }
      if (this.p.animation == "right_idle" && this.p.animationFrame >= 46) {
        this.p.startIdle = false;
        this.p.timer = 0;
      
      }
    } else if (this.p.direction == "left" && this.p.vx == 0 && still) {
      this.p.startWalk = false;
      if (this.p.startIdle) {
        this.play("left_idle");
      } else {
        this.play("left_idle_4");
      }

      if (this.p.animation == "left_idle" && this.p.animationFrame >= 46) {
        this.p.startIdle = false;
        this.p.timer = 0;
        
      }

    }


  }


});



Q.Sprite.extend("Pet", {
  init: function(p) {
    //CAUTION: using queue.shift() is O(n) instead of O(1)
    //If need better performance for large Queues, use this http://code.stephenmorley.org/javascript/queues/
    this._super(p, {
      Player: 0,
      follow_distance: 35,
      sheet: 'cat',
      sprite: 'cat',
      speed: 150,
      jumpSpeed: -400,
      x: 380,
      scale:1,
      z: 4,
      landed: 0,
      move: false,
      move_timer: 0,
      move_timer_start: false,
      wait: false,
      not_moving: true,
      startX: 0,
      deploy: false,
      follow: true,
      deploying: false,
      queue: [],
      type: Q.SPRITE_NONE
    });


    this.add('2d, animation, tween');

  
  this.on("bump.bottom",this,"landed");

},
landed: function(col) {
  this.p.landed = 1/5;
},

playAnimation: function(vx,dir) {
  if (vx > 0) {
    this.play("cat_right");
  } else if (vx < 0) {
    this.play("cat_left");
  } else if (vx == 0 && dir == "right") {
    this.play("cat_right_idle");
  } else if (vx == 0 && dir == "left") {
    this.play("cat_left_idle");
  }
},
step: function(dt) {

  //timers
  if(this.p.move_timer_start) {
    this.p.move_timer += dt;
  }


  if(Q.input_release['D']) {
    if(!this.p.follow) {
      this.p.follow = true;
      Q.input_release['D'] = false;
    } else {
      Q.input_release['D'] = false;
      this.p.follow = false;
    }
  }

  if(Q.inputs['tab']) {
    var temp = this.p.scale;
    this.animate({scale: temp - 0.2});
  }
  if(Q.inputs['F']) {
    this.destroy();
  }
  if(this.p.landed > 0 && Q.inputs['up']) {
    this.p.vy = this.p.jumpSpeed;
    this.p.landed = -dt;

  }
  this.p.landed -= dt;

  if(this.p.follow) {
    var distance = this.p.Player.p.x - this.p.x;
    if(Math.sqrt(Math.pow(Math.abs(this.p.Player.p.x - this.p.x),2) + Math.pow(Math.abs(this.p.Player.p.y - this.p.y),2)) > 10*this.p.follow_distance) {
      this.p.x = this.p.Player.p.x;
      this.p.y = this.p.Player.p.y;
      this.p.vy = 0;
    }

    if (distance > this.p.follow_distance) {
    /* Jumps if > 200 distance away
    if (this.p.landed > 0 && distance > 200) {
      this.p.vy = this.p.jumpSpeed;
      this.p.landed = -dt;
    } 
    */

    this.p.direction = 'right';
    this.p.vx = this.p.speed;
  } else if (distance < -this.p.follow_distance) {
    this.p.direction = 'left';
    this.p.vx = -this.p.speed;
  } else if (!this.p.move) {
    this.p.vx = 0;
    }
  }


  if ((this.p.move && (this.p.x - this.p.startX > 200)) || (Math.abs(dt - this.p.move_timer)) > 1) { //done moving or tried to move for 1 second
    this.p.not_moving = true;
    this.p.move = false;
    this.p.wait = false;
    this.p.vx = 0;
    this.p.deploying = false;
    deploy_command = 0;
    console.log("dt: " + dt);
    console.log("move_timer: " + this.p.move_timer);
    this.p.move_timer = 0;
    this.p.move_timer_start = false;

  }


  if(this.p.deploy) {
    var deploy_command = 0; 
    if(!this.p.deploying) {
      if(this.p.queue.length != 0) {
          deploy_command = this.p.queue.shift(); //CAUTION: using queue.shift() is O(n) instead of O(1)
          this.p.deploying = true;
          console.log("deploying: " + deploy_command);
        } else {
          deploy_command = 0;
        }
      } 
      if (this.p.deploying) {
        //console.log("deploying");

        if(deploy_command == 1) { // 1 = walk
          this.p.move = true;
          console.log("deployed1");
          if(this.p.move && this.p.not_moving) {
            this.p.startX = this.p.x;
            console.log("starting x: " + this.p.startX);
            this.p.move_timer = 0;
            this.p.move_timer_start = true;
            console.log("initialized move timer: " + this.p.move_timer);
            this.p.not_moving = false;
          }

          if(this.p.move && (this.p.x - this.p.startX < 200)) {
            this.p.vx = 100;
          } else if (this.p.move && (this.p.x - this.p.startX > 200)) { //done moving
            this.p.not_moving = true;
            this.p.move = false;
            this.p.wait = false;
            this.p.vx = 0;
            this.p.deploying = false;
            console.log("done moving at position: " + this.p.x);
            deploy_command = 0;
          }
        }

        else if(deploy_command == 2 && this.p.landed > 0) { // 2 = jump
          console.log("deployed2");
          this.p.vy = this.p.jumpSpeed;
          this.p.landed = -dt;
          this.p.deploying = false;
          deploy_command = 0;
        }

        else if (deploy_command == 3) { // 3 = toggle_follow 
          console.log("deployed3");
          this.p.follow = !this.p.follow;
          this.p.deploying = false;
          deploy_command = 0;
        }
      }
    }
  this.playAnimation(this.p.vx, this.p.direction);
  global_Pet = this;
  }
});


Q.Sprite.extend("Throwable", {
  init: function(p) {
    this._super(p, {
      sheet: 'cat',
      sprite: 'cat',
      z:3,
      type:0x00,
      picked: false,
      pickup_radius: 20,
      hold_height: 70,
      throw_speed: 600,
      throw_angle:0,
      collisionmask: Q.SPRITE_NONE,
      type: Q.SPRITE_NONE,

    });
    this.add('2d, animation');
    this.p.gravityOn = true;
    this.on("bump.bottom",function(collision) {
      this.p.gravity = 1;
      
      if(this.p.vx > 0) {
        this.p.vx -= 20 + (this.p.vx/4);
        this.p.vy = -(this.p.vx/2);
      }
      if(this.p.vx < 0) {
        this.p.vx += 20 + (-this.p.vx/4);
        this.p.vy = (this.p.vx/2);
      }
      if(Math.abs(this.p.vx) < 20) {
        this.p.vx = 0;
      }

      

    });
    this.on("bump.right",function(collision){
      if(this.p.picked) {
        global_Holding = false;
      }
      if (this.p.testbreak == true) {
        this.play("vase_break");
      }
      this.p.picked = false;
      this.p.gravityOn = true;
      
      this.p.z = 3;
    });
    this.on("bump.left",function(collision){
      if(this.p.picked) {
        global_Holding = false;
      }
      if (this.p.testbreak == true) {

        this.play("vase_break");
        
      }
      this.p.picked = false;
      this.p.gravityOn = true;
      
      this.p.z = 3;
    });

  },
  step: function(dt) {
    if(this.p.testbreak && this.p.animation == "vase_break" && this.p.animationFrame == 2) {
          console.log("anim3");
          this.destroy();
    }
    if(this.p.sheet == 'blob') {
      this.play('blob_right');
    } else if (this.p.sheet == 'vase_break') {
      this.p.testbreak = true;
    } else {
      this.p.testbreak = false;
    }

    if(this.p.vx == 0) {
      this.p.thrown = false;
      this.p.type = Q.SPRITE_NONE;
      this.p.collisionmask = Q.SPRITE_NONE;
    }
    if (Math.abs(this.p.x - global_Player.p.x) < this.p.pickup_radius && (Math.abs(this.p.y - global_Player.p.y) < 110)) {
      if (Q.input_release['S'] && !this.p.picked && !global_Holding) {
        this.p.picked = true;
        global_Holding = true;
        this.p.gravityOn = false;
        this.p.z = 5;
        Q.input_release['S'] = false;
        console.log("picked up");
      }
      //console.log("within range");

    }
    if(this.p.thrown) {
      this.p.angle += this.p.throw_angle;
    }
    if(this.p.picked && global_Holding === true) {
      this.p.x = global_Player.p.x;
      this.p.y = global_Player.p.y - this.p.hold_height;
      //console.log(this.p.x);
      //console.log("player:" + global_Player.p.x);
      if (Q.input_release['S']) { // THROWN
        if(global_Player.p.direction == 'right') {
          this.p.vx = this.p.throw_speed;
        } else { //facing left
          this.p.vx = -this.p.throw_speed;
        }
        this.p.collisionmask = SPRITE_ENEMY;
        this.p.type = Q.SPRITE_FRIENDLY;
        this.p.thrown = true;
        this.p.vy = -100;
        this.p.picked = false;
        global_Holding = false;
        this.p.gravityOn = true;
        this.p.gravity = 0.8;  
        this.p.z = 3;
        Q.input_release['S'] = false;
        console.log("test2");
      }

    } else if (this.p.picked && global_Holding === false) {
      console.log("test1");
      this.p.picked = false;
      this.p.gravityOn = true;
      this.p.z = 3;
    }

    



  }
});

Q.Throwable.extend("Cat", {
  init: function(p) {
    this._super(p, {
      sheet: 'cat',
      sprite: 'cat',
    });
  }
});


// ## Tower Sprite
// Sprites can be simple, the Tower sprite just sets a custom sprite sheet
Q.Sprite.extend("Tower", {
  init: function(p) {
    this._super(p, { 
      sheet: 'door', 
      sprite:'door', 
      z:3, 
      scale: 1.3, 
      type:0x00, 
      level:"level1", 
      data:"tutorial_00.tmx",
      sidebar:"#part2"
    });
  },
  step: function(dt) {
    this.p.angle += rotation_speed;
    if(global_Player && Math.abs(this.p.x - global_Player.p.x) < 30) {
      console.log("within range");
      if(Q.inputs['down']) {
        console.log("down pressed");
        this.p.down = true;
      } 
      if(this.p.down) {
        if(Q.input_release['down']) {
          console.log("released RELEASEDDDDDDDDDDDD");
          Q.input_release['down'] = false;
          moveScene(this.p.level, this.p.data, this.p.sidebar);
          
          this.p.down = false;
        }
      }
      

    }
    
    if(Q.input_release['down']) {
      Q.input_release['down'] = false;
    }
    
  }
});

Q.Sprite.extend("Portal", {
  init: function(p) {
    this._super(p, { 
      sheet: 'door',
      sprite:'door',
      z:3,
      scale: 1,
      down: false,
      type: 0x00,
      level:"level0",
      data:"level00.tmx",
      sidebar:"#paragraph1"
      });
  },
  step: function(dt) {
    if(Math.abs(this.p.x - global_Player.p.x) < 30) {
      if(Q.inputs['down']) {
        this.p.down = true;
      } 
      if(this.p.down) {
        if(Q.input_release['down']) {
          Q.input_release['down'] = false;
          moveScene(this.p.level, this.p.data, this.p.sidebar);
          
          //this.destroy();
          
          this.p.down = false;
        }
      }
      

    }
    
    
    
  }
});



var moveScene = function(level,data,target) {
  Q.clearStages();
  Q.stageScene(level,1,{next:false, prev:true});
  Q.stageScene("HUD",2, {level:data});
  updateSidebar(target);
  
};

//gate needs fixing

Q.Sprite.extend("Gate", {
  init: function(p) {
    this._super(p, {
      sheet:'gate',
      sprite:'gate',
      open: false,
      z: 3,
      w:28,
      type: Q.SPRITE_NONE,

    });
    this.add('animation');
    this.on("bump.left", function(collision) {
      if(collision.obj.isA("Player")) { 
        if(!this.p.open) {
          collision.obj.p.vx = -collision.impact;
        } else {
          this.p.type = 0;
        }
        

      }
  });

  },

step: function(dt) {
  //console.log(this.p.type);
  //console.log(this.p.type && global_Player.p.collisionMask);

  if (this.p.open === true) {
    //this.off('hit');
   //console.log("off");
    //this.p.collisionMask = 64;
    //this.p.type = Q.SPRITE_DEFAULT;
    console.log("open!!");
  } else if (this.p.open === false) {
    var entity = this,
      p = entity.p,
      magnitude = 0;

      /* temp
      col.impact = 0;
      var impactX = Math.abs(p.vx);
      var impactY = Math.abs(p.vy);

      p.x -= col.separate[0];
      p.y -= col.separate[1];

      // Top collision
      if(col.normalY < -0.3) { 
        if(p.vy > 0) { p.vy = 0; }
        col.impact = impactY;
        entity.trigger("bump.bottom",col);
      }
      if(col.normalY > 0.3) {
        if(p.vy < 0) { p.vy = 0; }
        col.impact = impactY;

        entity.trigger("bump.top",col);
      }

      if(col.normalX < -0.3) { 
        if(p.vx > 0) { p.vx = 0;  }
        col.impact = impactX;
        entity.trigger("bump.right",col);
      }
      if(col.normalX > 0.3) { 
        if(p.vx < 0) { p.vx = 0; }
        col.impact = impactX;

        entity.trigger("bump.left",col);
      }
      */

  }

  
},

hit: function() {
  if (!this.p.open) {
    this.trigger('collision');
  }
}
});


Q.Sprite.extend("Button", {
  init: function(p) {
    this._super(p, {
      sheet:'button',
      sprite:'button',
      gate: 0,
      frame:0,
      

    });
    this.add('2d');
  },
  step: function(dt) {
    if(Math.abs(this.p.x - global_Player.p.x) < 50 && Math.abs(this.p.y - global_Player.p.y) < 80) {
      if(this.p.gate.p && Q.input_release['R']) {
        if(this.p.gate.p.open) {
          this.p.gate.p.open = false;
          this.p.gate.play("gate_close");
          this.p.frame = 0;
          //this.p.gate.on('hit',this.p.gate,'collision');
        } else {
          this.p.gate.p.open = true;
          this.p.gate.p.h = 150;
          this.p.gate.p.cy = 50;
          this.p.gate.play("gate_open");
          //this.p.gate.off('hit');
          this.p.frame = 1;
        }
        Q.input_release['R'] = false;
      }
    } 
  }

})



Q.UI.Text.extend("nameplate", {
  init: function(p) {
    this._super(p, {
      label: "MyName",
      size: 10,
      color: "black",
      family: "Tahoma",
      bubble: 0,
      x: 0,          
      y: 0            
    });
  },
  step: function(dx) {
    

  
    
      

    if (Q.inputs['fire'] || Q.buttonPress) {
      try {
        runCode();
        //var prog = editor.getValue();
        //var module = Sk.importMainWithBody("<stdin>", false, prog);
        //var name = module.tp$getattr('name');
        //var myName = name.v;
        Q.buttonPress = false;
      } catch(e) {
        console.log(e);
      }
      if (myName) {
        this.p.label = myName;
        this.calcSize();
        this.p.bubble.fit(2,5);
      }
    }
  }

  
});



/* 
Currently unused

function setName(g) {
      var sprite = g;
      console.log(sprite.p.label);
      var prog = editor.getValue();
      var module = Sk.importMainWithBody("<stdin>", false, prog);
      var name = module.tp$getattr('name');
      var myName = name.v;
      if (myName) {
        console.log("myName:" + myName)
        sprite.p.label = myName;
        sprite.calcSize();
        sprite.p.bubble.fit(2,5);
      }
    };
*/



Q.UI.Button.extend("multi_chat_bubble", {
  init: function(p) {
    this._super(p, {
      label: "default label",
      textpart: new Array("Default first", "Default second"),
      current: 0,
      max: 1,
      fill: "white",
      highlight: "white",
      border: 2,
      height_margin: 5,
      width_margin: 5,
      x: 0,
      y: -60,
      z: 2});
    this.p.max = this.p.textpart.length - 1;
    console.log("made multi chat button");
  }
});


Q.UI.Container.extend("chat_bubble", {
  init: function(p) {
    this._super(p, {
      fill: "white",
      border: 2,
      insideText: 0,
      height_margin: 5,
      width_margin: 5,
      x: 0,
      y: -60,});
    this.on('touchEnd');
  },
  touchEnd: function(touch) {
    this.trigger('click');
    console.log('touched');

    this.p.insideText.touch();
  },
  step: function(dt) {
    if (Q.inputs['O']) {
      this.hide();
    }
    if (Q.inputs['P']) {
      this.p.hidden = false;
    }

  }
});



Q.UI.Text.extend("multi_text", {
  init: function(p) {
    this._super(p, {
      label: 'Default first label',
      textpart: new Array("Welcome to Codex.","To get started, please give yourself a name.","for more instructions, refer to the sidebar on the right"),
      current: 0,
      max: 0,
      timer: 0,
      allowNext: false,
      delay: 500,
      size: 11,
      family: "Tahoma",
      weight: 300,
      color: 'black',
      bubble: 0,
      x: 0,          
      y: 0            
    });
    this.add('touch');
    this.on('touch');
    this.p.max = this.p.textpart.length - 1;
    
  },
  touch: function(touch) {
    if (this.p.current < this.p.max) {
      this.p.current += 1;
    } else {
      this.p.current = 0;
    }
    this.p.label = this.p.textpart[this.p.current];
    this.calcSize();
    this.p.bubble.fit(this.p.bubble.p.height_margin,this.p.bubble.p.width_margin);
  },
  step: function(dx) {
    if (debug) {
      console.log(this.p.timer);
    }
    this.p.timer += dx;
    if (this.p.timer > 0.25) {
      this.p.allowNext = true;
    }
    if (Q.inputs['down'] && this.p.allowNext == true) {
      if (this.p.current < 2) {
        this.p.current += 1;
      } else {
        this.p.current = 0;
      }
      this.p.label = this.p.textpart[this.p.current];
      this.calcSize();
      this.p.bubble.fit(this.p.bubble.p.height_margin,this.p.bubble.p.width_margin);
      this.p.allowNext = false;
      this.p.timer = 0;
    }


  }
});

Q.Sprite.extend("NPC", {
  init: function(p) {
    this._super(p, {
      sheet:'testgirl',
      sprite:'testgirl',
      z:3,});
    this.add('2d');
  }
});
// ## Enemy Sprite
// Create the Enemy class to add in some baddies
Q.Sprite.extend("Enemy",{
  init: function(p) {
    this._super(p, { sheet:'frog', sprite:'frog', vx: 100, z:3, type: 0x05, collisionMask:Q.SPRITE_DEFAULT});

    // Enemies use the Bounce AI to change direction 
    // whenver they run into something.
    this.add('2d, aiBounce, animation');

    // Listen for a sprite collision, if it's the player,
    // end the game unless the enemy is hit on top
    this.on("bump.left, bump.bottom",function(collision) {
      if(collision.obj.isA("Player")) { 
        //Q.stageScene("endGame",1, { label: "You Died" }); 
        //collision.obj.destroy();
        collision.obj.p.health -= 1;
        collision.obj.p.vx = -collision.impact * 6;

      }
    });
      this.on("bump.right",function(collision) {
      if(collision.obj.isA("Player")) { 
        //Q.stageScene("endGame",1, { label: "You Died" }); 
        //collision.obj.destroy();
        collision.obj.p.health -= 1;
        collision.obj.p.vx = collision.impact * 6;

      }
    });

    // If the enemy gets hit on the top, destroy it
    // and give the user a "hop"
    this.on("bump.top",function(collision) {
      if(collision.obj.isA("Player")) { 
        this.destroy();
        collision.obj.p.vy = -300;
      }
    });
  },
  step: function(dx) {
    if (this.p.vx > 0) {
      this.play("frog_right");
    } else {
      this.play("frog_left");
    }
  }
});

Q.Sprite.extend("Blob",{
  init: function(p) {
    this._super(p, {
      sheet:'blob',
      sprite:'blob',
      vx: 50,
      z:3,
      maxvx: 200,
      Player:0
      });

    // Enemies use the Bounce AI to change direction 
    // whenver they run into something.
    this.add('2d, aiBounce, animation');

    // Listen for a sprite collision, if it's the player,
    // end the game unless the enemy is hit on top
    this.on("bump.left,bump.right,bump.bottom",function(collision) {
      if(collision.obj.isA("Player")) { 
        //collision.obj.destroy(); this kills the player
        addProgress(10);
        this.destroy();
        
      }
    });

    // If the enemy gets hit on the top, destroy it
    // and give the user a "hop"
    this.on("bump.top",function(collision) {
      if(collision.obj.isA("Player")) { 
        this.destroy();
        collision.obj.p.vy = -300;
      }
    });
  },
  step: function(dx) {
    if (this.p.vx > 0) {
      this.play("blob_right");
    } else {
      this.play("blob_left");
    }

    /*
    if((this.p.Player.p) && Math.abs(this.p.x-this.p.Player.p.x)< 100 && Math.abs(this.p.vx) < this.p.maxvx) {
      this.p.vx = this.p.vx * 1.1
    } 
    */
  }
});


Q.Sprite.extend("Key", {
  init: function(p) {
    this._super(p, {
      sheet:'keys',
      sprite:'keys',
      frame: 1,
      z: 3,
      type: Q.SPRITE_NONE,
    });
  }
});


Q.Sprite.extend("Health", {
  init: function(p) {
    this._super(p, {
      sheet:'health',
      sprite:'health',
      frame: 0,
      x: Q.width - 150,
      y: 20,
      z: 3,
      type: Q.SPRITE_NONE,
    });
    if(global_Player) {
      this.p.frame = global_Player.p.health - 1;
    }
  },
  
  step: function(dt) {
    if(global_Player) {
      this.p.frame = global_Player.p.health - 1;
    }
  }

});

Q.scene("level0",function(stage) {

  
  


  // Add in a repeater for a little parallax action
  stage.insert(new Q.Repeater({ asset: "background-wall.png", speedX: 0.5, speedY: 0.5, z:0 }));

  // Add in a tile layer, and make it the collision layer
  stage.collisionLayer(new Q.TileLayer({
    z:1,
   dataAsset: 'level00.tmx',
   sheet:     'tiles',
   
    }));
  stage.insert(new Q.Command({x:10,y:10}));
  stage.insert(new Q.Key({x:672, y:263, frame: 0}));
  stage.insert(new Q.Key({x:1080, y:118, frame:1}));
  

  var portal = stage.insert(new Q.Tower({ x: 1080, y:58 }));
  
  stage.options.prev_spawnX = portal.p.x;
  stage.options.prev_spawnY = portal.p.y - 30;



  // Create the player and add them to the stage
  var girl = stage.insert(new Q.NPC({x:300, type:0x01}));
  if(stage.options.next) {
    var player = stage.insert(new Q.Player({x:stage.options.next_spawnX, y:stage.options.next_spawnY}));
  } else if (stage.options.prev) {
    var player = stage.insert(new Q.Player({x:stage.options.prev_spawnX, y:stage.options.prev_spawnY}));
  } else { 
    var player = stage.insert(new Q.Player());
  }
  var pet = stage.insert(new Q.Pet({Player:player, x: 50}));

  stage.insert(new Q.Throwable({x:672, y:-50, sheet:'blob', sprite:'blob', hold_height:60}));
  stage.insert(new Q.Throwable({x:800, y:-50, sheet:'vase_break', sprite:'vase_break', throw_speed: 500, hold_height:65, h:32, cy:16}));
  stage.insert(new Q.Throwable({x:900, y:-50, sheet:'redvase2', sprite:'redvase2', throw_speed: 800, hold_height:65}));
  stage.insert(new Q.Throwable({x:1000, y:-100, sheet:'bluevase', sprite:'bluevase', throw_speed: 500, hold_height:65, throw_angle:10}));
  stage.insert(new Q.Throwable({x:1050, y:-100, sheet:'bluevase2', sprite:'bluevase2', throw_speed: 500, hold_height:65}));
  stage.insert(new Q.Throwable({x:700, y:-50, sheet:'television', sprite:'television', throw_speed: 300, hold_height:65}));
  
  var gate1 = stage.insert(new Q.Gate({x:1860, y:240, open:false}));
  //var gate2 = stage.insert(new Q.Gate({x:1860, y:140, open:false, type:0x01, collisionMask:0x63}));
  stage.insert(new Q.Button({x:1700, y:220, gate:gate1}));


  speechbubble = stage.insert(new Q.chat_bubble({
    fill: "white",
    border: 2,
    width_margin: 5,
    height_margin: 5,
    x: 0,
    y: -60}), player);


/* not working
  speechbubble = stage.insert(new Q.multi_chat_bubble({
    textpart: new Array("Test speech bubble\nSecond line", "speech bubble test\npage two", "speech part 3")
  }, function() {
      if (this.p.current < this.p.max) {
        this.p.current += 1;
      } else {
        this.p.current = 0;
      }
      this.p.label = this.p.textpart[this.p.current];
      this.calcSize();
      this.fit(2,5);
}), player);
*/

  petbubble = stage.insert(new Q.chat_bubble({
    fill: "rgba(255,255,255,0.6)",
    border: 2,
    width_margin: 5,
    height_margin: 20,
    x: 0,
    y: -55}), pet);


  namebubble = stage.insert(new Q.chat_bubble({
    fill: "white",
    border: 1,
    radius: 2,
    width_margin: 5,
    height_margin: 5,
    x: 0, 
    y: 65}), player);

  myname = stage.insert(new Q.nameplate({bubble:namebubble}), namebubble);
  pettext = stage.insert(new Q.multi_text({bubble:petbubble}), petbubble);
  petbubble.p.insideText = pettext;


  speechtext = stage.insert(new Q.multi_text({
    bubble: speechbubble,
    label: 'Test speech bubble \n asdf',
    textpart: new Array("Test speech bubble \n second line", "Speech bubble test \npage two"),
    
  }), speechbubble);


  speechbubble.p.insideText = speechtext;
  speechbubble.hide();


  speechtext.calcSize();
  myname.calcSize();
  pettext.calcSize();
  namebubble.fit(2,5);
  speechbubble.fit(2,5);
  petbubble.fit(20,5);
  
  /*Q.input.on('right', stage, function(e) {
      player.p.angle += 5;
  });
Q.input.keyboardControls();*/

  // Give the stage a moveable viewport (camera) that follows player
  stage.add("viewport").follow(player);
  

  //stage.insert(new Q.Enemy({ x: 700, y: 0 }));  //this enemy spawn will kill player if afk
  stage.insert(new Q.Enemy({ x: 800, y: 0 }));
  stage.insert(new Q.Enemy({ x: 20, y:150 }));
  stage.insert(new Q.Enemy({ x: 80, y:150 }));

  Q.input.on('J',stage,function(e) {
    stage.insert(new Q.Blob({x:400, y:20, Player:player}));
  });
  
  var blob = stage.insert(new Q.Blob({x:200, y:20, Player:player}));



},
{sort: true});


// ## Level1 scene
// Create a new scene called level 1
Q.scene("level1",function(stage) {

  // Add in a repeater for a little parallax action
  stage.insert(new Q.Repeater({ asset: "background-wall.png", speedX: 0.5, speedY: 0.5, z:0 }));

  // Add in a tile layer, and make it the collision layer
  stage.collisionLayer(new Q.TileLayer({
   dataAsset: 'tutorial_00.tmx',
   sheet:     'tiles' }));


  var portal = stage.insert(new Q.Portal({x: 50, y:260}));
  var next_portal = stage.insert(new Q.Tower({ x: 1170, y: 203, level:"level2", data:"level03.tmx" }));

  
  stage.options.prev_spawnX = portal.p.x;
  stage.options.prev_spawnY = portal.p.y - 30;
  
  stage.options.next_spawnX = next_portal.p.x;
  stage.options.next_spawnY = next_portal.p.y - 30;


  stage.insert(new Q.Blob({x:200, y:20, Player:player}));


  // Create the player and add to stage
  // Todo: load player status from localStorage or database
  if(stage.options.next) {
    var player = stage.insert(new Q.Player({x:stage.options.next_spawnX, y:stage.options.next_spawnY}));
  } else if (stage.options.prev) {
    var player = stage.insert(new Q.Player({x:stage.options.prev_spawnX, y:stage.options.prev_spawnY}));
  } else { 
    var player = stage.insert(new Q.Player());
  }
  



  // Give the stage a moveable viewport that follows player
  stage.add("viewport").follow(player);


  stage.insert(new Q.Enemy({ x: 700, y: 0 }));
  stage.insert(new Q.Enemy({ x: 800, y: 0 }));


  

},{sort: true});


Q.scene("level2",function(stage) {

  // Add in a repeater for a little parallax action
  stage.insert(new Q.Repeater({ asset: "background-wall.png", speedX: 0.5, speedY: 0.5, z:0 }));

  // Add in a tile layer, and make it the collision layer
  stage.collisionLayer(new Q.TileLayer({
   dataAsset: 'level03.tmx',
   sheet:     'tiles' }));


  var portal = stage.insert(new Q.Portal({x: 50, y:1700, level:"level1", data:"level02.tmx"}));
  var next_portal = stage.insert(new Q.Tower({ x: 1185, y: 1704 }));

  
  stage.options.prev_spawnX = portal.p.x;
  stage.options.prev_spawnY = portal.p.y - 30;
  
  stage.options.next_spawnX = next_portal.p.x;
  stage.options.next_spawnY = next_portal.p.y - 30;


  stage.insert(new Q.Blob({x:200, y:20, Player:player}));


  // Create the player
  if(stage.options.next) {
    var player = stage.insert(new Q.Player({x:stage.options.next_spawnX, y:stage.options.next_spawnY}));
  } else if (stage.options.prev) {
    var player = stage.insert(new Q.Player({x:stage.options.prev_spawnX, y:stage.options.prev_spawnY}));
  } else { 
    var player = stage.insert(new Q.Player());
  }
  

  stage.add("viewport").follow(player);
  stage.insert(new Q.Enemy({ x: 700, y: 0 }));
  stage.insert(new Q.Enemy({ x: 800, y: 0 }));

  

},{sort: true});

rotation_speed = 0;





var text2 = ''
var myName = ''
function outf(text) {
  text = text.replace(/</g, '&lt;');
  text2 = text2 + text;
}


function runCode() {
  try {
    var prog = editor.getValue();
    Sk.pre = "output";
    Sk.configure({output:outf});
    var module = Sk.importMainWithBody("<stdin>", false, prog);
    
    /*Do ALL the variable grabbing here
    reason: everytime you grab & translate, it runs the body of code
    */

    //sets myName to the 'name' provided
    var name = module.tp$getattr('name');
    if (typeof name != 'undefined') {
      myName = name.v;
    }
    //var rot_speed = module.tp$getattr('rotation_speed');
    //rotation_speed = rot_speed.v;
    return;
  } catch (e) {
    alert(e);
  }
}


Q.scene('HUD', function(stage) {
  var level = stage.options.level;
  stage.insert(new Q.MinimapLayer({
    z:5,
    x: 20, 
    y: 20,
    dataAsset:stage.options.level,
    tileW:4,
    tileH:4,
    type:0,
    sheet: 'minimap'
  }));

  stage.insert(new Q.Health());
});

// To display a game over / game won popup box, 
// create a endGame scene that takes in a `label` option
// to control the displayed message.
Q.scene('endGame',function(stage) {
  var container = stage.insert(new Q.UI.Container({
    x: Q.width/2, y: Q.height/2, fill: "rgba(0,0,0,0.5)"
  }));

  




  var button = container.insert(new Q.UI.Button({ x: 0, y: 0, fill: "#CCCCCC",
    label:"Next"}));         
  var label = container.insert(new Q.UI.Text({x:10, y: -10 - button.p.h, 
   label: stage.options.label }));
  // When the button is clicked, clear all the stages
  // and restart the game.
  button.on("click",function() {
    Q.clearStages();
    Q.stageScene('level1');
    Q.stageScene('HUD',2,{level:'tutorial_00.tmx'})
  });

  // Expand the container to visibily fit it's contents
  // (with a padding of 20 pixels)
  container.fit(20);
});

// ## Asset Loading and Game Launch

Q.load(", tutorial_00.tmx, button.png, button.json, gate.png, gate.json, level03.tmx, vase_break.png, vase_break.json, health.png, health.json, throwable.png, throwable.json, blob.png, blob.json, girl.png, testgirl.png, girl.json, door.png, door.json, sprites.png, minimaptile.png, frog.png, frog.json, level00.tmx, level02.tmx, hide.tmx, cat.png, cat.json, sprites.json, animation.png, sprites2.json, level.json, level00.json, tiles.png, background-wall.png, keys.png, keys.json", function() {

  Q.sheet("tiles","tiles.png", { tileW: 24, tileH: 24 });
  Q.sheet("minimap","minimaptile.png", {tileW:4, tileH:4});
  Q.compileSheets("frog.png", "frog.json");
  Q.compileSheets("blob.png", "blob.json");
  Q.compileSheets("health.png", "health.json");
  Q.sheet("testgirl", "testgirl.png", {tileW:48, tileH: 96});
  Q.compileSheets("vase_break.png", "vase_break.json");
  Q.compileSheets("sprites.png","sprites.json");
  Q.compileSheets("throwable.png", "throwable.json");
  Q.compileSheets("animation.png", "sprites2.json");
  Q.compileSheets("cat.png", "cat.json");
  Q.compileSheets("keys.png", "keys.json");
  Q.compileSheets("door.png", "door.json");
  Q.compileSheets("girl.png", "girl.json");
  Q.compileSheets("gate.png", "gate.json");
  Q.compileSheets("button.png", "button.json");

  // stageScene to run the game
  Q.stageScene("level0",1,{next:false, prev:false});
  Q.stageScene("HUD",2, {
    level:'level00.tmx'
  });
  //audio disabled for now due to size
   //Q.load ("InMyDreams.ogg");
  //Q.audio.play('InMyDreams.ogg',{ loop: true });
}, {
  progressCallback: function(loaded,total) {
    var element = document.getElementById("loading_progress");
    element.style.width = Math.floor(loaded/total*100) + "%";
  }
});


return {
  //getters for "global" variables
  getPlayer: function() {
    return global_Player;
  },

  getPet: function() {
    return global_Pet;
  },

  getCommander: function() {
    return global_Commander;
  }

}
};


window.addEventListener("load", function() {
  window.gameSpace = gameFunction();
});


