# State Management


### Motivation
One of the main reasons why we would like to rely on a state management system is to dramatically
reduce the number of `http` request that we have to fetch from the server, which potentially can cause
performance issues when we scale the app to a large number of users.  
Improving the user experience, making the app faster and smoother to navigate is another big reason
to add a state management layer to our app.  
The third and really important issue that state management systems aim at solving, is to reflect
in the UI the updated state of the application in sync with the Backend.  

### Uni-directional data flow
We need to make sure in an `MVC` application, if we modify the `Model`, changes are reflected
in the `View` of the application. In `Angular`, this is done automagically, so we have out-of-the-box
`Model/View` synchronization. One thing we need to make sure, is that the updates in the view do not trigger
new changes in the model. This is known as `unidirectional data flow`, and helps a lot in keeping the
application easy to reason about.
In `development mode` in `Angular`, the cycle to update the view executes twice, and if the result of both
executions is not idempotent (exactly same results) we get the infamous error `ExpressionChangedAfterItHasBeenCheckedError`.

## Redux-like
### You probably don't need Redux, here's when you will need it
* Multiple parts of your app display differently the **same data**
* Some data can be **simultaneously edited** by both the user using the UI or events coming from the backend via server push
* You have a **need for undo/redo** of at least part of the application state

### Example on how to create a Redux-like app with RxJs
* Application Actions -> An action is a message that defines what happened in the UI: A Todo was added, removed, toggled.
To make this type safe lets create a class for each action:
```typescript
export class AddTodoAction {
    constructor(public newTodo: Todo) {}
}
export class ToggleTodoAction {
    constructor(public todo: Todo) {}
}
```
And then lets define a Typescript union type that is a union of all the action types.
```typescript
export type Action = LoadTodosAction | AddTodoAction | ToggleTodoAction | DeleteTodoAction | StartBackendAction | EndBackendAction;
```

### Using the Action Dispatcher
An action is dispatched via the action dispatcher. This gets injected in any place of the application that needs to dispatch actions,
typically Smart or Controller-like components.
```typescript
export class TodoList {
    constructor(@Inject(dispatcher) private dispatcher: Observer<Action>) {
      ...
    }
}
onAction(payload: PayloadType) {
    this.dispatcher.next(new WhateverAction(payload));
    // ...
}
```

### Defining the application state
```typescript
export interface ApplicationState {
    whatever: WhateverStateType,
    uiState: UiState
}
```
Taking a closer look at the uiState...
```typescript
export class UiState {
    constructor(public actionOngoing: boolean, public message: string) {}
}
```

### Avoiding event soup while using the dispatcher
Although the dispatcher is a Subject, it's better to mark its type upon injection as an Observer only:
```typescript
constructor(@Inject(dispatcher) private dispatcher: Observer) {}
```
To emit an event:
```typescript
this.dispatcher.next(new ExampleAction(examplePayload));
```
We want to avoid most application code to accidentally subscribe directly to the dispatcher, instead of subscribing
to the application state. 


### Create the RxJs reducer
We can use the `scan` operator, that acts as an `Observable` reducer but emits a value every time
the reducer gets applied an operation, which is what we want because our reducer will never resolve,
rather evolve in time.
```typescript
let appStateObservable = actions.pipe(
    scan( (state: ApplicationState, action) => {
        let newState: ApplicationState = {
            todos: calculateTodos(state.todos, action),
            uiState: calculateUiState(state.uiState, action)
        };
        return newState;
    } , initialState),
);
```
### How to avoid having multiple observable stream threads, one for every subscription?
Since the content delivered by the Redux store shall always be the same, we should
use the `share` RxJs operator to make the store subscription more performant.

### Example for bootstrapping the store
```typescript
export function applicationStateFactory(initialState: ApplicationState, actions: Observable): Observable {

    let appStateObservable = actions.scan( (state: ApplicationState, action) => {

        let newState: ApplicationState = {
            todos: calculateTodos(state.todos, action),
            uiState: calculateUiState(state.uiState, action)
        };

        return newState;

    } , initialState).share();

    return wrapIntoBehaviorSubject(initialState, appStateObservable);
}

import { provide } from "@angular/core";

@NgModule({
    imports: [BrowserModule],
    bootstrap: [App],
    providers: [
        {
            provide: state,
            useFactory: applicationStateFactory,
            deps: [new Inject(initialState), new Inject(dispatcher)]
        }  
    ],
})
export class AppModule {}
```

### How should pure components use dispatcher and state?
Pure components can receive observables as input streams, but they should not have the
`dispatcher` or `state` observable injected into them, as this would bind them to this
 particular application, making them not reusable.  
If a pure component wants to dispatch an action, it instead issues an event via `EventEmitter`,
and it's the smart component that will subscribe to the event emitter it and in response dispatch
an action.


## Observable Data Services
* Remember to always expose the `BehaviourSubject` `asObservable()`.

### Avoid duplicate http calls in ODS
This avoids duplicate http calls but beware callers won't be able to apply `retry` operations.
```typescript
storeTask(payload: Type): Observable<any> {
    return this.http.post('/path',{headers}).pipe(
        publishLast(),
        refCount(),
    )
}
``` 
