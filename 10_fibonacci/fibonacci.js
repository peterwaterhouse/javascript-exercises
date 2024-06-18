const fibonacci = function(arg) {
    if (arg < 0) {
        return "OOPS";
    }
    if (arg == 1 || arg == 2) {
        return 1;
    } 
    let num1 = 1;
    let num2 = 1;
    let num3 = 0;
    for (i = 0; i < arg-2; i++) {
        num3 = num2 + num1;
        num1 = num2;
        num2 = num3;
    }
    return num3;
};

// Do not edit below this line
module.exports = fibonacci;
