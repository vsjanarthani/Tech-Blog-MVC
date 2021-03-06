# Tech Post using MVC Architecture [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
This is an application for creating Blog posts. The application allows users to create an account and post their blog posts. Users can also edit/delete their own posts and leave comment on other's post after logging in. Anyone view the homepage which contains blog posts posted by other users. Anyone can view individual posts and its comments as well. To perform other actions, login is required. 

## Built With
Node.js (express-handlebars, mysql2, sequelize, nodemon, dotenv, bcrypt, express-session, connect-session-sequalize), HMTL, CSS, MDB, JavaScript, ES6, Heroku, Git.

## Table of Contents
* [User-Story](#User-Story)
* [Acceptance-Criteria](#Acceptance-Criteria)
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Screenshot](#Screenshot)
* [Deployed-Link](#Deployed-Link)
* [Questions](#Questions)

### User-Story
AS A developer who writes about tech <br>
I WANT a CMS-style post site <br>
SO THAT I can publish articles, post posts, and my thoughts and opinions

### Acceptance-Criteria
GIVEN a CMS-style post site <br>
WHEN I visit the site for the first time <br>
THEN I am presented with the homepage, which includes existing post posts if any have been posted;
 navigation links for the homepage and the dashboard; and the option to log in <br>
WHEN I click on the homepage option <br>
THEN I am taken to the homepage <br>
WHEN I click on any other links in the navigation <br>
THEN I am prompted to either sign up or sign in <br>
WHEN I choose to sign up <br>
THEN I am prompted to create a username and password <br>
WHEN I click on the sign-up button <br>
THEN my user credentials are saved and I am logged into the site <br>
WHEN I revisit the site at a later time and choose to sign in <br>
THEN I am prompted to enter my username and password <br>
WHEN I am signed in to the site <br>
THEN I see navigation links for the homepage, the dashboard, and the option to log out <br>
WHEN I click on the homepage option in the navigation <br>
THEN I am taken to the homepage and presented with existing post posts that include the post title and the date created <br>
WHEN I click on an existing post post <br>
THEN I am presented with the post title, contents, post creator???s username, and date created for that post and have the option to leave a comment <br>
WHEN I enter a comment and click on the submit button while signed in <br>
THEN the comment is saved and the post is updated to display the comment, the comment creator???s username, and the date created <br>
WHEN I click on the dashboard option in the navigation <br>
THEN I am taken to the dashboard and presented with any post posts I have already created and the option to add a new post post <br>
WHEN I click on the button to add a new post post <br>
THEN I am prompted to enter both a title and contents for my post post <br>
WHEN I click on the button to create a new post post <br>
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new post post <br>
WHEN I click on one of my existing posts in the dashboard <br>
THEN I am able to delete or update my post and taken back to an updated dashboard <br>
WHEN I click on the logout option in the navigation <br>
THEN I am signed out of the site <br>
WHEN I am idle on the site for more than a set time <br>
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments <br>

### Installation
To download the application, use 
```git clone https://github.com/vsjanarthani/Tech-Blog-MVC.git```. <br>
Inorder to install the necessary dependencies run 
```npm install``` 
in your terminal. 

### Usage
After installing all the dependencies, set up the .env file with the username, password database name and session_key. <br> Then, enter 
```npm start``` 
to check if the server is running without any error. <br> If it runs, then enter
```npm run seed``` 
to run the seed.

### License
This application is covered under the following license. 

**MIT**

### Contributing 
No contributions at the moment. If anyone wishes to provide contributions, please contact the author.

### Tests
No test is set up for this application.

### Screenshot
![code](./assets/screenshot.png)

### Deployed-Link
The application is deployed on Heroku. Link to the deployed application [https://my-tech-blog-mvc.herokuapp.com/](https://my-tech-blog-mvc.herokuapp.com/)
### Questions
If you have any questions, please reach out to the<br>
Author: Janarthani V S <br>
Email : <janarthani.vs@gmail.com> <br>
Author's github profile: [GitHub](https://github.com/vsjanarthani)
