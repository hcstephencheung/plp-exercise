let baseUrl = 'http://www.bestbuy.ca/api/v2/json/';

let category = 'category/';
let rootCategory = 'Departments';
let productParam = 'search?product=';
let categoryParam = 'search?categoryid=';

const fetchData = (url, successCb) => {
    if (!url) {
        return false;
    }

    debugger;
    var result;

    $.ajax({
        type: 'GET',
        dataType: 'jsonp',
        url: url,
        success: (data, statusCode, xhr) => {
            var result = data;

            successCb()
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

const getProducts = (categoryId) => {

}

const getCategories = (level = rootCategory) => {
    var url = baseUrl + category + level

    return fetchData(url);
}

export {
    getProduct,
    getProducts,
    getCategories
}
