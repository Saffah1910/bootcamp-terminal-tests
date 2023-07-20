import assert from "assert";
import isWeekday from "../isWeekday.js";

describe('5.Is it a week day?' , function(){
    it('return true if the day is a week day ' , function(){
        assert.equal(true, isWeekday("Monday"));
    });

    it('return false if the day is a weekend ' , function(){
        assert.equal(false, isWeekday("Saturday"));
    });

    it('return false if an empty string was passed' , function(){
        assert.deepEqual(false, isWeekday(""));
    });


   

});
