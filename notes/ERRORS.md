# Common Errors


### ExpressionChangedAfterItHasBeenCheckedError
Very common when we try to change data *synchronously* in the `AfterViewInit` 
lifecycle hook. It is important to avoid any data modification operation to be done
in this lifecycle hook *synchronously*, if it is async, it is ok, because it will
modify the data in another JS virtual machine turn. It is basically telling us
that we are breaking the unidirectional data flow of the framework.
