# Bootstrapping

### Loading data on app initialization
You can do so with the `APP_INITIALIZER`, where you can provide a series of functions
whose value will be evaluated before app initialization, it some value returns a promise or
an observable, the app initialization will be halted until these values resolve.
