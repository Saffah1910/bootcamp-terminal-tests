import assert from "assert";
import yearsAgo from "../yearsAgo.js";

describe('6.How many years ago?' , function(){
    it('return the amount of years ago you were born' , function(){
        assert.equal(("20"), yearsAgo("2003"));
    });
    it('return the amount of years it has been since 1976' , function(){
        assert.equal(("47"), yearsAgo("1976"));
    });

    it('return enter number if anything besides a number was entered ' , function(){
        assert.equal(("enter number"), yearsAgo(""));
    });


});