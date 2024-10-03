# SaaSify

SaaSify is a robust web application designed to streamline the management of service listings, enable users to add services to their cart, and facilitate auction processes. Built with **Node.js** and **EJS**, this application provides a user-friendly interface and powerful backend functionality for managing services and enhancing user experience.

<table>
  <tr>
    <td><img src="docs/images/1.png" alt="Sample Image 1" width="500"></td>
    <td><img src="docs/images/2.png" alt="Sample Image 2" width="500"></td>
  </tr>
</table>
<table>
  <tr>
    <td><img src="docs/images/3.png" alt="Sample Image 3" width="500"></td>
    <td><img src="docs/images/4.png" alt="Sample Image 4" width="500"></td>
  </tr>
</table>

## Live Demo

Explore the live version of SaaSify: [SaaSify Live](https://saasify-qndl.onrender.com/home)

## Live LOOM Video Link

[SaaSify Demo Video](https://www.loom.com/share/21ffbf421afa4a55ab194db9817690cf?sid=46796621-19cc-494c-94ff-9fe1fdb85161)
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
<table>
  <tr>
    <td><img src="docs/images/5.png" alt="Sample Image 5" width="500"></td>
    <td><img src="docs/images/6.png" alt="Sample Image 6" width="500"></td>
  </tr>
</table>

- **Service Listings**: Users can create, read, update, and delete service listings. Each listing includes a title, description, price, owner, and image.
<table>
  <tr>
    <td><img src="docs/images/7.png" alt="Sample Image 7" width="500"></td>
    <td><img src="docs/images/8.png" alt="Sample Image 8" width="500"></td>
  </tr>
</table>
<table>
  <tr>
    <td><img src="docs/images/9.png" alt="Sample Image 9" width="500"></td>
    <td><img src="docs/images/10.png" alt="Sample Image 10" width="500"></td>
  </tr>
</table><table>
  <tr>
    <td><img src="docs/images/11.png" alt="Sample Image 11" width="500"></td>
    <td><img src="docs/images/12.png" alt="Sample Image 12" width="500"></td>
  </tr>
</table>
<table>
  <tr>
    <td><img src="docs/images/14.png" alt="Sample Image 13" width="500"></td>
  </tr>
</table>

- **Shopping Cart Functionality**: Users can add listings to their shopping cart for easy management of purchases.
<table>
  <tr>
    <td><img src="docs/images/15.png" alt="Sample Image 14" width="500"></td>
    <td><img src="docs/images/16.png" alt="Sample Image 15" width="500"></td>
  </tr>
</table>

- **Checkout Process**: Seamless checkout process for completing purchases.
<table>
  <tr>
    <td><img src="docs/images/13.png" alt="Sample Image 16" width="500"></td>
  </tr>
</table>

- **Auction Feature**: Users can initiate and participate in auctions for services.
<table>
  <tr>
    <td><img src="docs/images/17.png" alt="Sample Image 17" width="500"></td>
    <td><img src="docs/images/18.png" alt="Sample Image 18" width="500"></td>
  </tr>
</table>

- **User Reviews**: Customers can leave reviews on listings, enhancing community feedback.

- **Privacy and Terms of Service Pages**: Inform users about policies and terms.
<table>
  <tr>
    <td><img src="docs/images/19.png" alt="Sample Image 19" width="500"></td>
    <td><img src="docs/images/20.png" alt="Sample Image 20" width="500"></td>
  </tr>
</table>

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
