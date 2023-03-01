# Social Network - API

# Table of Contents
- [Social Network - API](#social-network---api)
- [Table of Contents](#table-of-contents)
- [Description](#description)
- [Installation Instructions](#installation-instructions)
- [Github Account](#github-account)
- [Images](#images)
- [Contacts](#contacts)
- [Code Snippets](#code-snippets)
- [Resources](#resources)


# Description
MongoDB is a popular choice for many social networks due to its speed with large amounts of data and flexibility with unstructured data. Over the last part of this course, you’ll use several of the technologies that social networking platforms use in their full-stack applications. Because the foundation of these applications is data, it’s important that you understand how to build and structure the API first.

Your challenge is to build an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. You’ll use Express.js for routing, a MongoDB database, and the Mongoose ODM. In addition to using the Express.js and Mongoose packages, you may also optionally use a JavaScript date library of your choice or the native JavaScript Date object to format timestamps.

No seed data is provided, so you’ll need to create your own data using Insomnia after you’ve created your API.

Because this application won’t be deployed, you’ll also need to create a walkthrough video that demonstrates its functionality and all of the following acceptance criteria being met. You’ll need to submit a link to the video and add it to the README of your project.

# Installation Instructions
- Run the application by running the following command
  - In your terminal run `npm install`
  - Then run `npm run seed`
  - Lastly, run `npm run start`

# Github Account
- [GitHub](https://github.com/ashrean)
- [Deployed Link]()

# Images
![alt text](./utils/images/Screenshot%202023-02-28%20at%2010.47.47%20PM.png)

# Contacts
- [Email](sese.ashrean@gmail.com)
- [Linkedin](https://www.linkedin.com/in/ashleyrean/)

# Code Snippets
```const express = require('express');
const db = require('./config/connection');
const routes = require('./routes')

const PORT = 3001;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', ()=> {
    app.listen(PORT, ()=> {
        console.log(`listening on ${PORT}`);
    });
});
```
# Resources
- Class Activities / Mini Projects


