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
