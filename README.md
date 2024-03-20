# Course Enroll System

This project is a simple Course Enroll System built using React. It allows users to browse through available courses, view details of each course, and add courses to their cart.

## Features

- **Course Listing**: Users can view a list of available courses with details such as course title, image, credit hour, price, and description.
- **Course Details**: Users can view detailed information about each course, including its description, credit hour, and price.
- **Add to Cart**: Users can add courses to their cart. The system ensures that the total credit hours in the cart do not exceed the limit of 20.
- **Cart Summary**: Users can view a summary of their cart, including the total credit hours selected, remaining credit hours available, and total price.
- **Toast Notifications**: Toast notifications are displayed to provide feedback to users when a course is successfully added to the cart or when there is an error, such as exceeding the credit hour limit.

## Components

- **Header**: Displays the title of the application.
- **Courses**: Renders the list of available courses fetched from a JSON file. Allows users to add courses to their cart.
- **Course**: Represents an individual course item with details such as image, title, description, credit hour, and price.
- **Cart**: Displays the cart summary, including the list of courses added, remaining credit hours, and total price.


## Installation

To run the application locally, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Install dependencies: `npm install`
3. Start the development server: `npm start`

## Technologies Used

- React
- React Toastify
- JavaScript (ES6)
- HTML
- tailwind css

