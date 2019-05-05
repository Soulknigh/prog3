class Triceratops extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 7;
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x - 2, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 2, this.y + 2],
            [this.x - 3, this.y - 3],
            [this.x, this.y - 3],
            [this.x + 3, this.y - 3],
            [this.x - 3, this.y],
            [this.x + 3, this.y],
            [this.x - 3, this.y + 3],
            [this.x, this.y + 3],
            [this.x + 3, this.y + 3]

        ];
    }
    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);
    }
    move() {
        var newCell = random(this.chooseCell(0));
        var newCell1 = random(this.chooseCell(1));
        var newCell2 = random(this.chooseCell(2));
        var newCell3 = random(this.chooseCell(3));

        if (newCell) {
            this.energy -= 2;
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = this.index;
            this.x = newX;
            this.y = newY;
        }
        else if (newCell1) {
            this.energy -= 2;
            var NewX = newCell1[0];
            var NewY = newCell1[1];
            matrix[this.y][this.x] = 1;
            var a = new Grass(this.x, this.y, 1);
            grassArr.push(a);
            matrix[NewY][NewX] = this.index;
            this.x = NewX;
            this.y = NewY;
        }
        else if (newCell2) {
            this.energy -= 2;
            var NEwX = newCell2[0];
            var NEwY = newCell2[1];
            matrix[this.y][this.x] = 2;
            var a = new GrassEater(this.x, this.y, 2);
            grasseaterArr.push(a);
            matrix[NEwY][NEwX] = this.index;
            this.x = NEwX;
            this.y = NEwY;
        }
        else if (newCell3) {
            this.energy -= 2;
            var NEWX = newCell3[0];
            var NEWY = newCell3[1];
            matrix[this.y][this.x] = 3;
            var a = new Xishnik(this.x, this.y, 3);
            xishnikArr.push(a);
            matrix[NEWY][NEWX] = this.index;
            this.x = NEWX;
            this.y = NEWY;
        }
    }
    eat() {
        var eattrex = random(this.chooseCell(4));

        if (eattrex) {
            var newX = eattrex[0];
            var newY = eattrex[1];
            matrix[newY][newX] = this.index;
            matrix[this.y][this.x] = 0;

            for (var i in trexArr) {
                if (newX == trexArr[i].x && newY == trexArr[i].y) {
                    trexArr.splice(i, 1);
                    break;
                }

            }
            this.x = newX;
            this.y = newY;
        } else {

            this.move();
            if (this.energy <= 0) {
                this.die();
            }

        }

    }

    die() {
        matrix[this.y][this.x] = 0;
        for (var i in triceratopsArr) {
            if (this.x == triceratopsArr[i].x && this.y == triceratopsArr[i].y) {
                triceratopsArr.splice(i, 1);
            }
        }
    }
}
