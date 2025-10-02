function precedence(ch){

    switch (ch){

        case '+' : 
        case '-' : return 1;
        case '/' :
        case '*' : return 2;
        default: return 0;
    }

}

function doprocess(operant, operator){

    if(operant.items.length < 2 || operator.items.length < 1) return;

    let no1 = operant.pop();
    let no2 = operant.pop();
    let opr = operator.pop();
    let sum;

    switch (opr){

        case '+' : sum = no1 + no2; break;
        case '-' : sum = no2 - no1; break;
        case '*' : sum = no1 * no2; break;
        case '/' : sum = no2 / no1; break;

    }

    operant.push(sum);
}