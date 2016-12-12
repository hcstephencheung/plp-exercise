var bookListingTemplate = require("./templates/product-listing.handlebars");

document.addEventListener("DOMContentLoaded", function() {
    var div = document.createElement('div');
    div.innerHTML = bookListingTemplate({
        username: "Stephen",
        books: [
            { title: "A TV", description: "a 65 inch tv" },
            { title: "A Computer", description: "does not come with monitor" },
            { title: "General Product" }
        ]
    });
    document.body.appendChild(div);
});