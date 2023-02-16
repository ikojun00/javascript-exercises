const fibonacci = function(num) {
    let a=[];
    num = parseInt(num);
    if(num === 1 || num === 2)
        return 1;
    else if(num === 0)
        return 0;
    else if(num < 0)
        return "OOPS";
    else
    {
        let n1 = 1, n2 = 1;
        for (let i = 2; i < num; i++) {
            nextTerm = n1 + n2;
            n1 = n2;
            n2 = nextTerm;
        }
    }
    return nextTerm;
};

// Do not edit below this line
module.exports = fibonacci;
