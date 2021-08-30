//creating a ifelseifelse condition to 
//display greeting according to the time

let time = 21;

if (time >= 6 && time <= 12) {
    console.log("Good Morning");
} else if (time > 12 && time <= 18) {
    console.log('Good Afternoon');
} else if (time > 18 && time <= 20) {
    console.log("Good Evening");
} else if (time > 20 && time <= 24 || time >= 1 && time < 6) {
    console.log("Good night");
} else
    console.log("invalid time");