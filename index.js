function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`
}


function wrapAdjective(symbol = '*'){
    const inner = function (adj = special){
        return `You are ${symbol}${adj}${symbol}!`;
    };
    return inner;
}

