const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    }
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return "ERROR";
    }
    largerNum = 0;
    smallerNum = 0;
    if (num1 >= num2) {
        largerNum = num1;
        smallerNum = num2;
    } else {
        largerNum = num2;
        smallerNum = num1;
    }
    totalSum = 0;
    for(i = smallerNum; i<= largerNum; i++) {
        totalSum = totalSum + i;
    }
    return totalSum;
};

// Do not edit below this line
module.exports = sumAll;
