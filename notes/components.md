# Components

Angular `Components` are directives with a template, don't forget that men!

### Events
With events, it's very easy to fall into the situation of using an event to trigger an action in an external component. The key thing to bear in mind about events, is that in order to keep the event emitter decoupled from the subscriber, **the emitter should only report about changes on its internal state**.

### TODO: learn about [component harness](https://indepth.dev/create-a-component-harness-for-your-tests-with-angular-cdk/)
