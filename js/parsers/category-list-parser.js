import { getCategories } from '../helpers/endpoint.js'

const categoryListParser = (categoryListData) => {
    if (!categoryListData) {
        // can return a "loading" key to show a loader
        return false
    }

    return categoryListData.subCategories.map((categoryData) => {
        return {
            categoryLink: categoryData.id,
            categoryName: categoryData.name
        }
    })
}

export default categoryListParser
