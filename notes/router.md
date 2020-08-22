# Router


### routerLink
The basic directive for navigation, can accept a string or an expression consisting of 
an array of route fragments
```angular2html
<a routerLink="home">Home</a>
<a [routerLink]="['home']">Home</a>
```

### Set up a specific entry route for the app
You can do so in the `index.html` file using the following tag:
```angular2html
<base href="/src/my-path/">
```
