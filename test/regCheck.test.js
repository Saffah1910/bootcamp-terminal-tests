import assert from "assert";
import regCheck from "../regCheck.js";

describe('3.Check if a registration number is for GP, L, EC, MP registration plates.' , function(){
    it('return true if the registration numbers is from GP ' , function(){
        assert.equal(true, regCheck("DC 55 YU GP", "GP"));
    });
    it('return true if the registration number that is from L' , function(){
        assert.equal(true, regCheck("5566 L", "L"));
    });

    it('return false if the registration number is not from GP, L, EC, MP' , function(){
        assert.equal(regCheck('DC 55 YU GP', 'EC'), false);
    });


});