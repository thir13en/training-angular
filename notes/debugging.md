# Debugging

### Debugging with the Ivy Renderer
You can debug now accessing the global `ng` object. You can go to the devtools, click on an Angular Element, and you will have it 
at your disposal as `$0` in the console. You can now use:
```javascript
const ngComponent = ng.getComponent($0);
// now you can start interacting with it
ngComponent.toggle(); // if it was a mat drawer for example

ng.applyChanges(ngComponent); // triggers a change detection cycle in the component
```
