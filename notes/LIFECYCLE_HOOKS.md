# Lifecycle Hooks

Lifecycle hooks are not meant to be called by the developer, for example, don't do this.
```angular2
this.ngOnInit();
```

### OnInit
The constructor should not contain any logic at all, any logic shall go 
in the `ngOnInit` LCH, this is specially so if we need to get some data form the
`@Input` decorator.

### OnDestroy
Great place for releasing resources originated and used by the component.

### AfterViewInit
The earliest possible moment where we can safely query all the elements 
that are populated from the template rendering of the component.

### AfterContentInit
The earliest possible moment where we can safely query all the elements 
that are populated from the component content projection.

### AfterContentChecked
This hook will be called from the beginning, every time Angular triggers a change detection
cycle, checking for changes in the directive content.  
Remember Angular components are directives with a template, so be aware this lifecycle hook will be 
triggered with every change detection cycle, being a good place for las minute actions regarding it.  
Careful with system intensive operations, because this lfh is called many times and is NOT the place
for expensive operations.  
This LCH is related to projected content in our component, if we try to mutate the projected content in it
we will get an error `ContentChangedAfterItHasBeenCheckedError`.

### AfterViewChecked

### DoCheck
Is going to get called every time Angular runs a change detection cycle in a given
Component. It is very handy to implement some custom change detection logic.

### OnChanges
Allows us to add callback logic to the change detection mechanism of Angular,
it gives information of the past state of the component and new state to be filled in,
so we can compare status and which changes are taking place.  
The type that this LFH receives as parameter is `SimpleChange`.  
Mutations of the reference inside the same component will NOT trigger OnChanges lifecycle hook,
rather mutations of the input elements that the component receives will.  
If instead of mutating the data, we create a new instance of it via a new reference (totally replacing)
the OnChanges LCH will indeed be triggered.
