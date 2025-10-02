const display = document.getElementById("display");

function appendtoDisplay(input){
    display.value += input
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = expressionEvaluation(display.value);
    }
    catch(error){
        display.value = "Error!"
    }
}