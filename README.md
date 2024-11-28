Multi-Step Form with React & Next.js

 Prerequisites
Node.js (v16 or higher)
npm (v6 or higher) or yarn (v1.22 or higher)

Getting Started
 1. Clone the repository

 git clone https://github.com/your-username/multi-step-form.git
cd multi-step-form
2. Install dependencies
If you're using npm:

npm install

If you're using yarn:

 yarn install

3. Start the development server
Run the app locally by using the following command:

 npm run dev
# OR
yarn dev
Open your browser and go to http://localhost:3000 to view the application.



This is a multi-step form application built with React, Next.js, and Material UI. The app helps users fill out a multi-step KYC (Know Your Customer) process with data validation, file uploads, and a review page for confirming entered details.

It uses React Hook Form for form handling and React Toastify for user notifications.

Features
Multi-Step Form: Divide the form into several steps to make the process less overwhelming.
Data Validation: Each form step has validation rules (required fields, file types, etc.).
File Uploads: Allows users to upload documents like PAN cards, passports, and more.
Review Page: Displays all entered data for the user to review before submission.
Responsive Design: The app is mobile-friendly and works across devices.
Toast Notifications: Provides feedback to users on successful form submissions.
Screenshots

Usage
Fill in the steps: The form is divided into multiple steps, each requiring different sets of information.
Review your details: After filling out the form, review your information on the final step.
Submit: After reviewing, click the "Submit" button to finalize your submission.
Technologies Used
React: Frontend library for building UI components.
Next.js: React framework with server-side rendering and static site generation.
React Hook Form: Form management library for handling form validation and submission.
Material UI: UI component library for designing the app.
React Toastify: A library for adding toast notifications to the app.
React Dev Tools: Used for debugging and inspecting the React component tree.
