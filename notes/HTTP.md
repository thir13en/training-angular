# HTTP

### How to create a development proxy for the backend located on another service?
Follow the fingerprint pointed in the `proxy.conf.json` file of this
repository and start the server with
```shell script
ng serve --proxy-config proxy.conf.json
```

# How to add parameters to a GET request
```javascript
const params = new HttpParams()
    .set('page', 1)
    .set('pageSize', 10)

this.http.get('/url', { params });
```
