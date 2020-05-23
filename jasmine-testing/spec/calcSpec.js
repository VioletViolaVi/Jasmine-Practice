// describe("Calculator", function(){

//     beforeEach(function(){
//         calc = new Calculator;
//     });   

//     describe("Addition tests", function(){
//         it("should return 42", function(){
//             calc.add(20);
//             calc.add(22);
//             expect(calc.value).toBe(42);
//         });
//         it("should return 26", function(){
//             calc.add(7);
//             calc.add(19);
//             expect(calc.value).toBe(26);
//         });
//         it ("it should return an error if we don't supply two numbers", function(){
//             spyOn(window, "alert");
//             calc.add("Hitchhikers");
//             expect(window.alert).toHaveBeenCalledWith("Error!");
//         });
//     });
// });


describe("what ppl can drink", function(){

    beforeEach(function(){
        drink = new whatCanIDrink;
    });   

    describe("checking ages", function(){
        it("should return Sorry....etc", function(){
            expect(whatCanIDrink).toBeDefined();
        });
        it("should return 26", function(){
            expect(whatCanIDrink).toBe(26);
        });
        it ("it should return an error if we don't supply two numbers", function(){
            spyOn(window, "alert");
            calcViv.add("Hitchhikers");
            expect(window.alert).toHaveBeenCalledWith("Error!");
        });
    });
});