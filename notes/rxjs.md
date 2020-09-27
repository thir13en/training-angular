# RxJs

### Observables vs Promises
| Promise        | Observable   |
| :------------- | :----------: |
|  Executes immediately as soon as created | Executes only when the `subscription` starts   |
| Used with `.then()` clause                 | Has chaining and subscription to handle complex applications |
| Errors are pushed to child promises      | Centralized and predictable error handling by the use of `subscribe()` method |
| Provides only one value                  | Can provide multiple values over time |
