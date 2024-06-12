const removeFromArray = function(myArray, ...nums) {
    for(i = 0; i < nums.length; i++) {
        for(j = 0; j < myArray.length; j++) {
            if (nums[i] === myArray[j]) {
                myArray.splice(j, 1);
                j--;
            }
        }
    }
    return myArray;
};

// Do not edit below this line
module.exports = removeFromArray;
