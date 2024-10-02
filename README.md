# SaaSify

SaaSify is a robust web application designed to streamline the management of service listings, enable users to add services to their cart, and facilitate auction processes. Built with **Node.js** and **EJS**, this application provides a user-friendly interface and powerful backend functionality for managing services and enhancing user experience.

## Live Demo

Explore the live version of SaaSify: [SaaSify Live](https://saasify-qndl.onrender.com/home)

## Live LOOM Video Link

[SaaSify Demo Video](https://www.loom.com/share/d80a4db1df0645e7b8175055c3465885?sid=25fb08e2-d38a-4ff1-8aa0-357dc713e890)
The video I made it quite slow, better to watch it at 2x

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [API Endpoints](#api-endpoints)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)

## Features

- **User Registration and Authentication**: Users can create an account, log in, and log out securely.
- **Service Listings**: Users can create, read, update, and delete service listings. Each listing includes a title, description, price, owner, and image.
- **Shopping Cart Functionality**: Users can add listings to their shopping cart for easy management of purchases.
- **Checkout Process**: Seamless checkout process for completing purchases.
- **Auction Feature**: Users can initiate and participate in auctions for services.
- **User Reviews**: Customers can leave reviews on listings, enhancing community feedback.
- **Privacy and Terms of Service Pages**: Inform users about policies and terms.
- **Responsive Design**: Built with Bootstrap for a modern, responsive layout across devices.

## Technologies Used

- **Node.js**: A JavaScript runtime for building the backend server.
- **Express.js**: A minimal web framework for Node.js to handle routes and middleware.
- **EJS**: A templating engine that allows embedding JavaScript in HTML.
- **Bootstrap**: A front-end framework for developing responsive web applications.
- **Cloudinary**: A cloud-based service for managing and delivering images.
- **Passport.js**: Middleware for authentication using various strategies.
- **MongoDB Atlas**: A cloud database solution that stores application data.
- **Multer**: Middleware for handling file uploads in Node.js.
- **Express-session**: Middleware for managing user sessions in Express.
- **Render**: A platform for deploying web applications.

## API Endpoints

### Authentication
- `GET /signup` - Display the signup form for new users.
- `POST /signup` - Handle new user registration.
- `GET /login` - Display the login form for existing users.
- `POST /login` - Authenticate user credentials and start a session.
- `GET /logout` - Log the user out and destroy the session.

### Listings
- `GET /listings` - Retrieve and display all available service listings.
- `POST /listings` - Create a new service listing (admin only).
- `GET /listings/new` - Show a form for creating a new service listing.
- `GET /listings/:id` - View details of a specific listing.
- `PUT /listings/:id` - Update details of a specific listing (admin only).
- `DELETE /listings/:id` - Delete a specific listing (admin only).
- `GET /listings/:id/edit` - Show a form for editing a specific listing.
- `POST /listings/:id/review` - Add a review to a specific listing.
- `DELETE /listings/:id/review/:reviewId` - Remove a review from a specific listing.

### Cart
- `GET /cart` - Display the contents of the user's shopping cart.
- `POST /cart/add` - Add a service listing to the cart.
- `POST /cart/remove/:id` - Remove a service listing from the cart.
- `POST /checkout` - Process the checkout for items in the cart.

### Auctions
- `GET /auction` - Display the auction page with active auctions.
- `POST /auction` - Create a new auction for a service listing.

### Other Pages
- `GET /home` - Render the home page of the application.
- `GET /privacy` - Display the privacy policy page.
- `GET /terms` - Display the terms of service page.

## Installation

To set up the project locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/adarshdhakar/SaaSify.git

2. **Navigate to the Project Directory**:

   ```bash
   cd SaaSify

3. **Install Dependencies: Run the following command to install the necessary packages**:

   ```bash
   npm install

## Environment Variables

Create a .env file in the root directory and include the following variables:

    CLOUDINARY_CLOUD_NAME=your_cloud_name
    CLOUDINARY_API_KEY=your_api_key
    CLOUDINARY_API_SECRET=your_api_secret
    EMAIL_USER=your_email
    EMAIL_PASS=your_email_password
    ATLASDB_URL=your_mongodb_atlas_connection_string
    SECRET=your_session_secret

## Usage
```bash
1. Start the Application: You can start the application using:
   node app.js

Or, for development with auto-reloading:

   nodemon app.js

2. Access the Application: Open your web browser and go to http://localhost:3000 (or the specified port) to access the application.

3. Create an Account: Go to the signup page to create a new account or log in if you already have one.

4. Browse Listings: Navigate through the available service listings, add items to your cart, and proceed to checkout.
