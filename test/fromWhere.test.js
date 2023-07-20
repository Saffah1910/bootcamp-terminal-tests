import assert from "assert";
import fromWhere from "../fromWhere.js";

describe('11.From where is the car registration number', function () {
    it('If the reg number starts with CY return Bellville', function () {

        assert.equal(fromWhere('CY 567489'), 'Bellville'); 
    });
    it('If the reg number starts with CJ return Paarl', function () {

        assert.equal(fromWhere('CJ 343502'), 'Paarl');
        
    });

    it('If the reg number starts with CA return Cape Town', function () {
        assert.equal(fromWhere('CA 987504'), 'Cape Town');
    });

    it('If the reg number starts with anything else return Some other place', function () {
        assert.equal(fromWhere('ZN 568593'), 'Some other place!');
    });


});