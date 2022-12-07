//Q1
var count = function () {
    var counter = 0;

    function add() {
        return counter += 1;
    }
    function reset() {
        return counter = 0;
    }

    return {
        add: add,
        reset: reset
    }
};


let obj = count();
console.log("Add of obj: " + obj.add());
console.log("Reset of obj: " + obj.reset());


// Q 2
console.log("Free variable in add() and reset() is counter. Free variable is a variable thats neither declared locally or passed in as a parameter.");

//Q3

function make_adder(inc) {
    var counter = 0;
    return function add() {
        return counter += inc;
    };
}

var add5 = make_adder(5);

add5(); add5(); console.log("make_adder of 5 after 3 calls: " + add5());