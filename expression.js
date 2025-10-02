function expressionEvaluation(){


const operant = new Stack(); // This stack will be used to keep the numbers;
const operator = new Stack(); // This stack will be used to keep the operators;
let exp = display.value;

let size = exp.length; // this will help us to find the total iterations we will have to do;

let i = 0, ch;

while (i < size){

    ch = exp[i]

    if((ch >= '0' && ch <= '9') || ch === '.'){ //this loop initilizes the number finding logic;

        let noStr = "";

        while(i < size && ((exp[i] >= '0' && exp[i] <= '9')) || exp[i] === '.'){
            noStr += exp[i];
            i++;
        }

        operant.push(Number(noStr));
    }

    //Operators

    else if((ch === '+' || ch === '-' || ch === '*' || ch === '/')){ // this will add operators to their stack

        while(!operator.isEmpty() && precedence(ch) <= precedence(operator.peek())){
            doprocess(operant, operator);
        }
        operator.push(ch);
    }

    // Parathensis

    else if(ch === '(') operator.push(ch); // this is used for precedence checking;

    else if(ch === ')'){
        while(!operator.isEmpty() && operator.peek() !== '(') doprocess(operant, operator);
        operator.pop();
    }
    i++;

}

    if(!operator.isEmpty()){                        // is something remains in the stack it will empty it;
        while(!operator.isEmpty()) doprocess(operant, operator);
    }
    return operant.pop();
}