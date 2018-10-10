// Rover Object Goes Here

var roverTerminal = {
  direction: "N",
  xx: 0,
  yy: 0,
  travelLog: [],
  obstacle: false
}

var roverTerminal2 = {
  direction: "N",
  xx: 9,
  yy: 9,
  travelLog: [],
  obstacle: false
}



// ====================== Terreno donde ira el Rover

var terrain = [[ "x", "x", "x", "x", "x", "x", "x", "x", "x", "x"],
               [ "x", "x", "x", "x", "x", "x", "x", "x", "x", "x"],
               [ "x", "x", "x", "x", "x", "x", "x", "x", "x", "x"],
               [ "x", "x", "x", "x", "x", "x", "x", "x", "x", "x"],
               [ "x", "x", "x", "x", "x", "x", "x", "x", "x", "x"],
               [ "x", "x", "x", "x", "x", "x", "x", "x", "x", "x"],
               [ "x", "x", "x", "x", "x", "x", "x", "x", "x", "x"],
               [ "x", "x", "x", "x", "x", "x", "x", "x", "x", "x"],
               [ "x", "x", "x", "x", "x", "x", "x", "x", "x", "x"],
               [ "x", "x", "x", "x", "x", "x", "x", "x", "x", "x"]];

var instruccionesTerminal = "";

var obstacles = [];

// ====================== 

function turnLeft(rover){
  switch (roverTerminal.direction) {
    case "N":
    roverTerminal.direction = "W";
      break;
    case "W":
    roverTerminal.direction = "S";
      break;
    case "S":
    roverTerminal.direction = "E";
      break;
    case "E": 
    roverTerminal.direction = "N";
  }
  console.log("turnLeft was called!");
  console.log("Rover is now facing " + roverTerminal.direction);
}

function turnRight(rover){
  switch (roverTerminal.direction) {
    case "N":
    roverTerminal.direction = "E";
      break;
    case "W":
    roverTerminal.direction = "N";
      break;
    case "S":
    roverTerminal.direction = "W";
      break;
    case "E": 
    roverTerminal.direction = "S";
  }
  console.log("turnRight was called!");
  console.log("Rover is now facing " + roverTerminal.direction);
}

function moveForward(rover){

  var position = [];

  switch (roverTerminal.direction) {
    case "N":
      if ((roverTerminal.yy - 1) < 0 ) {
        console.log("Watch out! Out of limits!")
      } else {
        roverTerminal.yy = roverTerminal.yy - 1;
      }
      break;
    case "W":
      if ((roverTerminal.xx - 1) < 0 ) {
        console.log("Watch out! Out of limits!")
      } else {
        roverTerminal.xx = roverTerminal.xx - 1;
      }
      break;
    case "S":
      if ((roverTerminal.yy + 1) > 9 ) {
        console.log("Watch out! Out of limits!")
      } else {
        roverTerminal.yy = roverTerminal.yy + 1;
      }
      break;
    case "E": 
      if ((roverTerminal.xx + 1) > 9 ) {
        console.log("Watch out! Out of limits!")
      } else {
        roverTerminal.xx = roverTerminal.xx + 1;
      }
  }

  console.log("moveForward was called")


  position = [roverTerminal.xx, roverTerminal.yy];

  checkObstacle(position);

}

function moveBackward(rover){

  var position = [];

  switch (roverTerminal.direction) {
    case "N":
      if ((roverTerminal.yy + 1) < 9 ) {
        console.log("Watch out! Out of limits!")
      } else {
        roverTerminal.yy = roverTerminal.yy + 1;
      }
      break;
    case "W":
      if ((roverTerminal.xx + 1) < 9 ) {
        console.log("Watch out! Out of limits!")
      } else {
        roverTerminal.xx = roverTerminal.xx + 1;
      }
      break;
    case "S":
      if ((roverTerminal.yy - 1) > 0 ) {
        console.log("Watch out! Out of limits!")
      } else {
        roverTerminal.yy = roverTerminal.yy - 1;
      }
      break;
    case "E": 
      if ((roverTerminal.xx - 1) > 0 ) {
        console.log("Watch out! Out of limits!")
      } else {
        roverTerminal.xx = roverTerminal.xx - 1;
      }
  }

  console.log("moveForward was called");
  

  position = [roverTerminal.xx, roverTerminal.yy];

  checkObstacle(position);

}

function checkObstacle(position) {

  for (var i = 0; i < obstacles.length; i ++) {
    if (roverTerminal.xx == obstacles[i][0] && roverTerminal.yy == obstacles[i][1]) {
      console.log("Rover has found an obstacle!");
      roverTerminal.obstacle = true;
    } else {
      roverTerminal.travelLog.push(position);
    }
  }

}


function printPosition (x, y, direction) {

  // Printing obstacles

  obstacles = rocks;

  for (var i = 0; i < obstacles.length; i ++ ) {
    terrain[obstacles[i][1]][obstacles[i][0]] = "o";
  }

  // Printing Rover

  var roverDirectionImage = "";

  switch (direction) {
    case "N":
      roverDirectionImage = "˄"
      break;
    case "W":
      roverDirectionImage = "<"
      break;
    case "S":
      roverDirectionImage = "˅"
      break;
    case "E": 
      roverDirectionImage = ">"
  }

  terrain[y][x] = roverDirectionImage;

  console.log(terrain.join('\n') + '\n\n');
}

function doInstructionsTerminal() {

  instruccionesTerminal = instrucciones;

  console.log("Instrucciones: " + instruccionesTerminal);
  console.log("\n\n");

  for (var i = 0; i < instruccionesTerminal.length; i++) {

    if (rover.obstacle == true ) {
      break;
    }

    console.log(instruccionesTerminal[i]);

    if (instruccionesTerminal[i] !== "f" && instruccionesTerminal[i] !== "b" && instruccionesTerminal[i] !== "r" && instruccionesTerminal[i] !== "l") {

      console.log(instruccionesTerminal[i] + " is not an instruction.");
      break;


    } else {

      switch (instruccionesTerminal[i]) {
        case "f":
          moveForward(rover);
          break;
        case "b":
          moveBackward(rover);
          break;
        case "r":
          turnRight(rover);
          break;
        case "l":
          turnLeft(rover);
    }  
  }

    console.log("Rover is at " + "[" + roverTerminal.xx + "," + roverTerminal.yy + "]" );
    printPosition(roverTerminal.xx, roverTerminal.yy, roverTerminal.direction);
    console.log("\n\n");

  }
}




