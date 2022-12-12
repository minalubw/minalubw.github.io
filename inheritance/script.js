//-----QUESTION #1------//
String.prototype.filter = function(...str){
    let words = this.split(" ");
    let st = "";
    for (let index = 0; index < words.length; index++) {
        let banned = false;
        for (let i = 0; i < str.length; i++) {
            if(words[index] === str[i]){
                banned = true;
            }
        }
        if(!banned){
            if(index == words.length-1){
                st += words[index];
            }
            else{
                st += words[index] + " ";
            }
        }
    }
    return st;
};

console.log("This house is not nice!".filter("not", "is"));

//-----QUESTION #2------//
Array.prototype.bubbleSort = function(){
    for (let i = 0; i < this.length -1; i++) {
        for (let j = 0; j < this.length - i - 1; j++) {
            if(this[j] > this[j+1]){
                let temp = this[j];
                this[j] = this[j+1];
                this[j+1] = temp;
            }
        }
    }
    return this;
}

let arr = [1, 7, 2, 5];
console.log("Array before sort: " + arr)
console.log("Array after sort: " + arr.bubbleSort());




//-----QUESTION #3------//
var Person = function() {};

Person.prototype.initialize = function(name, age)
{
    this.name = name;
    this.age = age;
}


var Teacher = function() {
    this.teach = function(subject){
        console.log(this.name + " is now teaching " + subject);
    }
}
Teacher.prototype = new Person();
var teacher = new Teacher();

teacher.initialize("Peter", 30);
teacher.teach("Mathematics");