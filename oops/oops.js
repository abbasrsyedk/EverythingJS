// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     draw: function() {
//         console.log("draw")
//     }
// };

// circle.draw();

//factory function
function createcircle(radius) {
    return {
        radius: radius,
        draw: function() {
            console.log('draw')
        }
    }
};
const circle = createcircle(1);
circle.draw();

