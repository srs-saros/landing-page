# landing-page

Page that presents the SRS project to external users

# Contribute

To execute and develop in local this project:

1. Check your Node version as [detailed here](#node-version).
2. Install dependencies inside the root folder with `npm install`.
3. Create a local file `.env.local` with the required variables as shown in the `.env` of example file.
4. Execute `npm run start` to start the project.

## Available scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run lint`

Runs ESLint in a quiet mode and checks coding/formatting errors.

# Notes

## Node version

The current project is being developed with the Node version specified in the `.nvmrc` file. You can check your Node version with `node --version` and use/change it if appropiated or use something like [nvmrc](https://github.com/nvm-sh/nvm/blob/master/README.md) and execute `nvm use` in the root folder of the project to set to the project version.

## Git hooks

We have set a `pre-push` git hook to be executed _before each push_ that runs the lint and test validations in order to avoid having testing, formatting and coding standards errors.

<sub>This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).</sub>
