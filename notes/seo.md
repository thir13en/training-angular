# SEO in Angular

### Title and Meta services
`Angular` has two Injectable services available: `Title` and `Meta` services,
imported from `@angular/platform-browser`. What these services do is allow us to
dynamically (JavaScript) add or change or `title` and `meta` tags in the `head` of our
SPA. The good thing about these services is that Angular Universal is intelligent enough
to use them to statically serve the tags before serving the content in SSR, which makes
our site SEO friendly for those crawlers that don't know how to interact with JavaScript 
(i.e. not Google).
