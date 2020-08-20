# Content Projection

### The basics
Content projection allows passing template snippets as configuration snippets.
```angular2html
<component-name [input]="input">
    <!-- you can evaluate expressions -->
    <img src="input.img" alt="">
</component-name>
```
Inside the component template...
```angular2html
<ng-content>
    <!-- image will be projected here -->
</ng-content>
```
Also! You can target only part of the projected content via css selectors.
```angular2html
<ng-content select="<.css.selector>">
    <!-- image will be projected here -->
</ng-content>
```
For selecting reminding content without considering the one already projected, add another `<ng-content>`.
It will take care of the rest.  
It is interesting to note that you can also target the tag of a component if it is projected in 
your component, like this:
<ng-content select="<app-component-tag>">
    <!-- image will be projected here -->
</ng-content>
