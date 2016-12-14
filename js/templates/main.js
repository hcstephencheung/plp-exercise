/*
* Renders Handlebar templates with its context
*/
const searchTemplate = require('./search.handlebars');
import searchParser from '../parsers/search-parser.js'

const renderTemplate = () => {
    return searchTemplate(searchParser());
}

export const renderedTemplate = renderTemplate()
