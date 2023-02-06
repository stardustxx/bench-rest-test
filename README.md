# Bench Rest Test

This repo contains the implementation for the Bench test.

## Dev

To run the project:

```shell
npm start
npm run dev
```
It should give you a link to a localhost that you can access on your local machine.

To run the test:

```shell
npm test
```

To create a production build:

```shell
npm run build
```

## Library

**React 18:** The JavaScript framework / library used to render the UI.

**TypeScript:** Language chosen throughout the project.

**MUI 5:** The component library for quickly set up the UI and component styling.

**React Router 6.8:** Router library that allows routing and navigation on the client side.

**React Query 4.22:** Reactive style in hooks for easy API querying.

**Jest 29:** The unit test framework for running our unit tests.

**date-fns 2.29:** Date library for checking if date is valid and easy date formatting.

**Vite 4.1:** The build tool for development server and producing the production build.

**SWC:** The compiler chosen for building the React projects and Jest unit tests.

## File Structures

Codes are split into multiple folders that they should belong to based on what they are such as components go to `components` folder and hook go to `hooks` folder. This gives clear direction where things might be even for a new contributor that is getting onboard. As time goes on or when the project gets more complex, we should revisit this structure as we may need more layers or separate them based on what these features do in business terms.

## What could be better

* The requirements and mockup don't include the need for pagination but in real world app we should have pagination so we don't wait for the data indefinitely nor waiting for the client to finish rendering everything. It could be a simple pagination component or infinite scroll. Such decision should be based on UX as either has its own pros and cons

* In unit test I took the shortcuts to mock the `useTransactions` hook which is responsible for fetching the data directly. It might make sense in unit test since I'm only testing for this particular component. In real world app I would set up mock service worker so I don't need to mock `fetch`. This should help clean up any other setup for mocking `fetch` and gives a simple way to control what data you'd like to get in any tests.

* If this app were to be deployed to production, CI/CD pipelines should be set up so we can run tests, linting, and other checking when we create a PR and auto deploy after merged.

* We might also need to check if responsive design is necessary so we use and view this app on any screen sizes.

* I have hardcoded some of the strings in the table header but we should, if business requires, set up some sort of i18n solution so for developers we are only referring to text keys but values can be in any languages.

* In the mockup it doesn't suggest why Company names could be in different color so I just alternated between 2 colors based on their indices.

* It also seems we have some fields that are empty. I could show N/A in their places or backend should make sure it is not empty.

* Dates don't include a timezone which could potentially make the frontend display the dates incorrectly without proper assumption and different browsers also react to it differently.