function add(x,y){
    return x+y;
}
function substract(x,y){
    return x-y;
}
function multiply(x,y){
    return x*y;
}
function divide(x,y){
    if (y===0){
        return "Division Impossible by 0";
    }
    return x/y;
}

function operate(operator,x,y){
    if (operator==="+"){
        return add(x,y)
    }
    else if (operator==="-"){
        return substract(x,y)
    }
    else if (operator==="*"){
        return multiply(x,y)
    }
    else if (operator==="/"){
        return divide(x,y)
    }
}

