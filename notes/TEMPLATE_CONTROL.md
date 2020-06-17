# Template Control

### You can use templates that can access local component properties like this.
```angular2html
<ng-template #refName>
    {{ localVarName }}
</ng-template>
```
Also you can outlet your templates.
```angular2html
<ng-template #refName let-varName="name">
    My template content {{varName}}
    You cannot access context properties in outlet templates
</ng-template>
<div *ngTemplateOutlet="refName; context: {name: localProperty}">
</div>
<!-- can be outletted many times -->
<div *ngTemplateOutlet="refName; context: {name: anotherProperty}">
</div>
```
