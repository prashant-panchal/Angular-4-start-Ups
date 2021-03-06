# Test Project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.0.

## Add Bootstrap 4 to Angular project

Install bootstrap Alpha release using NPM:

Run `npm install --save bootstrap@4.0.0-alpha.6`.

We chose a specific version to ensure future releases doesn’t break the sample. Optionally, run the following command to install the latest pre-release package.

Run `npm install –save bootstrap@next`.

Once the package is downloaded, add Bootstrap references in .angular-cli.json.

Modify styles configuration to add Bootstrap CSS

`
styles": [
    "../node_modules/bootstrap/dist/css/bootstrap.min.css",
    "styles.css"
],`

Modify scripts configuration to add jQuery, Bootstrap and Tether JS files.

`"scripts": [
    "../node_modules/jquery/dist/jquery.min.js",
    "../node_modules/tether/dist/js/tether.min.js",        
    "../node_modules/bootstrap/dist/js/bootstrap.min.js"
],`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
