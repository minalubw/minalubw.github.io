describe("Filter", function(){
    it("Takes one banned word and returns a filtered string.", function(){
        assert.equal("This house is not nice!".filter("not"), "This house is nice!");
    });
});

describe("Filter", function(){
    it("Takes a number of banned words and returns a filtered string.", function(){
        assert.equal("This house is not nice!".filter("not", "is"), "This house nice!");
    });
});

describe("Bubble Sort", function(){
    it("Sorts an array using the bubble sort technique.", function(){
        assert.deepEqual([6, 4, 0, 3,-2,1].bubbleSort(), [-2, 0, 1, 3, 4, 6]);
    });
});


