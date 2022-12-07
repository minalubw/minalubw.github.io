describe("Sum", function(){
    it("Takes an array and returns a sum.", function(){
        assert.equal(sum([1,3, 6]), 10);
    });
});

describe("Multiply", function(){
    it("Takes an array and returns a product.", function(){
        assert.equal(multiply([2,8]), 16);
    })
});

describe("Multiply", function(){
    it("Takes an array and returns a product.", function(){
        assert.equal(multiply([2,8]), 18);
    })
});

describe("Reverse String", function(){
    it("Takes a string and returns the reversed string.", function(){
        assert.deepEqual(reverseString("World Cup"), "puC dlroW");
    });
});

describe("Filter Long words", function(){
    it("Takes an array of strings and integer, then return an array of strings having a length greater than the integer", function(){
        assert.deepEqual(filterLongWords(["Dave", "Jennifer", "Jenni", "Anna"], 5), ["Jennifer"]);
    });
});