# HTTP

### How to create a development proxy for the backend located on another service?
Follow the fingerprint pointed in the `proxy.conf.json` file of this
repository and start the server with
```shell script
ng serve --proxy-config proxy.conf.json
```

### How to add parameters to a GET request
```javascript
const params = new HttpParams()
    .set('page', '1')
    .set('pageSize', '10')

this.http.get('/url', { params });
```

### How to add parameters to a PUT request
```javascript
const body = 'whatever';
const headers = new HttpHeaders()
    .set('X-Auth', 'userToken')

this.http.put('/url', body, { headers });
```

### How to cache get, post... requests?
With the `cache()` method.
```javascript
this.http.get('/url').cache();
```

### Avoid an http to trigger multiple times on multiple subscriptions
```javascript
this.lessons$ = this.lessonsService.loadLessons.pipe(
    publishLast(),
    refCount(),
);
this.lessons$.subscribe(
    () => console.log('lessons loaded'),
    console.error
);
```
