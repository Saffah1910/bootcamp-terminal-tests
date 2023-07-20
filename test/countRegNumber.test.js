import assert from "assert";
import countRegNumber from "../countRegNumber.js";

describe('4.Count number of registartion numbers' , function(){
    it('return how many registaration numbers are in the string' , function(){
        assert.equal((3), countRegNumber("CA 182736,CY 523519,CJ 812328"));
    });

    it('return 1 if there is only one registration number' , function(){
        assert.equal((1), countRegNumber("CJ 812328"));
    });

    it('It should return no registration number if no registration number was entered' , function(){
        assert.equal(("No registartion number was entered"), countRegNumber(""));
    });


   

});
