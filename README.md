# SocialNetwork

## Description

This is a RESTful API for a social network application that allows users to share their thoughts, react to friends' thoughts, and manage a friend list. The API is built using **Node.js**, **Express.js**, **MongoDB**, and **Mongoose**. The API handles CRUD operations (Create, Read, Update, Delete) for users, thoughts, friends, and reactions, following the **Model-View-Controller (MVC)** design pattern.

### Video Walkthrough

A video walkthrough demonstrating the API's functionality is available here: [Video](https://bootcampspot.instructuremedia.com/embed/4ddb3e9b-2f74-424b-afa6-381225a8feb6)


## Installation

1. Clone the repository:
```git clone git@github.com:MiguelPena0101/SocialNetwork.git
```


2. Navigate into the project directory:
```cd SocialNetwork
```

3. Install the necessary dependencies:
``` npm install
```

4. Seed the database with initial data (optional):
```node seedUsers.js
```

5. Start the server:
```npm start
```

6. Use **Insomnia** or **Postman** to test the API at:
http://localhost:3001


## Usage

After installing, you can use **Insomnia** or **Postman** to interact with the API. You can perform the following operations:

- **GET** all users or thoughts
- **GET** a single user or thought by their ID
- **POST** new users or thoughts
- **PUT** to update user or thought details
- **DELETE** users or thoughts
- **POST** to add friends or reactions
- **DELETE** to remove friends or reactions


## API Routes

### Users

| Method | Endpoint              | Description                         |
|--------|-----------------------|-------------------------------------|
| GET    | `/api/users`           | Get all users                       |
| GET    | `/api/users/:id`       | Get a single user by ID             |
| POST   | `/api/users`           | Create a new user                   |
| PUT    | `/api/users/:id`       | Update a user by ID                 |
| DELETE | `/api/users/:id`       | Delete a user by ID                 |

### Thoughts

| Method | Endpoint              | Description                         |
|--------|-----------------------|-------------------------------------|
| GET    | `/api/thoughts`        | Get all thoughts                    |
| GET    | `/api/thoughts/:id`    | Get a single thought by ID          |
| POST   | `/api/thoughts`        | Create a new thought                |
| PUT    | `/api/thoughts/:id`    | Update a thought by ID              |
| DELETE | `/api/thoughts/:id`    | Delete a thought by ID              |

### Friends List

| Method | Endpoint                                      | Description                                      |
|--------|-----------------------------------------------|--------------------------------------------------|
| POST   | `/api/users/:userId/friends/:friendId`        | Add a friend to a user's friend list             |
| DELETE | `/api/users/:userId/friends/:friendId`        | Remove a friend from a user's friend list        |

### Reactions

| Method | Endpoint                                             | Description                                      |
|--------|------------------------------------------------------|--------------------------------------------------|
| POST   | `/api/thoughts/:thoughtId/reactions`                 | Add a reaction to a thought                      |
| DELETE | `/api/thoughts/:thoughtId/reactions/:reactionId`     | Remove a reaction from a thought                 |

## Technologies Used

- **Node.js**
- **Express.js**
- **MongoDB** with **Mongoose** ODM
- **JavaScript (ES6+)**
- **Insomnia** or **Postman** for API testing
- **dotenv** for environment variables

## Articles and Resources

The following articles and resources were helpful in developing this project:

- [Mongoose Documentation](https://mongoosejs.com/docs/)
- [Express Documentation](https://expressjs.com/en/starter/installing.html)
- [MongoDB: Create a REST API with Node.js](https://www.mongodb.com/languages/express-mongodb-rest-api-tutorial)
- [How to Use Postman for API Testing](https://learning.postman.com/docs/getting-started/introduction/)
- [Understanding CRUD Operations in REST API](https://restfulapi.net/crud/)