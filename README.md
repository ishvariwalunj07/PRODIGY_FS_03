# 🛍️ – MERN Stack E-Commerce Web Application – .

---

## Project Overview

_A full-stack E-Commerce web application built using the MERN Stack (MongoDB, Express.js, React.js, Node.js) and styled with Tailwind CSS. The platform supports user authentication, product browsing, orders, and an Admin panel where only admins can upload and manage products._

_This project is designed to simulate a real-world shopping platform with proper role-based access control and scalable architecture._


## Technologies & Packages Used

### Backend
- **Node.js**: JavaScript runtime for server-side development.
- **Express.js**: Framework for building RESTful APIs.
- **MongoDB**: NoSQL database for storing application data.
- **Mongoose**: ODM library for MongoDB.
- **Bcrypt**: Used for password hashing and security.
- **JSON Web Token (JWT)**: Used for authentication and authorization.
- **CORS**: Enables cross-origin resource sharing.
- **Dotenv**: Loads environment variables from `.env` file.
- **Validator**: Used for validating user input.
- **Multer**: Middleware for handling file uploads.
- **Cloudinary**: Cloud-based image storage service.
- **Razorpay**: Payment gateway integration.
- **Nodemon**: Automatically restarts server during development.

### Frontend
- **React.js**: Library for building user interfaces.
- **React Router DOM**: Handles client-side routing.
- **Axios**: Used for API requests.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React Toastify**: Displays toast notifications.

### Admin Panel
- **React.js**: Admin dashboard UI.
- **React Router DOM**: Routing for admin pages.
- **Axios**: API communication.
- **React Toastify**: Notification handling.


## Key Features

- **User Authentication:** Login, Sign Up, and Logout functionality.
- **Product Browsing:** View products on Home and Collection pages.
- **Product Details:** View detailed information of each product.
- **Cart & Orders:** Add products to cart and place orders.
- **Order Management:** Users can view their order history.
- **Admin Panel:** Separate admin panel for product management.
- **Product Upload:** Only admin can add, update, or delete products.
- **Image Upload:** Product images upload using Cloudinary.
- **Online Payments:** Secure payment using Razorpay.
- **Notifications:** Toast notifications for user actions.
- **Responsive Design:** Fully responsive UI using Tailwind CSS.


## How to Install

Follow these steps to set up and run the project locally:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/Mohit-Rajak/E-Commerce-Website.git
   cd FashionWebsite


2.  **Install Dependencies:**
    Frontend Folder :

    ```bash
    cd frontend
    npm install
    ```

    Backend Folder :

    ```bash
    cd backend
    npm install
    ```

    Admin Folder :

    ```bash
    cd admin
    npm install
    ```


4.  **Set Up Environment Variables:**

    Configure the following environment variables by creating a .env file in the root of Forntend and Backend Folder:

    Frontend Folder :

    ```bash
    VITE_BACKEND_URL=http://localhost:4000
    ```

    Backend Folder :

    ```bash
    FRONTEND_URL=http://localhost:5173
    MONGODB_URI=mongodb://127.0.0.1:27017/FashionWebsite
    PORT=4000
    JWT_SECRET=secret-kvndkvdlkajkhkJkBiu6JJNjkbhkvnskcmhLJ5dKbkjsamnv
    CLOUDINARY_NAME=your_cloudinary_name
    CLOUDINARY_API_KEY=your_cloudinary_key
    CLOUDINARY_API_SECRET=your_cloudinary_secret
    RAZORPAY_KEY_ID=your_razorpay_key
    RAZORPAY_KEY_SECRET=your_razorpay_secret
    ```

    Replace the values with your specific configurations.

5.  **Run the Application:**

    Frontend Folder :

    ```bash
    npm run dev
    ```

     Admin Folder :

    ```bash
    npm run dev
    ```

    Backend Folder :

    ```bash
    npm run dev
    ```

6.  **Open in Your Browser:**

Open `http://localhost:5173` in your web browser.

7.  **Open in Your Browser for admin Panel:**

Open `http://localhost:5174` in your web browser.


## Project Structure

    ├── frontend
    │   ├── public
    │   ├── src
    │   │   ├── assets
    │   │   ├── components
    │   │   ├── pages
    │   │   │   ├── Login.jsx
    │   │   │   ├── Signup.jsx
    │   │   │   ├── Home.jsx
    │   │   │   ├── Collection.jsx
    │   │   │   ├── Orders.jsx
    │   │   │   └── Contact.jsx
    │   │   ├── context
    │   │   ├── routes
    │   │   ├── utils
    │   │   ├── App.jsx
    │   │   ├── main.jsx
    │   │   └── index.css
    │   ├── index.html
    │   ├── tailwind.config.js
    │   ├── .env
    │   └── package.json
    │
    ├── admin
    │   ├── src
    │   │   ├── components
    │   │   ├── pages
    │   │   │   ├── Dashboard.jsx
    │   │   │   ├── AddProduct.jsx
    │   │   │   └── Orders.jsx
    │   │   ├── App.jsx
    │   │   └── main.jsx
    │   ├── .env
    │   └── package.json
    │
    ├── backend
    │   ├── config
    │   ├── controllers
    │   ├── middlewares
    │   ├── models
    │   ├── routes
    │   ├── utils
    │   ├── server.js
    │   ├── .env
    │   └── package.json
    │
    └── README.md


## Author

**Mohit Rajak**  
Email: mohitrajak022004@gmail.com  
LinkedIn: https://www.linkedin.com/in/mohit-rajak/


## Thank You 🙏

Thank you for checking out this project!  
This project was built as a learning-focused **MERN Stack E-Commerce application** to understand real-world full-stack development, authentication, admin roles, and payment integration.

> 💡 *“Small consistent efforts every day lead to big achievements tomorrow.”*

If you have any suggestions, improvements, or want to contribute to this project,  
feel free to **open an issue, create a pull request, or connect with me on LinkedIn** 🚀
