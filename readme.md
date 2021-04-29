# Tech Blog using MVC Architecture [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description


## Built With
JavaScript, ES6, Node.js (express-handlebars, mysql2, sequelize, nodemon, dotenv, bcrypt, express-session, connect-session-sequalize), HMTL, CSS.

## Table of Contents
* [User-Story](#User-Story)
* [Acceptance-Criteria](#Acceptance-Criteria)
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Screenshot](#Screenshot)
* [Questions](#Questions)

### User-Story
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions

### Acceptance-Criteria
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted;
 navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments

### Installation
To download the application, use 
```git clone ```. 
Inorder to install the necessary dependencies run 
```npm install``` 
in your terminal. 

### Usage
After installing all the dependencies, set up the .env file with the username, password and database name. Then, enter 
```npm start``` 
to check if the server is running without any error. If it runs then enter
```npm run seed``` 
in your terminal to run the seed. For a walkthrough demo click here [Walkthrough-Video](https:).

### License
This application is covered under the following license. 

**MIT**

### Contributing 
No contributions at the moment. If anyone wishes to provide contributions, please contact the author.

### Tests
No test is set up for this application.

### Screenshot
![code](./assets/)

### Questions
If you have any questions, please reach out to the<br>
Author: Janarthani V S <br>
Email 📧: janarthani.vs@gmail.com <br>
Author's github profile: [GitHub](https://github.com/vsjanarthani)
