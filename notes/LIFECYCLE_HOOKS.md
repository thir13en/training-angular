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

### DoCheck
Is going to get called every time Angular runs a change detection cycle in a given
Component. It is very handy to implement some custom change detection logic.

