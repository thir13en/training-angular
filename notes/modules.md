# Modules


An Angular Module is mainly a **template compilation context**, but it also helps to define
a public API for a subset of functionalities, as well as help with the dependency 
injection configuration of our app.

To type-check and generate code, the compiler needs to know which directives, components, and pipes are used in each component’s template. This isn’t straightforward because **Angular components don’t directly import their dependencies**. Instead, Angular components describe templates using HTML, and potential dependencies are matched against elements in those templates using CSS-style selectors. This enables a powerful abstraction layer: **Angular components do not need to know exactly how their dependencies are structured**. Instead, each component has a set of `potential dependencies` (its *template compilation scope*), only a subset of which will end up matching elements in its template.

### Motivation
Each HTML tag goes through a comparison to a list to see if a component should be applied on 
top of it, the same goes for each attribute. The problem is: how does Angular know which components, 
directives and pipes should it be looking for while parsing the HTML? Modules are the responsibles for
providing this list.

### Providers Array
Includes `Components`, `Directives` and `Pipes`.
