import assert from "assert";
import greet from "../greet.js";
describe('1.Greet', function () {
    it('It should return hello with persons name', function () {
        assert.equal("Hello, bob", greet("bob"));

    });

    it('It should return hello saffah if saffah was greated', function () {
        assert.equal("Hello, saffah", greet("saffah"));
    });

    it('It should return no name entered if there is no name', function () {
        assert.deepEqual("no name was entered", greet(""));
    });

});
