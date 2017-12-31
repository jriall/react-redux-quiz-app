# Capital Cities Quiz App

https://jamesriall.co.uk/react-redux-quiz-app/

## The Project

A multiple choice quiz app using React and Redux which allows a user to be presented with a series of 10 questions testing their knowledge of capital cities. Users have the option to select whether they want to answer which country a given capital city is in, or which city is the capital of a given country. After answering each of the 10 questions, the app tells the player whether they were right or wrong (and if wrong, what the correct answer is), and also displays to the user a map showing the location of the city and country. The app keeps track of the users score as well as the current question the users is on and displays a final score and congratulations (or commiserations) message at the end of the game.

![ScreenShot](http://res.cloudinary.com/jamesriall/image/upload/v1513605314/quiz-image_j3sc4n.png)

## The Logic

Initial creation of project is handled by create-react-app, with ES Lint and Prettier used for linting and code formatting.

The views created by React are a fairly straigthforward passing down of application state via props to the various components to render the views - the majority of the users time in the application is spend in the question pages which displays data via the component's props for the current user score, the current round of the quiz, the question and answer data as well as a Google Map container centred on the correct answer's city using latitude and longitude data contained in the store. The store and action creators are connected to the Redux store using the connect function in conjunction with mapStatetoProps and mapDispatchToProps which is enabled by placing the App component within a Provider component from the React-Redux library.

The app is able to determine whether to display the start page, question page, or end page through a contitional statement in the App component which tests the current round of the application (0 is start page, 11 is end page and anything else is a question page).

This app uses Redux as its state management tool, in order to simply keep the state predictable, immutable, easy to reason about and debug.

The store is created using custom middleware and uses Redux Thunk to make an asyncronous call to the Firebase database I built to store the question data which the app uses (see the various fetch reducers and actions throughout the app, and the call to fetch data in the componentDidMount methods in the App component). Once the data has loaded the player can select which game mode to play and progress to the questions. This selection along with the user interactions of selecting an answer and progressing to a new round dispatch actions with payloads which pass through the root reducer and update the application state accordingly to respond to user selections and progress through the game.

Finally, the project was deployed using a custom deploy script to publish automatically to Github Pages.
