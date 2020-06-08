# General


# What are the two main features of the Angular Core?
The tooling for creating custom Angular Html Elements and the 
possibility of completely separating the presentation layer, and the business
logic layer by keeping them in two separates `.ts` and `.html` files.

### Angular is a frontend framework build on top of the module bundler...
Webpack

### Presentation Components vs Smart Components

### Structural Directives
Such as `*ngFor`, allows us to change the DOM of our page based on the
mapping of certain data into it.

* `*ngFor` syntax:  
```
*ngFor="
    let item of items;
    let index as i;
    let first as isFirst;
    let last as isLast;
    let even as isEven;
    let odd as isOdd;
"
```
