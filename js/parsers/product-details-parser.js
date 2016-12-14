const productDetailsParser = (productDetailsData) => {
    if (!productDetailsData) {
        // can return something for template to show a loader
        return false
    }
    return {
        productName: productDetailsData.name,
        productUrl: productDetailsData.productUrl,
        productPrice: productDetailsData.regularPrice,
        // most products don't have hi-res images
        productImg: productDetailsData.thumbnailImage
    }
}

export default productDetailsParser
