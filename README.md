# React Login App
This is a simple login app. Your goal is to improve the app doing following tasks. (Clone this repository and place in on your github)

## Tasks
1. - [x] Add reactstrap library and rework the login form using bootstrap styles
2. - [x] Add React Router library, move Login form to /login route (and make it default route)
3. - [x] Replace login fetch with axios library
4. - [x] Move API base url to environment variable
6. - [x] Add validation for the login form (with error handling from the API)
7. - [x] Add empty /dashboard route and redirect user to the Dashboard after logging in
8. - [x] Store User token in cookies after logging in
9. - [x] Create public route for /login and private route for /dashboard (user should be redirected from /dashboard to /login if is not logged in)
10. - [x] When User enters private route, get User data from API (GET /user) and store it using React Context
11. - [x] Add Bootstrap Navbar to the Dashboard view 
12. - [x] Using React Context display User first name and last name in the Navbar
13. - [x] Add logging out functionality (clear session). Place it in the Navbar

## Running the app
### `npm run mock`
Runs mock API for the app.
### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
