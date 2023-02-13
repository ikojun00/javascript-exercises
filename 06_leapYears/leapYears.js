//if divisible by 4 => true
//if divisible by 100 => false
//if divisible by 400 => true

const leapYears = function(year) {
    if(year%400 === 0)
        return true;
    else if(year%100 === 0)
        return false;
    else if(year%4 === 0)
        return true;
    else
        return false;
};

// Do not edit below this line
module.exports = leapYears;
