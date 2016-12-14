# Instructions
In the `/js` folder do the following:
- In the root folder, run `npm install`. 
- Then run `npm run serve`. This will spin up a server at `http://localhost:3000`
- In your browser, open `http://localhost:3000` and voila! 😬

# Implementation Approaches
### NPM:
- npm modules are great
- npm scripts replaces need for gulp/grunt
- easy collab with other developers without dependency hell

### Webpack:
- hot JS reloading 🔥
- ability to use ES6 to write modular code
- will switch to React as a View layer instead of Handlebars in the future (as a personal project) since Webpack + React are BFFs
- auto-generated sourcemaps 👌

### Handlebars 
- I have experience with Dust, Handlebars/Mustache, and Angular Templates, and Handlebars doesn't really get in the way
- I did have to build more logic around binding re-rendering of templates when data changes, which is described as `buildFunctions` in the `ui-scripts` folder
- I find the way I've implemented using Handlebars is similar to React's approach: re-rendering a component when data changes is easier to understand when dealing with state changes than using 2-way dirty-check approach that Angular uses

### Mocha ☕️
- easy JS unit testing (tests are easy to write)
- however, I'm unfamiliar with it, and I couldn't get it working with Ajax-ed content, would love to spend a little more time investigating on issues there

### ES6
- love arrow functions
- code in the future!


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

### Vanilla Modal:
- for quickstart on building a modal, I chose to use this NPM module: https://www.npmjs.com/package/vanilla-modal.
- it features no bloat, good API for me to programmatically open the modal
- I could've built a modal myself by using classes, but due to time constraints I chose to use this NPM package for now

# Resources
- ES6 + webpack demo: https://github.com/rauschma/webpack-es6-demo
- Handlebars + webpack : https://www.npmjs.com/package/handlebars-loader
- Modal: https://www.npmjs.com/package/vanilla-modal
