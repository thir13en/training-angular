# Angular Universal

`Server Side Rendering` might be useful to deliver speed on first page load, optimize for `SEO`
and `Social Networks`. It consists ion `pre-rendering` a specific Angular App Route in the server,
send it to the client really fast and bootstrap the app from there.
Angular Universal runs on a `node` `express` server.

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
