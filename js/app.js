// var productListTemplate = require("./templates/product-listing.handlebars");
import { renderedTemplate as template } from './templates/main.js'

document.addEventListener("DOMContentLoaded", function() {
    var tmpl = template;
    $('.main').html(template);
});
