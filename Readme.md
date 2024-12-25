# ShoppyGlobe Backend

## Project Overview

This project implements a backend for the ShoppyGlobe e-commerce platform using Node.js, Express, and MongoDB.

### Features

- Product management (CRUD)
- Cart operations
- Authentication and Authorization using JWT
- Error handling and validation

### Here's how you can use it:

- **GET /products**: Fetch a list of products.
- **GET /products/:id**: Fetch a single product by its ID.
- **GET /products/add/product**: To add product .
- **POST /cart**: Add a product to the cart (with productId and quantity).
- **PUT /cart/:id**: Update cart item quantity.
- **DELETE /cart/:id**: Remove product from the cart.
- **POST /register**: Register a new user.
- **POST /login**: Log in and get a JWT token.
