# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

**### Challenges Faced and Resolutions**

    Dynamic Progress Bar State:
        Challenge: Ensuring the progress bar dynamically reflects the current step.
        Resolution: Used conditional rendering to set the active and completed states for the steps.

    Complex Layout Alignment:
        Challenge: Aligning multiple sections in the form to match the design precisely.
        Resolution: Utilized CSS Flexbox and Grid for fine-grained control over alignment and spacing.

    Responsive Design:
        Challenge: Making the layout responsive for smaller screens while preserving the design.
        Resolution: Used media queries to adjust font sizes, padding, and layout styles for smaller devices.

    File Upload Functionality:
        Challenge: Simulating file upload functionality for documentation sections.
        Resolution: Added upload buttons with labels to mimic the expected behavior and planned integration with file input elements in the future.

    Styling Consistency:
        Challenge: Maintaining uniform styling across all components (e.g., colors, fonts, shadows).
        Resolution: Used a centralized CSS file with reusable utility classes for styling consistency.

**### Assumptions Made**

    Mock Data:
        The form fields (e.g., "Claim Value," "Place," "Language") are static and don't fetch data from an API for now.

    File Uploads:
        The file upload functionality is a placeholder for actual upload functionality that would connect to a backend or cloud storage.

    Progress Bar States:
        Progress bar steps were assumed to represent fixed stages, with the "04 Parties" step as the current active stage.

    Responsive Layout:
        Assumed the layout should support modern web browsers and screen sizes, but specific breakpoints for mobile or tablet views were not provided.

    Interactivity:
        Limited interactivity was implemented, assuming advanced features (e.g., form validation, API integration) would be added later.



This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
