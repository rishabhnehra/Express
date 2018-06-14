let rect = require('./rectangle');

function solveRect(l, b) {
    console.log("The perimeter of rectangle is " + rect.perimeter(l,b) );
    console.log("The area of rectangle is " + rect.area(l,b) );
    console.log("\n");
}

solveRect(1,2);
solveRect(5,5);
solveRect(9,9);