import productListParser from './product-list-parser'
import categoryListParser from './category-list-parser'

const searchParser = () => {
    return {
        categories: categoryListParser(),
        products: productListParser()
    }
}

export default searchParser
