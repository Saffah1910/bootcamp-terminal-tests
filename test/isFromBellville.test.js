import assert from "assert";
import isFromBellville from "../isFromBellville.js";

describe('2.Vehicle registration numbers', function () {
    it('return true for registration numbers from Bellville ', function () {
        assert.equal(true, isFromBellville("CY 123"));
    });
    it('return false for registration number that is not from Bellville', function () {
        assert.equal(false, isFromBellville("CK 123"));
    });

    it('return false if an empty string was pass', function () {
        assert.equal(false, isFromBellville(""));
    });

});