# Frontend Assessment: Real Estate Listing Web App

## Overview

This project, developed as part of a frontend assessment, comprises a Real Estate Listing Web App featuring a listings page and a detailed view for individual real estate listings. It uses Next.js with TypeScript, Tailwind CSS, and React for the frontend, and a Node.js/Express server as a proxy to handle CORS issues.

## Architecture and Design

The app follows a modular, component-based architecture for frontend and a simple proxy server for backend to ensure maintainability and scalability.

### Frontend

- **Next.js:** Used for server-side rendering and routing.
- **TypeScript:** Provides type safety and enhances code readability.
- **React:** Facilitates efficient rendering and state management.
- **Tailwind CSS:** Offers a utility-first approach for maintainable styling.

### Redux Libraries

- **@reduxjs/toolkit:** Streamlines the configuration and management of the Redux store, reducing the amount of boilerplate code.
- **React Redux:** Connects React components to the Redux store, allowing for responsive state updates and dispatching of actions.
- **Redux:** The foundational library for implementing Redux patterns for state management, ensuring a predictable state container.
- **Redux Persist:** Enables the persistence of the Redux state across sessions by storing it in a local storage or other storage mediums.

### Backend (Proxy Server)

- **Node.js/Express:** Handles CORS-related issues by serving as a proxy between the frontend and the external data source.

### Integration Tests

For end-to-end integration tests we used the Playwright library. See the documentation [here](https://playwright.dev).

## Getting Started

### Frontend

1. Clone the repository: `git clone https://git.number8.com/artur.guimaraes/frontend-assessment.git`.
2. Navigate to the frontend directory: `cd frontend`.
3. Install dependencies: `npm install`.
4. Run the application: `npm run dev`.

### Backend (Proxy Server)

1. Navigate to the backend directory: `cd backend`.
2. Install dependencies: `npm install`.
3. Run the proxy server: `node proxy.js`.

### Playwright - Integration Tests

1. Run the tests: `npx playwright test`.

## Features

### Listings Page

- **Data Binding:** Fetches real estate listings through a proxy server to bypass CORS restrictions.
- **Filter Functionality:** Users can filter listings by bedrooms, bathrooms, parking spaces, and price range.
- **UI Components:** Displays listing details including thumbnails, titles, and locations.

### Listing Details View

- **Detailed Information:** Shows comprehensive details of selected listings.
- **Contact Agent Form:** Features form validation and displays messages based on user input.

## Code Practices

- **Best Practices:** Ensures adherence to software development best practices.
- **Design Patterns and Quality:** Focuses on clean, legible, and maintainable code.

## Submission Notes

- **Repository Name:** `frontend-assessment`.
- **Continuous Commits:** Reflects development progress.
- **File Size Limitations:** Adheres to a 1MB per file size limit.

## Why the Proxy Server?

The proxy server was introduced to resolve the CORS policy issue encountered when fetching data directly from the external API. This solution maintains security and functionality without requiring access to the external server's configuration.

## Additional Information

- **Author:** Artur Guimarães
- **Contact:** arturguimaraes92@hotmail.com
- **LinkedIn:** [Artur Guimarães LinkedIn](https://www.linkedin.com/in/artur-guimaraes/)
