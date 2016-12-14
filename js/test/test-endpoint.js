import { getCategories } from '../helpers/endpoint'

var jsdom = require('mocha-jsdom')
var assert = require('assert');

const testCategoryListData = (categoryListData, errorMsg) => {
    return categoryListData
}

describe('Data Fetch', function() {
    describe('#getCategories()', function() {
        var $

        jsdom()
        // ensure test doesn't timeout too early
        this.timeout(10000);

        before(() => {
            $ = require('jquery')
            global.$ = $;
        })

        it('test is running', function() {
            assert(true);
        })

        it('should fetch category list data', function(done) {
            var data = getCategories(testCategoryListData)
        });
    });
});
