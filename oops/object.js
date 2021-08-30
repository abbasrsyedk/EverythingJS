// //object
// let person = {
//     name: "Abbas",
//     age: 20
// };
// //dot notation
// person.name = "Abbasuuuuuu";
// console.log(person);

// //bracket notation
// person['name'] = "Abbassssssssssss";
// console.log(person);

// //another bracket notation
// let selection = "name";
// person[selection] = "Abbu";
// console.log(person);

function createcircle(radius) {
    return {
        radius: radius,
        draw: function() {
            console.log('draw')
        }
    }
};
const circle = new createcircle(10);
circle['location'] = {x:1};

circle.location = {x:1};

const propertyname = 'center location';
circle[propertyname] = {x:1};

delete circle.location;
delete circle[location];