# Jobbing-front-end

## Jobbing is a small web-app made to make the job searching process more organized to achieve better results! It lets the user keep track of their job applications, document important details about their targeted companies, and set reminders for following up with recruiters (or Hiring managers).


This repository holds the front-end aspect of the Jobbing project

### Author: Hanna Alemu

### Common npm Scripts
 "lint": "eslint \"**/*.js\"",  
   "start": "node index.js",  
   "test": "jest --verbose --coverage",  
   "test-watch": "jest --watchAll --verbose --coverage",  
   "jsdoc": "jsdoc -c ./docs/config/jsdoc.config.json",  

### Documentation - Styleguidist


### Links and Resources
* [submission PR](http://xyz.com)
* [travis](http://xyz.com)
* [back-end](https://jobbing-back-end.herokuapp.com/)
* [front-end](https://jobbing-front-end.herokuapp.com/) 


### Modules

### Setup


#### Running the app
* `npm start`
* Endpoint: `/job`
  * Returns a JSON object with all the jobs that the user has in the database in it. job/id allows the user to Update or delete the job.
* Endpoint: `/signup`
  * Signup for the website.
* Endpoint: `/signin`
    * Signin using username and password, or use postman for Bearer Authentication using a token.

  
#### Tests
npm run test

#### UML
