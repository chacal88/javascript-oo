function Pen() {
    this.color = '';


    this.getColor = function () {
        return color;
    };
    this.setColor = function (_color) {
        color = _color;
    };
    
}

Pen.manufecturer = 'Bic';

console.log(Pen.manufecturer);

var pen = new Pen();

pen.setColor('black');
console.log(pen.manufecturer);
