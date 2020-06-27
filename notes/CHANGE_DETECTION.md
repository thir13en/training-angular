# Change Detection

By default, the change detection of Angular is runt every time any template
expression has been changed. Angular scans the whole component tree when events take 
place, looking for changes.
The tradeoff is that the default change detection mechanism is quite extensive and 
can cause some performance issues on heavy applications.

### OnPush Change Detection
It is also trigger by default via an event handler (click, keyup, etc.),
Programmatic changes, for instance, assignation in the controller of the component,
will not trigger a change detection cycle thou. TODO: test this because it is
likely that changes within the same component template are indeed managed.
If a parent component mutates the data of a component with OnPush, change detection,
the change won't be detected and hence template won't be updated.  
It is important to note that if the parent component does create a new 
pointer for the object being passed to the child, then change detection is able to
recognize that there is a change and updates the view accordingly.  

### Why OnPush is more performant?
With Default change detection we check all the expressions in all the component tree
every time there is a change in one place, whereas with OnPush we can manage with
more granularity when will this take place. Also, OnPush does not check for mutations within
the objects that are passed, only new assignation to them, enforcing immutability.

### OnPush and Observables
`OnPush` Change Detection will look at the observable streams via `async` pipe,
in this case it is a highly performant and recommendable use case.
It is different thou with `subscribe and assign` method, because OnPush is quite dumb
when it comes to detect changes through assignations happening at the level of the
controller. 
