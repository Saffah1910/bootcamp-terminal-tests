import assert from "assert";
import findItemsOver20 from "../findItemsOver20.js";

describe('12.products that have a quantity higher than 20', function () {
    it('only return 2 product names if quantity of the item is higher than 20 ', function () {
        var itemList = [
            {name : 'apples', qty : 5},
            {name : 'pears', qty : 42},
            {name : 'bananas', qty : 21},
            {name : 'apples', qty : 3},
        ];
        
        var results = [
            {name : 'pears', qty : 42},
            {name : 'bananas', qty : 21},
        ];
        assert.deepEqual(results, findItemsOver20(itemList));

    
    });
    it('Only return 1 product name(bananas) if the quantity is higher than 20', function () {
        var itemList = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 2},
            {name : 'bananas', qty : 50},
         
        ];
        
        var results = [
          
            {name : 'bananas', qty : 50},
        ];
        assert.deepEqual(results, findItemsOver20(itemList));

    
    });
    it('Only return 4 product name if the quantity is higher than 20', function () {
        var itemList = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 2},
            {name : 'bananas', qty : 5},
            {name : 'grapes', qty : 10},
            {name : 'kiwi', qty : 2},
            {name : 'plums', qty : 50},
         
         
        ];
        var results = [
          
             { name: 'plums', qty: 50 } 
        ];
        
      
        assert.deepEqual(results, findItemsOver20(itemList));

    
    });








});