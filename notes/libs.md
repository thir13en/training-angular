# Publishing Libraries


### What does a published library look like?
```markdown
    .
    |____components.d.ts
    |____components.js
    |____lib
    | |____HelloWorld.d.ts
    | |____HelloWorld.js
    | |____HelloWorld.js.map
    |____package.json
```
* `components.js` and `components.d.ts` define the public API of the library.
* Each Javascript file is published together with the Typescript type definitions and source maps.  
* Each Javascript file follows the CommonJs module format of node, exporting its dependencies via module.exports. 

### It is better to publish unbundled files
Most applications consuming Angular libraries will probably have a frontend build based on some combination of gulp, Jspm, SystemJs or Webpack, its best if the consumer of the library itself does the bundling. This ensures that bundlers like webpack will give optimal results for the end user, and that they won't throw warnings.
