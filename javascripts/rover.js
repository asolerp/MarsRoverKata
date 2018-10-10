
  var initialWaypoint = {x: 142, y: 42};
  var finalWaypoint = [];
  var dx = 0;
  var dy = 0;
  var x = 0;
  var y = 0;
  var distance = 0;
  var moves = 0;
  var totalTime = 0;
  var xunits = 0;
  var yunits = 0;
  var done = false;
  var rockFound = false;

  var firstForward = true;

  var rover = {x: 142, y: 42, direction: "N"};
  var rover2 = {x: 142, y: 42, direction: "N"};

  var inclinacion = 0;
  var newinclinacion = 0;

  var instrucciones = "";

  var canvas = document.getElementById("myCanvas");

  var ctx = canvas.getContext("2d");
  var ctx2 = canvas.getContext("2d");
  var ctx3 = canvas.getContext("2d");

  var imageMars = new Image();
  imageMars.src = 'images/mars3.jpg';

  var imageRover = new Image();
  imageRover.src = 'images/ship.png';

  var imageRock = new Image();
  imageRock.src = 'images/rock.png';

  var row = [];
  var row2 = [];
  var waypoints = [];
  var rocksWaypoints = [];
  var rocks = [];
  var speed = 3;


  function reload() {
    location.reload();
  }

  function waypointsTerrain() {
    var y = 42;
    for (var r = 0; r < 10 ; r ++) {
      var x = 142;
      for (var z = 0; z < 10 ; z ++) {
        row.push({x,y});
        x = x + 124.1;        
      }
      waypoints.push(row);
      row = [];
      y = y + 57.2;
    }
  }

  function waypointsRocks() {
    var y = 65;
    for (var r = 0; r < 10 ; r ++) {
      var x = 162;
      for (var z = 0; z < 10 ; z ++) {
        row2.push({x,y});
        x = x + 124.1;        
      }
      rocksWaypoints.push(row2);
      row2 = [];
      y = y + 59.2;
    }
  }

  function rockGenerator() {
    
    rocks = [];
    var numberOfRocks = Math.floor(Math.random() * (20 - 5)) + 5;
    
    for (var i = 0; i < numberOfRocks; i ++) {
     
      var x = Math.floor(Math.random() * (10 - 1)) + 1;
      var y = Math.floor(Math.random() * (10 - 1)) + 1;

      var rock = [x,y];
      
      rocks.push(rock);
    }

  }

  function drawMars() {
      ctx.drawImage(imageMars,0,0);
  }

  function drawRocks() {
    for (var i = 0; i < rocks.length; i++) {
      ctx3.drawImage(imageRock, rocksWaypoints[rocks[i][1]][rocks[i][0]]["x"], rocksWaypoints[rocks[i][1]][rocks[i][0]]["y"],50,50);
    }
  }

  function restartRover() {

    document.getElementById("travel").innerHTML = "";

    rover = {x: 142, y: 42, direction: "N"};

    x = 0;
    y = 0;

  }

  function setMovement(direction, move) {

    var direccion = direction;

    if (move == "f") {

      switch(direction) {
  
        case "N":
        initialWaypoint = {x:waypoints[y][x]["x"],y:waypoints[y][x]["y"]};
        y -= 1;
        if ( x >= 0 && y >= 0) {
          checkRock(x,y);
          if (rockFound == false) {
            finalWaypoint = {x:waypoints[y][x]["x"],y:waypoints[y][x]["y"]};
          } else {
            alert("Rock found!");
          }
        } else {
          alert("Out of limits!");
        }
        break;
        case "S":
        initialWaypoint = {x:waypoints[y][x]["x"],y:waypoints[y][x]["y"]};
        y += 1;
        if ( x >= 0 && y >= 0) {
          checkRock(x,y);
            if (rockFound == false) {showRoverStats
              finalWaypoint = {x:waypoints[y][x]["x"],y:waypoints[y][x]["y"]};
            } else {
              alert("Rock found!");
            }
          } else {
            alert("Out of limits!");
          }
        break;
        case "E":
        initialWaypoint = {x:waypoints[y][x]["x"],y:waypoints[y][x]["y"]};
        x += 1;
        if ( x >= 0 && y >= 0) {
          checkRock(x,y);
            if (rockFound == false) {
              finalWaypoint = {x:waypoints[y][x]["x"],y:waypoints[y][x]["y"]};
            } else {
              alert("Rock found!");
            }
          } else {
            alert("Out of limits!");
          }
        break;
        case "W":
        initialWaypoint = {x:waypoints[y][x]["x"],y:waypoints[y][x]["y"]};
        x -= 1;
        if ( x >= 0 && y >= 0) {
          checkRock(x,y);
            if (rockFound == false) {
              finalWaypoint = {x:waypoints[y][x]["x"],y:waypoints[y][x]["y"]};
            } else {
              alert("Rock found!");
            }
          } else {
            alert("Out of limits!");
          }
      }

    } else {

      switch(direction) {
  
        case "N":
        initialWaypoint = {x:waypoints[y][x]["x"],y:waypoints[y][x]["y"]};
        y += 1;
        if ( x >= 0 && y >= 0) {
          checkRock(x,y);
          if (rockFound == false) {
            finalWaypoint = {x:waypoints[y][x]["x"],y:waypoints[y][x]["y"]};
          } else {
            alert("Rock found!");
          }
        } else {
          alert("Out of limits!");
        }
        break;
        case "S":
        initialWaypoint = {x:waypoints[y][x]["x"],y:waypoints[y][x]["y"]};
        y -= 1;
        if ( x >= 0 && y >= 0) {
          checkRock(x,y);
            if (rockFound == false) {showRoverStats
              finalWaypoint = {x:waypoints[y][x]["x"],y:waypoints[y][x]["y"]};
            } else {
              alert("Rock found!");
            }
          } else {
            alert("Out of limits!");
          }
        break;
        case "E":
        initialWaypoint = {x:waypoints[y][x]["x"],y:waypoints[y][x]["y"]};
        x -= 1;
        if ( x >= 0 && y >= 0) {
          checkRock(x,y);
            if (rockFound == false) {
              finalWaypoint = {x:waypoints[y][x]["x"],y:waypoints[y][x]["y"]};
            } else {
              alert("Rock found!");
            }
          } else {
            alert("Out of limits!");
          }
        break;
        case "W":
        initialWaypoint = {x:waypoints[y][x]["x"],y:waypoints[y][x]["y"]};
        x += 1;
        if ( x >= 0 && y >= 0) {
          checkRock(x,y);
            if (rockFound == false) {
              finalWaypoint = {x:waypoints[y][x]["x"],y:waypoints[y][x]["y"]};
            } else {
              alert("Rock found!");
            }
          } else {
            alert("Out of limits!");
          }
      }

    }

   



      if (rockFound == false) {
        showRoverStats();
      }


      dx = finalWaypoint.x - initialWaypoint.x;
      dy = finalWaypoint.y - initialWaypoint.y;
   
      distance = Math.sqrt(dx*dx + dy*dy);
      moves = distance/speed;
 
      xunits = (finalWaypoint.x - initialWaypoint.x)/moves;
      yunits = (finalWaypoint.y - initialWaypoint.y)/moves;
   
      rover = {x:initialWaypoint.x, y:initialWaypoint.y, direction: direccion};
 
      firstForward = false;

  }

  function setDirection(direction) {
    switch(rover.direction) {
      case "N":
      if (direction == "l") {
        newinclinacion = 270;
        inclinacion = 360;
        rover.direction = "W";
      } else {
        newinclinacion = 90;
        inclinacion = 0;
        rover.direction = "E";
      }
      break;
      case "S":
      if (direction == "l") {
        newinclinacion = 90;
        inclinacion = 180;
        rover.direction = "E";
      } else {
        newinclinacion = 270;
        inclinacion = 180;
        rover.direction = "W";
      }
      break;
      case "E":
      if (direction == "l") {
        newinclinacion = 0;
        inclinacion = 90;
        rover.direction = "N";
      } else {
        newinclinacion = 180;
        inclinacion = 90;
        rover.direction = "S";
      }
      break;
      case "W":
      if (direction == "l") {
        newinclinacion = 180;
        inclinacion = 270;
        rover.direction = "S";
      } else {
        newinclinacion = 360;
        inclinacion = 270;
        rover.direction = "N";
      }
    }
  }

  function moveRover () {


    if (moves > 0 ) {
       moves--;
       rover.x += xunits;
       rover.y += yunits;
    } 

    rotateRover(imageRover, rover.x, rover.y,100,100,inclinacion);


  }

  function rotateRover(img, x, y, width, height, deg) {

    var rad = deg * Math.PI / 180;


    ctx2.translate(x + width / 2, y + height / 2);
    ctx2.rotate(rad);
    ctx2.drawImage(img,width / 2 * (-1) ,height / 2 * (-1), width, height);
    ctx2.rotate(rad * (-1));
    ctx2.translate((x + width / 2) * (-1), (y + height / 2) * (-1));

  }

  function turnRover() {

        if (newinclinacion < inclinacion ) {
          if (inclinacion > 270 && inclinacion <= 360) {
            inclinacion--;
          } else if (inclinacion >180 && inclinacion <= 270 ) {
            inclinacion--;
          } else if (inclinacion >90 && inclinacion <= 180) {
            inclinacion--;
          } else if (inclinacion >= 0 && inclinacion <= 90) {
            inclinacion--;
          } else {
            rotateRover(imageRover,rover.x,rover.y,100,100,inclinacion);
          }
        }  else {
          if (inclinacion >= 0 && inclinacion <= 90 ) {
            inclinacion++;
          } else if ( inclinacion >= 90 && inclinacion <= 180 ) {
            inclinacion++;
          } else if (inclinacion >= 180 && inclinacion <= 270) {
            inclinacion++;
          } else if (inclinacion >= 270 && inclinacion <= 360) {
            inclinacion++;
          } else {
            rotateRover(imageRover,rover.x,rover.y,100,100,inclinacion);
          }
        }
  }

  function showRoverStats() {

      var para = document.createElement("p");
      para.classList.add("travelLog");
  
      var node = document.createTextNode("Rover at " + "[" + x + " " + y + "]");
      para.appendChild(node);
  
      var element = document.getElementById("travel");
      element.appendChild(para);

  }

  function checkRock(x,y) {

    for (var i=0; i < rocks.length; i++ ) {

      if (rocks[i][0] === x && rocks[i][1] === y) {
        rockFound = true
      }

    }
  }

  function checkInstruction() {

    var check = 0

    instrucciones = document.getElementById('instructions').value

    for (var i = 0; i < instrucciones.length; i ++) {

      if (instrucciones[i] != 'f' && instrucciones[i] != 'b' && instrucciones[i] != 'r' && instrucciones[i] != 'l') {
        check ++;
      } 
    }

    if (check > 0) {
      return true;
    } else {
      return false;
    }


  }

  function doInstructions() {

    document.getElementById("travel").innerHTML = "";

    rover = {x: 142, y: 42, direction: "N"};

    x = 0;
    y = 0;

    instrucciones = document.getElementById('instructions').value

    var tiempo = 650;

    console.log(checkInstruction());

    if (checkInstruction() === false) {

      for (var i = 0; i < instrucciones.length; i ++) {

        switch(instrucciones[i]) {
          case 'b':
          if (i == 0) {
            switch (rover.direction) {
                  case "N":
                  setMovement("N","b");
                  break;
                  case "S":
                  setMovement("S","b");
                  break;
                  case "E":
                  setMovement("E","b");
                  break;
                  case "W":
                  setMovement("W","b");
            }
          } else {
              setTimeout(function(){    
                switch (rover.direction) {
                  case "N":
                  setMovement("N", "b");
                  break;
                  case "S":
                  setMovement("S", "b");
                  break;
                  case "E":
                  setMovement("E", "b");
                  break;
                  case "W":
                  setMovement("W", "b");
                }
              },tiempo);
              tiempo += 1350;    
          }
          break;
          case 'f':
          if (i == 0) {
            switch (rover.direction) {
                case "N":
                setMovement("N", "f");
                break;
                case "S":
                setMovement("S", "f");
                break;
                case "E":
                setMovement("E", "f");
                break;
                case "W":
                setMovement("W", "f");
            }
          } else {
              setTimeout(function(){    
                switch (rover.direction) {
                  case "N":
                  setMovement("N", "f");
                  break;
                  case "S":
                  setMovement("S", "f");
                  break;
                  case "E":
                  setMovement("E", "f");
                  break;
                  case "W":
                  setMovement("W", "f");
                }
              },tiempo);
              tiempo += 1350;    
          }
          break;
          case 'l':
          if (i == 0) {
            setDirection("l");
            tiempo += 2350;
          } else {
            setTimeout(function(){
              setDirection("l");
            },tiempo);
            tiempo += 3000;
            
          }
          break;
          case 'r':
          if (i == 0) {
            setDirection("r");
            tiempo += 2350;
          } else {
            setTimeout(function(){
              setDirection("r");
            },tiempo);
            tiempo += 3000;
            
          }
 
        }
      
      }
  
    } else {
      alert('Incorrect option!')
    }

    document.getElementById('instructions').value = '';


  }


waypointsTerrain();
waypointsRocks();

setInterval(drawMars,33);
setInterval(drawRocks,33);
setInterval(moveRover,33);
setInterval(turnRover,33);




 