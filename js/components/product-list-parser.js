const productListParser = (productListData) => {
    if (!productListData) {
        // can return something for template to show a loader
        return false
    }

    return productListData.products.map((productData) => {
        return {
            productTitle: productData.name,
            productPrice: productData.regularPrice
        }
    })
}

export default productListParser
