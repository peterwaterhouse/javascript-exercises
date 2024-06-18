const palindromes = function (s) {
    stripped = s.replace(/[^A-Za-z0-9]/g, '');
    lowerCase = stripped.toLowerCase();
    rev = lowerCase.split("").reverse().join("");
    if (lowerCase == rev) {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;
