# Redux

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
