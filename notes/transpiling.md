# Transpiling

### Angular Compiler
The module responsible for transpiling Angular code to native JS is the `@angular/compiler-cli`,
it provides actually a wrapper to the TypeScript compiler, `tsc`, named `ngc`.

### Running the compiler manually
This new executable named `ngc` will look for Angular component classes, and it will 
output another `Typescript` file, the `component factory`. We can run the executable:
```bash
./node_modules/.bin/ngc -p ./src
```
This assumes that `src` contains the `tsconfig.json` of your application. In the case of 
our `main.ts` component, this would create a file next to it named `main.ngfactory.ts`, that 
might contain something similar to this:
```javascript
export const AppModuleNgFactory:import0.NgModuleFactory<import1.AppModule> = new import0.NgModuleFactory(AppModuleInjector,import1.AppModule);
var renderType_HelloWorld_Host:import34.RenderComponentType = null;

class _View_HelloWorld_Host0 extends import35.AppView<any> {
  _el_0:any;
  private _appEl_0:import36.AppElement;
  _HelloWorld_0_4:import1.HelloWorld;
  constructor(viewUtils:import37.ViewUtils,parentInjector:import19.Injector,declarationEl:import36.AppElement) {
    super(_View_HelloWorld_Host0,renderType_HelloWorld_Host,import38.ViewType.HOST,viewUtils,parentInjector,declarationEl,import39.ChangeDetectorStatus.CheckAlways);
  }
  
  createInternal(rootSelector:string):import36.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n                ',null);
    this._el_1 = this.renderer.createElement(parentRenderNode,'h1',null);
    this._text_2 = this.renderer.createText(this._el_1,'Hello World !',null);
    this._text_3 = this.renderer.createText(parentRenderNode,'\n                ',null);
// ...
```
This is actually a bit outdated, and has more to do with the old renderer, the `ViewEngine`, 
with the new `Ivy` renderer, the situation might look different.  
As you can see, the constructor is extended to receive some core injectables, like for example renderers 
The compiler uses the renderer to output the HTML by creating DOM elements, text content etc.
This is actually what an Angular renderer looks like under the hood, and except for the names of the 
variables it's actually quite close to what we would have written by hand.
