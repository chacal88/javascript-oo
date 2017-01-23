/**
 * Created by chacal on 19/01/17.
 */

function Person(){
    this.name = '';
    var age = 0;

    this.getName = function () {
        return this.name;
    };

    this.setName = function (_name) {
        this.name = _name;
    };

    this.getAge = function () {
        return age;
    };

    this.setAge = function (_age) {
        age = _age;
    };
}

var kaue = new Person();
kaue.setAge(3);
kaue.setName('kaue');
console.log(kaue.name);
console.log(kaue.age);
