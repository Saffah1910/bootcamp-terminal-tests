import assert from "assert";
import findItemsOver from "../findItemsOver.js";

describe('13.products that have a quantity higher than the threshold', function () {
    it('2 items should be returned if the quanity it is higher than 25', function () {

        var itemList = [
            { name: 'kiwi', qty: 20 },
            { name: 'grapes', qty: 52 },
            { name: 'orange', qty: 17 },
            { name: 'plum', qty: 26 },
        ];
        var results = [
            { name: 'grapes', qty: 52 },
            { name: 'plum', qty: 26 },
        ];

        assert.deepEqual(results, findItemsOver(itemList, 25));
    });
    it('1 items should be returned if the quanity it is higher than 100', function () {

        var itemList = [
            { name: 'kiwi', qty: 20 },
            { name: 'grapes', qty: 52 },
            { name: 'orange', qty: 17 },
            { name: 'plum', qty: 200 },
        ];
        var results = [

            { name: 'plum', qty: 200 },
        ];

        assert.deepEqual(results, findItemsOver(itemList, 100));
    });
    it('It should return the message no items over the threshold if there are no items with quanity higher than 10', function () {

        var itemList = [
            { name: 'kiwi', qty: 2 },
            { name: 'grapes', qty: 5 },
            { name: 'orange', qty: 7 },
            { name: 'plum', qty: 2 },
        ];
        var results = [
            "no items over the threshold"
        ];
        assert.deepEqual("no items over the threshold", findItemsOver(itemList, 10));
    });








});