const palindromes = function (a) {
    let b = "";
    a = a.toLowerCase();
    for(let i=0; i<a.length; i++)
    {
        if(a[i]<'a' || a[i]>'z')
            a=a.replace(a[i], '');
    }
    a=a.replaceAll(' ', '');
    for(let i=a.length-1; i>=0; i--)
        b=b.concat(a[i]);
    if(a===b)
        return true;
    else
        return false;
};

// Do not edit below this line
module.exports = palindromes;
