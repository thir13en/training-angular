# Styling

### How to style a component element tag from within it's own style sheet?
With the `:host` syntax, like this.
```scss
:host {
  // your styles applied to the component element
}
```
It is also combinable with component classes, like this
```scss
:host.is-even {
  // your styles applied to the component element with is-even css class
}
```

### Styling and content projection
It is important to note that when you pass a template content via an input to 
a component, the unique style identifier of that template will be that of the parent,
making it not possible to style it from the component actually receiving
and displaying that template portion's styles sheet.  
Summarizing, we want to be able to style in our component elements that were
received via content projection, which we can achieve in the following way:
```scss
app-component-tag ::ng-deep .element-to-style {
  // note the component tag at the beginning to make it 
  // exclusive to our component context
}
``` 
This is a great way to bypass the Angular View Encapsulation mechanism.
