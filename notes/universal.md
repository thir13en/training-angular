# Angular Universal

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
