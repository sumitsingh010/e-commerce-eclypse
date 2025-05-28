# Client README for E-commerce Webpage

# E-commerce Webpage Client

This is the client-side of the E-commerce Webpage project built using React, TailwindCSS, TypeScript, and NodeJS. 

## Getting Started

To get started with the client application, follow these steps:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd ecommerce-webpage/client
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Run the application**:
   ```
   npm start
   ```

   This will start the development server and open the application in your default web browser.

## Project Structure

- `src/`: Contains all the source code for the client application.
  - `components/`: Contains reusable functional components.
  - `pages/`: Contains page components, including the main landing page.
  - `types/`: Contains TypeScript interfaces and types used throughout the application.
  - `App.tsx`: The main application component that sets up routing.
  - `main.tsx`: The entry point for the React application.

- `public/`: Contains the static files, including the main HTML file.

- `tailwind.config.js`: Configuration file for TailwindCSS.

- `postcss.config.js`: Configuration file for PostCSS.

- `package.json`: Lists dependencies and scripts for the client application.

- `tsconfig.json`: TypeScript configuration file for the client.

## Figma Designs

The design specifications for the project can be found in the provided Figma designs. Please refer to them for layout and styling guidelines.

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.



# E-commerce Webpage Server

This is the server-side of the E-commerce Webpage project built using Node.js and TypeScript. The server handles API requests and serves data to the client application.

## Getting Started

To get started with the server, follow these steps:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd ecommerce-webpage/server
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Run the server**:
   ```
   npm start
   ```

The server will start running on `http://localhost:5000` (or the port specified in your configuration).

## Directory Structure

- **src/**: Contains the source code for the server.
  - **controllers/**: Contains controller functions for handling requests.
  - **routes/**: Contains route definitions for the API.
  - **types/**: Contains TypeScript interfaces and types used in the server.

## API Endpoints

The server exposes various API endpoints to interact with the e-commerce application. Refer to the `routes/index.ts` file for a complete list of available endpoints and their functionalities.

## Technologies Used

- Node.js
- TypeScript
- Express.js (for routing and middleware)

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
