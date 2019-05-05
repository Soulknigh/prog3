///////v/////////

var matrix = [];

var n = 50;
var m = 60;
var side = 10;
var grassArr = [];
var grasseaterArr = [];
var xishnikArr = [];
var trexArr = [];
var triceratopsArr = [];




function setup() {
    for (var y = 0; y < n; y++) {
        matrix[y] = [];
        for (var x = 0; x < m; x++) {
            var ran = Math.floor(random(0, 6));
            matrix[y][x] = ran;
        }

    }
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                var ge = new GrassEater(x, y, 2);
                grasseaterArr.push(ge);
            }
            else if (matrix[y][x] == 3) {
                var xs = new Xishnik(x, y, 3);
                xishnikArr.push(xs);
            }
            else if (matrix[y][x] == 4) {
                var tr = new TRex(x, y, 4);
                trexArr.push(tr);
            }
            else if (matrix[y][x] == 5) {
                var as = new Triceratops(x, y, 5);
                triceratopsArr.push(as);
            }
        }
    }
}



function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("blue");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("orange");
                rect(x * side, y * side, side, side);
            }
        }
    }
    for (var i in grassArr) {
        grassArr[i].mul();
    }
    for (var i in grasseaterArr) {
        grasseaterArr[i].eat();
    }
    for (var i in trexArr) {
        trexArr[i].eat();
    }
    for (var i in xishnikArr) {
        xishnikArr[i].eat();
    }
    for (var i in triceratopsArr) {
        triceratopsArr[i].eat();
    }
}






























