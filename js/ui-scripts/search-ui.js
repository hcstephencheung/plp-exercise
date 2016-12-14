// Endpoint Connectors
import { getProduct, getProducts, getCategories } from '../helpers/endpoint.js'

// Parsers
import categoryListParser from '../parsers/category-list-parser'
import productListParser from '../parsers/product-list-parser'
import productDetailsParser from '../parsers/product-details-parser'


// Templates
const categoryListTemplate = require('../partials/category-list.handlebars')
const productListTemplate = require('../partials/product-list.handlebars')
const productDetailsTemplate = require('../partials/product-details.handlebars')

// UI Components
var VanillaModal = require('vanilla-modal');

const initModal = () => {
    const modal = new VanillaModal();

    $('.js-modal .modal-content').empty();

    modal.open('#js-product-details-modal-content');
}

const buildProductDetails = (productDetailsData) => {
    if (!productDetailsData) {
        return
    }

    var data = productDetailsParser(productDetailsData);
    var $container = $('.js-product-details-container');
    var renderedTemplate = productDetailsTemplate(data);

    if (!renderedTemplate) {
        console.log('Search-UI: Product Details Partial render error');
        return;
    }

    // replace modal contents with new content
    $container.html(renderedTemplate);

    // open modal
    initModal();
}

const buildProductList = (productListData) => {
    if (!productListData) {
        return
    }

    var data = productListParser(productListData);
    var $container = $('.js-product-list');
    var renderedTemplate = productListTemplate({ products: data });

    if (!renderedTemplate) {
        console.log('Search-UI: Product List Partial render error');
        return;
    }

    $container.html(renderedTemplate);
}

const buildCategoryList = (categoryListData) => {
    if (!categoryListData) {
        return
    }

    var data = categoryListParser(categoryListData);
    var $container = $('.js-category-list');
    var renderedTemplate = categoryListTemplate({ categories: data });

    if (!renderedTemplate) {
        console.log('Search-UI: Category List Partial render error');
        return;
    }
    
    $container.html(renderedTemplate);
}

// bind event handlers
// delegate events to body so we can pre-initialize handlers before
// elements get appended to the page
const bindHandlers = () => {
    $('body').on('click', '.js-category-link', function(e) {
        e.preventDefault()

        var categoryId = $(this).attr('href')
        getProducts(buildProductList, categoryId)
    })

    $('body').on('click', '.js-product', function(e) {
        e.preventDefault()

        var sku = $(this).attr('data-product')
        getProduct(buildProductDetails, sku)
    })
}

const uiFunction = () => {
    $(document).ready(function() {
        getCategories(buildCategoryList)

        bindHandlers();
    })
}

export const searchUI = uiFunction()
