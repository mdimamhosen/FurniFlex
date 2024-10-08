# FurniFlex

**FurniFlex** is a modern and responsive furniture e-commerce platform where users can browse, filter, and purchase furniture products. The application is built with a focus on user authentication, category-wise product listings, and pagination for a smooth browsing experience. It also integrates with a local API for managing user authentication and product data.

## 🚀 Live Demo

Check out the live version of the project:

🔗 [FurniFlex Live Site](https://furniflex02.netlify.app/)

## 🛠️ Key Features

- **User Authentication**:

  - Register and log in using local API-based authentication.
  - Secure authentication system for maintaining user sessions.

- **Category-wise Products**:

  - Browse furniture products by categories.
  - Filter and view products based on category selection.

- **Pagination**:

  - Easy navigation through a large collection of products.
  - Pagination for a user-friendly experience, with control over the number of products displayed per page.

- **Responsive Design**:

  - Fully responsive design for a seamless experience on all devices (mobile, tablet, desktop).

- **Modern UI**:
  - Clean and user-friendly interface using modern design principles.

## 🖥️ Technologies Used

- **Frontend**:

  - React.js
  - Tailwind CSS for styling
  - React Icons for icons

- **Other Tools**:
  - Netlify for hosting
  - Local API for product and authentication data management

## 🧩 Project Structure

The project is organized to ensure easy navigation and maintainability. Here's the detailed structure:

```
/src
│
├── /assets         # Stores images, icons, and other static assets
│   └── /images     # Product images and other graphics
│   └── /icons      # SVG or other icon files
│
├── /components     # Reusable React components (Navbar, Footer, etc.)
│   └── /common     # Common components like buttons, headers, forms
│
├── /pages          # Page components (Home, Product Listing, Login, etc.)
│   └── Home.js     # Homepage
│   └── Products.js # Product listing and details
│   └── Login.js    # User login page
│   └── Register.js # User registration page
│
├── /utils          # Utility components (Button, Title, etc.)
│
└── App.js          # Main entry point for the application

/routes.js          # Routes configuration for page navigation
```

## 🚀 How to Run Locally

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/mdimamhosen/FurniFlex.git
   ```

2. **Install Dependencies**:
   Navigate to the project directory and run:

   ```bash
   cd FurniFlex
   npm install
   ```

3. **Run the Application**:
   Start the development server:

   ```bash
   npm start
   ```

4. **Local API Setup**:
   If you have a local API for authentication and products, make sure it's running and properly configured.

5. **View in Browser**:
   Visit `http://localhost:3000` in your browser to see the application in action.

## 🔄 Future Improvements

- **Search functionality**: Add a search feature to find products quickly.
- **Order Management**: Allow users to track and manage their orders.
- **Wishlist Feature**: Implement a feature to add products to a wishlist for future purchases.

## 🧑‍💻 Author

**Md Imam Hosen**

- GitHub: [mdimamhosen](https://github.com/mdimamhosen)
- Email: mdimam.cse9.bu@gmail.com

Feel free to reach out if you have any questions or suggestions!
