class Stack {

    constructor (){
        this.items = [];
        this.top = -1;
    }

    //push the elements in the stack;
    push(element){
        this.top++;
        this.items[this.top] = element;
    }

    //pop returns the top most element from the stack;
    pop(){
        let a = this.items[this.top];
        this.top--;
        return a;
    }
    peek(){
        return this.items[this.top];
    }

    isEmpty(){
        return this.top === -1;
    }

}