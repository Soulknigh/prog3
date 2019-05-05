// /////////v///////
// class Grass {
//     constructor(x, y, index) {
//         this.x = x;
//         this.y = y;
//         this.index = index;
//         this.multiply = 0;
//         this.directions = [
//             [this.x - 1, this.y - 1],
//             [this.x, this.y - 1],
//             [this.x + 1, this.y - 1],
//             [this.x - 1, this.y],
//             [this.x + 1, this.y],
//             [this.x - 1, this.y + 1],
//             [this.x, this.y + 1],
//             [this.x + 1, this.y + 1]
//         ];

//     }
//     chooseCell(character) {
//         var found = [];
//         for (var i in this.directions) {
//             var x = this.directions[i][0];
//             var y = this.directions[i][1];
//             if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
//                 if (matrix[y][x] == character) {
//                     found.push(this.directions[i]);
//                 }

//             }

//         }
//         return found;

//     }
//     mul() {
//         this.multiply++;
//         var newCell = random(this.chooseCell(0));
//         if (this.multiply >= 3 && newCell) {
//             var newGrass = new Grass(newCell[0], newCell[1], this.index);
//             grassArr.push(newGrass);
//             matrix[newCell[1]][newCell[0]] = 1;
//             this.multiply = 0;
//         }
//     }
// }


// class GrassEater {
//     constructor(x, y, index) {
//         this.x = x;
//         this.y = y;
//         this.index = index;
//         this.energy = 3;
//     }
//     getNewCordinates() {
//         this.directions = [
//             [this.x - 1, this.y - 1],
//             [this.x, this.y - 1],
//             [this.x + 1, this.y - 1],
//             [this.x - 1, this.y],
//             [this.x + 1, this.y],
//             [this.x - 1, this.y + 1],
//             [this.x, this.y + 1],
//             [this.x + 1, this.y + 1]
//         ];
//     }
//     chooseCell(character) {
//         this.getNewCordinates();
//         var found = [];
//         for (var i in this.directions) {
//             var x = this.directions[i][0];
//             var y = this.directions[i][1];
//             if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
//                 if (matrix[y][x] == character) {
//                     found.push(this.directions[i]);
//                 }
//             }
//         }
//         return found;
//     }
//     move() {
//         var newCell = random(this.chooseCell(0));

//         if (newCell) {
//             this.energy -= 2;
//             var newX = newCell[0];
//             var newY = newCell[1];
//             matrix[this.y][this.x] = 0;
//             matrix[newY][newX] = this.index;
//             this.x = newX;
//             this.y = newY;
//         }
//     }

//     eat() {
//         var grass = random(this.chooseCell(1));
//         if (grass) {
//             var newX = grass[0];
//             var newY = grass[1];
//             matrix[newY][newX] = this.index;
//             matrix[this.y][this.x] = 0;

//             for (var i in grassArr) {
//                 if (newX == grassArr[i].x && newY == grassArr[i].y) {
//                     grassArr.splice(i, 1);
//                     break;
//                 }
//             }
//             this.x = newX;
//             this.y = newY;
//             this.energy += 2;
//             if (this.energy >= 8) {
//                 this.mul();
//                 this.energy = 3;
//             }
//         } else {

//             this.move();
//             if (this.energy <= 0) {
//                 this.die();
//             }

//         }

//     }
//     mul() {

//         var newCell = random(this.chooseCell(0));
//         if (newCell) {
//             var grassEater = new GrassEater(newCell[0], newCell[1], this.index);
//             grasseaterArr.push(grassEater);
//             matrix[newCell[1]][newCell[0]] = 2;
//         }
//     }

//     die() {
//         matrix[this.y][this.x] = 0;

//         for (var i in grasseaterArr) {
//             if (this.x == grasseaterArr[i].x && this.y == grasseaterArr[i].y) {
//                 grasseaterArr.splice(i, 1);
//             }
//         }
//     }
// }

// class Xishnik {
//     constructor(x, y, index) {
//         this.x = x;
//         this.y = y;
//         this.index = index;
//         this.energy = 8;
//     }
//     getNewCordinates() {
//         this.directions = [
//             [this.x - 1, this.y - 1],
//             [this.x, this.y - 1],
//             [this.x + 1, this.y - 1],
//             [this.x - 1, this.y],
//             [this.x + 1, this.y],
//             [this.x - 1, this.y + 1],
//             [this.x, this.y + 1],
//             [this.x + 1, this.y + 1]

//         ];
//     }
//     chooseCell(character) {
//         this.getNewCordinates();
//         var found = [];
//         for (var i in this.directions) {
//             var x = this.directions[i][0];
//             var y = this.directions[i][1];
//             if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
//                 if (matrix[y][x] == character) {
//                     found.push(this.directions[i]);
//                 }
//             }
//         }
//         return found;
//     }
//     move() {
//         var newCell = random(this.chooseCell(0));
//         var newCell1 = random(this.chooseCell(1));
//         if (newCell) {
//             this.energy -= 2;
//             var newX = newCell[0];
//             var newY = newCell[1];
//             matrix[this.y][this.x] = 0;
//             matrix[newY][newX] = this.index;
//             this.x = newX;
//             this.y = newY;
//         }
//         else if (newCell1) {
//             this.energy -= 2;
//             var NewX = newCell1[0];
//             var NewY = newCell1[1];
//             matrix[this.y][this.x] = 1;
//             var a = new Grass(this.x, this.y, 1);
//             grassArr.push(a);
//             matrix[NewY][NewX] = this.index;
//             this.x = NewX;
//             this.y = NewY;
//         }
//     }
//     eat() {
//         var grasseaterr = random(this.chooseCell(2));
//         if (grasseaterr) {
//             var newX = grasseaterr[0];
//             var newY = grasseaterr[1];
//             matrix[newY][newX] = this.index;
//             matrix[this.y][this.x] = 0;
//             for (var i in grasseaterArr) {
//                 if (newX == grasseaterArr[i].x && newY == grasseaterArr[i].y) {
//                     grasseaterArr.splice(i, 1);
//                     break;
//                 }

//             }
//             this.x = newX;
//             this.y = newY;
//             this.energy += 2;
//             if (this.energy >= 9) {
//                 this.mul();
//                 this.energy = 8;
//             }
//         }
//         else {

//             this.move();
//             if (this.energy <= 0) {
//                 this.die();
//             }

//         }

//     }
//     mul() {
//         var newCell = random(this.chooseCell(0));
//         if (newCell) {
//             var newxishnik = new Xishnik(newCell[0], newCell[1], this.index);
//             xishnikArr.push(newxishnik);
//             matrix[newCell[1]][newCell[0]] = this.index;
//         }
//     }
//     die() {
//         matrix[this.y][this.x] = 0;
//         for (var i in xishnikArr) {
//             if (this.x == xishnikArr[i].x && this.y == xishnikArr[i].y) {
//                 xishnikArr.splice(i, 1);
//             }
//         }
//     }
// }

// class TRex {
//     constructor(x, y, index) {
//         this.x = x;
//         this.y = y;
//         this.index = index;
//         this.energy = 5;
//     }
//     getNewCordinates() {
//         this.directions = [
//             [this.x - 1, this.y - 1],
//             [this.x + 1, this.y - 1],
//             [this.x + 1, this.y + 1],
//             [this.x - 1, this.y + 1],
//             [this.x - 2, this.y - 2],
//             [this.x + 2, this.y - 2],
//             [this.x + 2, this.y + 2],
//             [this.x - 2, this.y + 2],
//             [this.x - 3, this.y - 3],
//             [this.x + 3, this.y - 3],
//             [this.x + 3, this.y + 3],
//             [this.x - 3, this.y + 3]

//         ];
//     }
//     chooseCell(character) {
//         this.getNewCordinates();
//         var found = [];
//         for (var i in this.directions) {
//             var x = this.directions[i][0];
//             var y = this.directions[i][1];
//             if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
//                 if (matrix[y][x] == character) {
//                     found.push(this.directions[i]);
//                 }
//             }
//         }
//         return found;
//     }
//     move() {
//         var newCell = random(this.chooseCell(0));
//         var newCell1 = random(this.chooseCell(1));
//         var newCell2 = random(this.chooseCell(2));
//         var bigCell = newCell.concat(newCell1, newCell2);
//         var Cells = random(bigCell);
//         console.log(Cells)
//         if (Cells) {
//             var xx = Cells[0]
//             var yy = Cells[1]
//             var vandak = matrix[yy][xx]

//             if (vandak == 0) {
//                 this.energy -= 2;
//                 var newX = newCell[0];
//                 var newY = newCell[1];
//                 matrix[this.y][this.x] = 0;
//                 matrix[newY][newX] = this.index;
//                 this.x = newX;
//                 this.y = newY;
//             }
//             else if (vandak == 1) {
//                 this.energy -= 2;
//                 var NewX = newCell1[0];
//                 var NewY = newCell1[1];
//                 matrix[this.y][this.x] = 1;
//                 var a = new Grass(this.x, this.y, 1);
//                 grassArr.push(a);
//                 matrix[NewY][NewX] = this.index;
//                 this.x = NewX;
//                 this.y = NewY;
//             }
//             else if (vandak == 2) {
//                 this.energy -= 2;
//                 var NEwX = newCell2[0];
//                 var NEwY = newCell2[1];
//                 matrix[this.y][this.x] = 2;
//                 var a = new GrassEater(this.x, this.y, 2);
//                 grasseaterArr.push(a);
//                 matrix[NEwY][NEwX] = this.index;
//                 this.x = NEwX;
//                 this.y = NEwY;
//             }
//         }
//     }
//     eat() {
//         var eatxishnik = random(this.chooseCell(3));

//         if (eatxishnik) {
//             var newX = eatxishnik[0];
//             var newY = eatxishnik[1];
//             matrix[newY][newX] = this.index;
//             matrix[this.y][this.x] = 0;

//             for (var i in xishnikArr) {
//                 if (newX == xishnikArr[i].x && newY == xishnikArr[i].y) {
//                     xishnikArr.splice(i, 1);
//                     break;
//                 }

//             }
//             this.x = newX;
//             this.y = newY;
//             this.energy += 2;
//             if (this.energy >= 10) {
//                 this.mul();
//                 this.energy = 5;
//             }
//         } else {

//             this.move();
//             if (this.energy <= 0) {
//                 this.die();
//             }

//         }

//     }
//     mul() {
//         var newCell = random(this.chooseCell(0));
//         if (newCell) {
//             var newtrex = new TRex(newCell[0], newCell[1], this.index);
//             trexArr.push(newtrex);
//             matrix[newCell[1]][newCell[0]] = this.index;
//         }
//     }
//     die() {
//         matrix[this.y][this.x] = 0;
//         for (var i in trexArr) {
//             if (this.x == trexArr[i].x && this.y == trexArr[i].y) {
//                 trexArr.splice(i, 1);
//             }
//         }
//     }
// }


// class Triceratops {
//     constructor(x, y, index) {
//         this.x = x;
//         this.y = y;
//         this.index = index;
//         this.energy = 7;
//     }
//     getNewCordinates() {
//         this.directions = [
//             [this.x - 1, this.y - 1],
//             [this.x, this.y - 1],
//             [this.x + 1, this.y - 1],
//             [this.x - 1, this.y],
//             [this.x + 1, this.y],
//             [this.x - 1, this.y + 1],
//             [this.x, this.y + 1],
//             [this.x + 1, this.y + 1],
//             [this.x - 2, this.y - 2],
//             [this.x, this.y - 2],
//             [this.x + 2, this.y - 2],
//             [this.x - 2, this.y],
//             [this.x + 2, this.y],
//             [this.x - 2, this.y + 2],
//             [this.x, this.y + 2],
//             [this.x + 2, this.y + 2],
//             [this.x - 3, this.y - 3],
//             [this.x, this.y - 3],
//             [this.x + 3, this.y - 3],
//             [this.x - 3, this.y],
//             [this.x + 3, this.y],
//             [this.x - 3, this.y + 3],
//             [this.x, this.y + 3],
//             [this.x + 3, this.y + 3]

//         ];
//     }
//     chooseCell(character) {
//         this.getNewCordinates();
//         var found = [];
//         for (var i in this.directions) {
//             var x = this.directions[i][0];
//             var y = this.directions[i][1];
//             if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
//                 if (matrix[y][x] == character) {
//                     found.push(this.directions[i]);
//                 }
//             }
//         }
//         return found;
//     }
//     move() {
//         var newCell = random(this.chooseCell(0));
//         var newCell1 = random(this.chooseCell(1));
//         var newCell2 = random(this.chooseCell(2));
//         var newCell3 = random(this.chooseCell(3));

//         if (newCell) {
//             this.energy -= 2;
//             var newX = newCell[0];
//             var newY = newCell[1];
//             matrix[this.y][this.x] = 0;
//             matrix[newY][newX] = this.index;
//             this.x = newX;
//             this.y = newY;
//         }
//         else if (newCell1) {
//             this.energy -= 2;
//             var NewX = newCell1[0];
//             var NewY = newCell1[1];
//             matrix[this.y][this.x] = 1;
//             var a = new Grass(this.x, this.y, 1);
//             grassArr.push(a);
//             matrix[NewY][NewX] = this.index;
//             this.x = NewX;
//             this.y = NewY;
//         }
//         else if (newCell2) {
//             this.energy -= 2;
//             var NEwX = newCell2[0];
//             var NEwY = newCell2[1];
//             matrix[this.y][this.x] = 2;
//             var a = new GrassEater(this.x, this.y, 2);
//             grasseaterArr.push(a);
//             matrix[NEwY][NEwX] = this.index;
//             this.x = NEwX;
//             this.y = NEwY;
//         }
//         else if (newCell3) {
//             this.energy -= 2;
//             var NEWX = newCell3[0];
//             var NEWY = newCell3[1];
//             matrix[this.y][this.x] = 3;
//             var a = new Xishnik(this.x, this.y, 3);
//             xishnikArr.push(a);
//             matrix[NEWY][NEWX] = this.index;
//             this.x = NEWX;
//             this.y = NEWY;
//         }
//     }
//     eat() {
//         var eattrex = random(this.chooseCell(4));

//         if (eattrex) {
//             var newX = eattrex[0];
//             var newY = eattrex[1];
//             matrix[newY][newX] = this.index;
//             matrix[this.y][this.x] = 0;

//             for (var i in trexArr) {
//                 if (newX == trexArr[i].x && newY == trexArr[i].y) {
//                     trexArr.splice(i, 1);
//                     break;
//                 }

//             }
//             this.x = newX;
//             this.y = newY;
//         } else {

//             this.move();
//             if (this.energy <= 0) {
//                 this.die();
//             }

//         }

//     }

//     die() {
//         matrix[this.y][this.x] = 0;
//         for (var i in triceratopsArr) {
//             if (this.x == triceratopsArr[i].x && this.y == triceratopsArr[i].y) {
//                 triceratopsArr.splice(i, 1);
//             }
//         }
//     }
// }
