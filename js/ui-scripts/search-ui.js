// Endpoint Connectors
import { getCategories } from '../helpers/endpoint.js'
import { getProducts } from '../helpers/endpoint.js'

// Parsers
import categoryListParser from '../components/category-list-parser'
import productListParser from '../components/product-list-parser'


// Templates
const categoryListTemplate = require('../partials/category-list.handlebars')
const productListTemplate = require('../partials/product-list.handlebars')
const productTemplate = require('../partials/product.handlebars')

const buildProductList = (productListData) => {
    if (!productListData) {
        return
    }

    var data = productListParser(productListData);
    var $container = $('.js-product-list');
    var renderedTemplate = productListTemplate({ products: data });

    $container.html(renderedTemplate);
}

const buildCategoryList = (categoryListData) => {
    if (!categoryListData) {
        return
    }

    var data = categoryListParser(categoryListData);
    var $container = $('.js-category-list');
    var renderedTemplate = categoryListTemplate({ categories: data });
    
    $container.html(renderedTemplate);
}

// bind event handlers
const bindHandlers = () => {
    $('body').on('click', '.js-category-link', function(e) {
        e.preventDefault()
        debugger;
        var categoryId = $(this).attr('href')
        debugger;
        getProducts(buildProductList, categoryId)
    })
}

const uiFunction = () => {
    $(document).ready(function() {
        getCategories(buildCategoryList)

        bindHandlers();
    })
}

export const searchUI = uiFunction()
