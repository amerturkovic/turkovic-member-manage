# Turkovic Member Manage Experimental App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.20.

## Notes:

I have set the Members module to be lazy loaded even though the size of this project does not require it. If this app would scale up this would improve the performance and initial load of the app.

Each module is structured to have Pages (smart components) and Components (dumb components) used just to display data from the pages. There is also ‘shared’ folder to house all common elements where I would store also module-based services to allow full separation of the code.

I created all pages and components needed to handle all full CRUD operations, but I will probably will not do all of them due to the time constrain. 

In the form used to add a member I use a combination of the Angular form validators and DOM attributes. I included the reset button even though the form might be to small for that. If I had more time I would make error messages more specific to the issue (e.g. One for a required field another for invalid input format). On successful member creation I would take a user back to the members list page.

I used ‘angular-in-memory-web-api’ module to simulate CRUD data persistence operations without a real server. More info on it can be found here: https://www.npmjs.com/package/angular-in-memory-web-api. If I had enough time I would use BehaviorSubject and subscribe to it for all getMembers calls. Currently, on deleteMember call I remove a member from the list on response instead of just using the subject to fire next(data) on any updates to the member list data.

I also created a component to display the list of available member, members.component, and add a feature to delete a member from the list. I added a deletion confirmation dialog for better user experience. On successful deletion I just added a filter to deleteMember response array to remove deleted member from the list. 

The date property added to IMember interface to allow sorting of the members array by date starting with a latest member.

I ran out of the time and did not get chance to do 2 things:
- Add additional unit testing. You will find the one created with CLI.
- Troubleshoot chart to render on initial load. It works if you resize the window. I have never used D3 library before.

## Clone the repo and install npm dependencies

1. clone the repo to your local drive
2. cd `turkovic-member-manage`
3. run `npm install`

## Development server

Run `ng serve --open` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

