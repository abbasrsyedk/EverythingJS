function Circle(radius) {
        this.radius = radius,
        this.draw = function() {
            console.log('draw')
        }
    }
    const circle = new Circle(10);
//to enumerate all the mmebers in a object use for in loop
    for(let key in circle) {
        if(typeof circle[key] !== 'function')
            console.log(key, circle[key])

    }
    //to get alll keys in object 
    const keys = Object.keys(circle);
    console.log(keys);
    //to get properties
    if('radius' in circle)
        console.log("circle has radius")


