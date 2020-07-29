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
