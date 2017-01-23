function notDefined(message) {
    this.message = message;

    Error.call(this, message);

};

notDefined.prototype = new Error();

try{

    hello();

}catch (e){
    throw new notDefined('Function not defined');
}