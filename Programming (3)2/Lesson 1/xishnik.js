class Xishnik extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 8;
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
            [this.x + 1, this.y + 1]

        ];
    }
    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);
    }
    move() {
        var newCell = random(this.chooseCell(0));
        var newCell1 = random(this.chooseCell(1));
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
    }
    eat() {
        var grasseaterr = random(this.chooseCell(2));
        if (grasseaterr) {
            var newX = grasseaterr[0];
            var newY = grasseaterr[1];
            matrix[newY][newX] = this.index;
            matrix[this.y][this.x] = 0;
            for (var i in grasseaterArr) {
                if (newX == grasseaterArr[i].x && newY == grasseaterArr[i].y) {
                    grasseaterArr.splice(i, 1);
                    break;
                }

            }
            this.x = newX;
            this.y = newY;
            this.energy += 2;
            if (this.energy >= 9) {
                this.mul();
                this.energy = 8;
            }
        }
        else {

            this.move();
            if (this.energy <= 0) {
                this.die();
            }

        }

    }
    mul() {
        var newCell = random(this.chooseCell(0));
        if (newCell) {
            var newxishnik = new Xishnik(newCell[0], newCell[1], this.index);
            xishnikArr.push(newxishnik);
            matrix[newCell[1]][newCell[0]] = this.index;
        }
    }
    die() {
        matrix[this.y][this.x] = 0;
        for (var i in xishnikArr) {
            if (this.x == xishnikArr[i].x && this.y == xishnikArr[i].y) {
                xishnikArr.splice(i, 1);
            }
        }
    }
}
