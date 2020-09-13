# Angular Universal

`Server Side Rendering` might be useful to deliver speed on first page load, optimize for `SEO`
and `Social Networks`. It consists ion `pre-rendering` a specific Angular App Route in the server,
send it to the client really fast and bootstrap the app from there.
Angular Universal runs on a `node` `express` server.  
Another reason for using `ssr` is `compatibility with social media crawlers`, for example to display
beautiful cards when people share our site in social networks.  
Universal runs the `Server-Side Rendering Layer` instead of the `Client-Side` one.  

By default, SPA's first render is a blank page, because they rely on the JavaScript bundles to be runt
in order to start rendering the page content.

### Example meta tags for twitter
```html
<meta content="summary" name="twitter:card">
<meta content="@TwitterName" name="twitter:site">
<meta name="twitter:title" content="name and punchline">
<meta name="twitter:description" content="site description">
<meta name="twitter:text:description" content="site description">
<meta name="twitter:image" content="https://img.url">
```

### Setup example (might be outdated)
```typescript
import { ng2engine } from 'angular2-universal'; 

let app = express();

// config view engine
app.engine('.html', ng2engine);
app.set('views', __dirname);
app.set('view engine', 'html');

// config the root route 
app.use('/', function(req, res) {
  let url = req.originalUrl || '/';
  res.render('index', {
    App,
    providers: [...],
    preboot: true
  });
});
```
The root component `App` contains route specific anotations:
```typescript
@RouteConfig([
  { path: '/home', component: Home, name: 'Home' },
  { path: '/about', component: About, name: 'About' },
  { path: '/', redirectTo: '/home', pathMatch: 'full' },
])
export class App {
   ...
}
```
The meaning of these annotations is clear on the client side: navigation will 
update the HTML5 Browser history instead of triggering a full page refresh, 
creating the enhanced experience that single page apps are all about.  
On the server, the router has a different configuration than on the client:  
```typescript
import { ng2engine, NODE_LOCATION_PROVIDERS } from 'angular2-universal';

  res.render('index', {
    App,
    providers: [
      ROUTER_PROVIDERS,
      NODE_LOCATION_PROVIDERS,
    ],
    preboot: true
  });
```

### Bootstrapping a Universal Application
It all starts by running the following command in your project:
```
ng add @nguniversal/express-engine
```
This will generate the files `src/main.server.ts`, `src/app/app.server.module.ts`,
`src/server.ts`, being those the boostrapper for the server app, the server side rendering
module and the `express` server.

### Start a Universal app
1. Make sure you have `BrowserModule` imported.
1. run the schematic `ng add @nguniversal/express-engine --clientProject`.
1. In the newly generated "server" `angular.json` key, change the field: `"outputPath": "dist-server"`.
1. create a new file in the root of your project named `prerender.ts`.
1. configure the `express` server or use `nguniversal` which already integrates it.

### the `ngExpressEngine`
A rendering Engine that `Angular Universal` provides for us to us within the `express`
framework. This might be old syntax:
```javascript
const express = require('express');
const app = express();
const distFolder = __dirname + '/dist';
enableProdMode();

app.engine('html', ngExpressEngine({
    bootstrap: AppServerModuleFactory,
    providers: [provideModuleApp(LAZY_MODULE_MAP)],
}));

app.set('view engine', 'html');
app.set('views', distFolder);

// static files with extension
app.get('*.*', express.static(distFolder, { maxAge: '1y', }));

app.get('*', (req, res) => {
    // the name of the file we want to render without the extension
    res.render('index', { req });
});

app.listen(3000, () => console.log('running...'));
```
