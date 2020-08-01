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

### Applying theming styles specifically within a component context
Some times we want our component to be styled in a certain way depending on the context
classes, we could do so in the following way:
```scss
::ng-deep .external-theme-class .internal styled element {
  // in this case the ::ng-deep at the beginning removes all specificity
  // on the selector, so it works but is a but overkill and we loose some 
  // specificity
}
```
To solve the lack of specificity, we have this great modifier coming to the rescue:
```scss
:host-context(.external-theme-class) .internal styled element {
  // now it is only the outer theme class the one being freed from the 
  // Angular View Encapsulation shadow dom emulation. 
}
```

### Angular View Encapsulation methods
We can select different ways for Angular to manage the View Encapsulation in the
component decorator:
```angular2
@Component({
    ...
    // default
    encapsulation: ViewEncapsulation.Emulated
    // Plain CSS, no encapsulation at all
    encapsulation: ViewEncapsulation.None
    // Deprecated, not to use
    encapsulation: ViewEncapsulation.Native
    // Using the browser APIs, careful with cross-browser compatibility
    // this is to be used in the future when Shadow DOM is a fully
    // implemented standard
    encapsulation: ViewEncapsulation.ShadowDom
})
```

### How to override component CSS if needed
we just need to add an attribute to the body of the page.
```angular2html
<body override>
    <app></app>
</body>
```
To override component styles, we can then do the following:
```css
[override] hello-world h1 {
    color:red;
}
```
