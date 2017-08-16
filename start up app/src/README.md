# Project Architecture

Project application is defined into 3 layer architecture.

`1. App module
 2. Dashboard overlay
 3. Component
 `

## App Module

App module initialize the required components and main component leads to bootstrap the app. App Module renders the shared components Header and footer.

` <app-header></app-header>
    <app-dashboard></app-dashboard>
   <app-footer></app-footer>
`

## Dashboard overlay 

Dashboard component is a `sub-component` which carries the Home and User components. Dashboard component uses router to render the corresponding component with the help of path defined in the `dashboard.route-config.ts`.

## Components

component where actual use cases are written.