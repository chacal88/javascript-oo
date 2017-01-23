/**
 * Created by chacal on 19/01/17.
 */

function Person(){
    this.name = '';
    this.age = 0;

    var swim = function () {
        return console.log("I'm swimming");

    };

    this.move = function (canSwim) {

        if(canSwim){
            return swim();
        }

        return console.log("I'm walking");

    };
}

var kaue = new Person();
console.log(kaue);

kaue.move();
kaue.move(true);
