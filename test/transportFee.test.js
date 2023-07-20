import assert from "assert";
import transportFee from "../transportFee.js";

describe('9.returns the right price based on the shift', function () {
    it('return fees for transport R20 the shift is in the morning', function () {


        assert.equal(transportFee('morning'), 'R20');
    });
    it('return fees for transport R10 if it is an afternoon shift', function () {

        assert.equal(transportFee('afternoon'), 'R10');
        
    });

    it('Return free if working a night shift', function () {
        assert.equal(("free"), transportFee('night'));
        


});
});