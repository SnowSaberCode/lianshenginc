# LianshengInc

This project was a company website demo which was created via Angular 17. 
It would use some new feature like standalone, route in Angular 17.

## Next Step
1. Develop Backend Asp.Net Core API.
2. Deploy this project in Docker.

## Deploy 
1. Create git deploy branch
```
git checkout -b gh-pages
```

2. Add angular-cli-ghpages to the project.
```
ng add angular-cli-ghpages
``` 

3. Deploy project to GitHub pages
```
ng deploy --base-href=/lianshenginc/
```