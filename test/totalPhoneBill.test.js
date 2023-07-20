import assert from "assert";
import totalPhoneBill from "../totalPhoneBill.js";

describe('10.returns the total phone bll based on how many calls and sms', function () {
    it('if you made 2 call and 3 sms then the total R7.45 should be returned ', function () {


        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
    });

    it('if you made 1 call and 1 sms then the total R3.40 should be returned ', function () {

        assert.equal('R3.40', totalPhoneBill('call, sms'));
        
    });

    it('if you made 2 sms then the total R1.30 should be returned', function () {
        assert.equal('R1.30', totalPhoneBill('sms, sms'));
    });


});