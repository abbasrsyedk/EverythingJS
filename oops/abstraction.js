function Circle(radius){
    this.radiuus = radius;
    this.defaultLocation = {x:0 , y:0};
    let computeoptimumlocation = function(factor){
    }
    //getter
    this.getdefaultLocation = function(){
        return defaultLocation;
    };

    Object.defineProperty(this, 'defaultLocation', {
        get: function() {
            return defaultLocation;
        },
        set: function(value) {
            if (!value.x || !value.y) 
                throw new Error('Invalid location.');
            defaultLocation = value;
        }
    })



    // this.draw = function(){
    //     // let x,y;
    //     computeoptimumlocation(0,1);
    //     console.log('draw'); 
    };


const circle = new Circle(10);
// circle.getdefaultLocation = 1;
// circle.computeoptimumlocation();
// circle.draw();




