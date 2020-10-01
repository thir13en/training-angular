# Redux

### Some History
Before the Flux pattern got adopted at Facebook to solve the unread messages notification problem,
global state of the app used to be managed via `Custom Global Events`, but the problem with these
is that they do inform the rest of the components of a certain change in the state of a part of the app
but they are **NOT** a command, they do not inform to the receivers on what to do with that information.
For that, the `Flux` and later the evolution of it, `Redux`, implemented the `Command And Query Responsability 
Segregation` pattern.  

### The most common Redux-like solution for Angular is NgRx
Redux is specially useful for apps that display the same information in many ways,
if we do not centralize the way this information is manages, we have to develop strategies to
manage it in many places, which makes the application exponentially more complex, so is it
a matter of creating applications that scale on complexity.
