// var productListTemplate = require("./templates/product-listing.handlebars");
import { renderedTemplate as template } from './templates/main.js'
import { searchUI } from './ui-scripts/search-ui.js'

document.addEventListener("DOMContentLoaded", function() {
    var tmpl = template;

    $('.main').html(template);
});
