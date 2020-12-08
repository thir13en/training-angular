# Components

Angular `Components` are directives with a template, don't forget that men! Components can be `smart`or `dumb/pure`.

### Differences between `Components` and `Directives`
* `Components` are `Directives` with a `template`.
* Each DOM element can only have one `Component`, but many `Directives`.  

### Events
With events, it's very easy to fall into the situation of using an event to trigger an action in an external component. The key thing to bear in mind about events, is that in order to keep the event emitter decoupled from the subscriber, **the emitter should only report about changes on its internal state**.

### TODO: learn about [component harness](https://indepth.dev/create-a-component-harness-for-your-tests-with-angular-cdk/)

### Smart vs Presentational
* **Smart** or **Container** do have business logic and know how to retrieve and distribute data.
* **Presentational**, **pure** or **dummy** components just receive data as an input and paint it on the screen.
Sometimes, you will need to inject a smart component deep into the component tree, so don't assume that a smart component
is limited to the main pages of your app.
