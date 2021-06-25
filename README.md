# Algorithm
from the YouTube video

getBase(base)

Edge case: if the base is not a whole number -- deal with this here.

Base is a whole number.
Base cases: (haha!)
If the base is one of the named cases (0-13, 16, 17, 20, 36, 100): Return the relevant name.
Otherwise:
    If the number is prime: Append "un" to output. Run again with getBase(base - 1).
    If the number is composite: 
        If it can be factored into two named cases:
            Run with getPrefix(smaller), getBase(larger).
        Otherwise:
            Find the closest two factors. (NB: This can likely be helped with square root.)
            Run with getPrefix(smaller), getBase(larger).

getPrefix(base)
Assume the base is a natural number > 1.
If the base is one of the named cases: return the relevant name.
Otherwise:
    If the number is prime: Return "hen" + getPrefix(base - 1) + "sna".
    If the number is composite:
        If it can be factored into two named cases:
            Run with getPrefix(smaller), getPrefix(larger).
        Otherwise:
            Find the closest two factors.
            Run with getPrefix(smaller), getPrefix(larger).

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

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

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
