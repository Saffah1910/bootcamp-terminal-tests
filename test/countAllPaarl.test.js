import assert from "assert";
import countAllPaarl from "../countAllPaarl.js";


describe('7.Registartion numbers from Paarl' , function(){
    it('return the amount of registartion numbers from paarl' , function(){
        assert.equal((3), countAllPaarl("CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123"));
    });
    it('return 0 if the registration number is not from paarl' , function(){
        assert.equal((0), countAllPaarl("CK 345"));
    });

    it('Return no registration number entered if an empty string was passed' , function(){
        assert.equal(("no registration number entered"), countAllPaarl(""));
    });


});