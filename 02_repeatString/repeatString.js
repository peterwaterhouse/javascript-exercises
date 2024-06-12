const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR";
    }
    currentString = "";
    for (i = 0; i < num; i++) {
        currentString = currentString + string;
    }
    return currentString;
};

// Do not edit below this line
module.exports = repeatString;
