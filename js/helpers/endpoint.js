let baseUrl = 'http://www.bestbuy.ca/api/v2/json/';

let category = 'category/';
let rootCategory = 'Departments';
let productParam = 'search?product=';
let productListParam = 'search?categoryid=';

const fetchData = (renderCb, url) => {
    if (!renderCb) {
        return false;
    }

    if (!url) {
        console.log('Endpoint.js Error: Url was not provided');
        return false;
    }

    var result;

    console.log('Fetching data from ' + url);

    $.ajax({
        type: 'GET',
        dataType: 'jsonp',
        url: url,
        success: (data, statusCode, xhr) => {
            var result = data;

            renderCb(data);
        },
        error: (xhr, statusCode, error) => {
            console.log('Endpoint.js Error: Ajax error ' + error);
            var result = error;
        }
    });

    return result;
}

const getProduct = (sku) => {

}

const getProducts = (renderCb, categoryId) => {
    if (!categoryId) {
        return
    }

    var url = baseUrl + productListParam + categoryId

    return fetchData(renderCb, url);
}

const getCategories = (renderCb, level = rootCategory) => {
    var url = baseUrl + category + level

    return fetchData(renderCb, url);
}

export {
    getProduct,
    getProducts,
    getCategories
}
