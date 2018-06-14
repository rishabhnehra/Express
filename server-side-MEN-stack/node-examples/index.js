let rect = require('./rectangle');

function solveRect(l, b) {
    console.log("STARTED");
    rect(l, b, (err, rectangle) => {
        if (err)
            console.log("ERROR: ", err.message)
        else
            console.log("Perimeter: " + rectangle.perimeter() + "\nArea: " + rectangle.area());
    });
    console.log("PRINT STATEMENT AFTER rect()");
}

solveRect(1,2);
solveRect(5,5);
solveRect(9,9);