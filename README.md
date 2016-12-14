# Instructions
In the `/js` folder do the following:
- In the root folder, run `npm install`. 
- Then run `npm run serve`. This will spin up a server at `http://localhost:3000`
- In your browser, open `http://localhost:3000` and voila!

# Dev Notes
### Known Issues:
- Fetching data takes a really long time. This is particularly frustrating when opening the modal. I could easily setup a loading icon of some sort to make the perceived performance much better (this relatively easy to do, just need to add loading-state to partials and return isLoading key in the parsers)
- PLP doesn't look very good. I inherited the styles from the HTML5 boilerplate, but functionality is there

### Tests:
- I have to be honest, I'm unfamiliar with tests in JS. I could spend a little more time figuring out Mocha/Sinon for Ajax testing, but I've spent a bit too much time on setting up the project structure right. I would have the following testing approach:
  * create unit tests for each get() in endpoint.js, ensuring each endpoint can be reached and has the right data types and content. This ensures data is coming in as expected from the BE.
  * create unit tests for parser functions to map 1:1 with context keys used in templates. This ensures templates to render properly.
  * create unit tests for build functions -ui.js to ensure HTML content is being created via Handlebars with the correct dataset
  * create a test suite for the aforementioned tests
  * the final acceptance criteria will still require manual testing since I don't think there is still a good visual testing tool out there consistent enough to simulate user interations


### Webpack purposes:
- hot reloading
- ability to use ES6 to write modular code
- will switch to React as a View layer instead of Handlebars in the future (as a personal project)

### Vanilla Modal:
- for quickstart on building a modal, I chose to use this NPM module: https://www.npmjs.com/package/vanilla-modal.
- it features no bloat, good API for me to programmatically open the modal
- I could've built a modal myself by using classes, but due to time constraints I chose to use this NPM package for now

# Resources
- ES6 + webpack demo: https://github.com/rauschma/webpack-es6-demo
- Handlebars + webpack : https://www.npmjs.com/package/handlebars-loader
- Modal: https://www.npmjs.com/package/vanilla-modal
