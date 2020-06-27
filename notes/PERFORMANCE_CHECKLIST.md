# Performance Checklist


1. All `Componenents` have `ChangeDetectionStrategy.OnPush`.
1. All non bind attribute types are NOT passed via `@Input()`
decorator but via de `@Attribute` decorator in the constructor of the 
child component.
