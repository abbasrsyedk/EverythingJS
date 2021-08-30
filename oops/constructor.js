//constructor function

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log("draw");
    }
}
const anothercircle = new Circle(2);
anothercircle.draw();

//constructor property constructor

//let x = {};

//let x = new Object();
//new Boolean();
//new Number();
//new String();

