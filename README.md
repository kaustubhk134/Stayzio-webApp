## 🏠 Stayzio-webApp

### Stayzio - Full-Stack Web Application

Stayzio is a full-stack web application built with **Node.js**, **Express**, **MongoDB**, and **EJS**. It allows users to browse and review listings for various places, along with the ability to sign up, log in, and manage user sessions. The app is deployed on **Render**, providing a fully functional cloud-based platform.

### Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Folder Structure](#folder-structure)
- [License](#license)

### Project Overview

Stayzio is a simple listing and review platform that lets users browse various locations, post reviews, and interact with listings. Users can register, log in, and manage their profiles. The project implements essential features such as:

- **MVC Framework**: The application follows the **Model-View-Controller (MVC)** architecture, keeping the code organized and easy to manage. 
    - **Model**: Contains the database schema and interaction logic (in `models` folder).
    - **View**: The EJS templates that present data to the user (in `views` folder).
    - **Controller**: Handles user requests, processes the data, and communicates with the Model (in `controllers` folder).
  
- **Authentication**: User authentication is implemented using **Passport.js** and **MongoDB**. Users can register, log in, and manage their profiles securely.

### Tech Stack

- **Backend**: Node.js, Express.js
- **Frontend**: EJS (Embedded JavaScript Templating)
- **Database**: MongoDB, Mongoose
- **Authentication**: Passport.js, Passport-Local, Passport-Local-Mongoose
- **File Upload**: Multer, Multer-Storage-Cloudinary
- **Session Management**: Express-session, Connect-mongo
- **CSS**: Custom styles, basic responsive design

### Features

- **User Authentication**: Sign up, login, and logout functionality with session management.
- **Listings**: Users can view, create, edit, and delete listings.
- **Reviews**: Each listing has its own review section, where users can leave reviews.
- **Responsive Design**: Basic styling to make the app look good on different screen sizes.
- **Flash Messages**: Feedback messages for success and errors throughout the application.
- **Image Uploads**: Integration with Cloudinary for listing and review images.
  
### Installation

##### Prerequisites

Make sure you have the following installed on your system:

- **Node.js** (v18.19.1 or newer)
- **MongoDB** (or a MongoDB Atlas account for cloud storage)

##### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/kaustubhk134/Stayzio-webApp.git
   ```
2. Install the required dependencies:
    ```bash
    npm install
    ```
3. Set up your environment variables by creating a .env file in the root of the project. The .env   file should contain:
    ```bash
    ATLASDB_URL=your_mongodb_atlas_connection_string
    SECRET=your_secret_key_for_sessions
    ```

4. Run the application locally:
    ```bash
    node app.js
    ```
On local system the server will be running on http://localhost:3000.

#### Important Files

- .env: Contains sensitive configuration like MongoDB URL and secret keys.
- package.json: Lists the project dependencies.
- app.js: The main server file where all routes, middleware, and configurations are initialized.

#### Usage
##### User Registration and Login
Users can sign up and log in using the following routes:

- Sign Up: /users/signup
- Login: /users/login
- Logout: /users/logout

Upon logging in, users will be able to interact with the listings, post reviews, and see personalized content.

#### Deployment
This project is deployed on **Render**. Follow these steps to deploy it on your own:

1. Create an account on Render.
2. Create a new Node.js Web Service and connect your GitHub repository.
3. Add environment variables in the Render dashboard:
    - ATLASDB_URL: Your MongoDB Atlas connection string.
    - SECRET: A secret key for sessions.

Render will automatically build and deploy the app, and you can access it through a provided URL.
**Project URL:**   [Stayzio-webapp](https://stayzio-webapp.onrender.com/listings)

#### Folder Structure:
```bash
Stayzio-webapp/
├── controllers/
│   ├── listings.js
│   ├── reviews.js
│   └── users.js
├── init/
│   ├── data.js
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── models/
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── public/
│   ├── css/
│   │   ├── rating.css
│   │   └── style.css
│   └── js/
│       ├── map.js
│       └── script.js
├── routes/
│   ├── listings.js
│   ├── review.js
│   └── user.js
├── utils/
│   ├── ExpressError.js
│   └── wrapAsync.js
├── views/
│   ├── includes/
│   │   ├── flash.ejs
│   │   ├── footer.ejs
│   │   └── navbar.ejs
│   ├── layouts/
│   │   └── boilerplate.ejs
│   ├── listings/
│   │   ├── edit.ejs
│   │   ├── index.ejs
│   │   ├── new.ejs
│   │   └── show.ejs
│   ├── users/
│   │   ├── login.ejs
│   │   ├── signup.ejs
│   │   └── error.ejs
├── .env
├── .gitignore
├── app.js
├── cloudConfig.js
├── credits.txt
├── middleware.js
├── package.json
├── README.md
└── schema.js
```

<!-- > A full-stack web application, built with the MERN stack.  
> 🚧 This project is currently a **Work in Progress** – features and UI are actively being developed.

---

## 📌 Project Status

🚧 **Work in Progress**  
Core structure is being built – UI, backend API, and database models are under development.  
Check back for regular updates!  
✅ Latest: Initial project setup complete. Frontend & backend integration in progress. -->
