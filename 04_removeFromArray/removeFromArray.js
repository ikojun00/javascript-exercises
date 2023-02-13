const removeFromArray = function(array, ...theArgs) 
{
    theArgs = theArgs.sort();
    for (let i = 0; i < array.length; i++) 
    {
        for (let j = 0; j < theArgs.length; j++)
        {
            if (array[i] === theArgs[j]) 
            {
                array.splice(i, 1);
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
