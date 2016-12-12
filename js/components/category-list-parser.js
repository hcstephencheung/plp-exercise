import { getCategories } from '../helpers/endpoint.js'

const categoryListParser = () => {
    debugger;
    var categories = getCategories();

    return categories;

    // return [
    //     { categoryName: 'WEEE' },
    //     { categoryName: 'Electronics' },
    //     { categoryName: 'omg' }
    // ]
}

export default categoryListParser
