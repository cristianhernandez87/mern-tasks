# MERNTasks

This project is a task management application developed with the MERN stack (MongoDB, Express, React, Node.js). It is part of a technical test to evaluate fullstack development skills.

## Technologies Used

- **MongoDB** - NoSQL database to store tasks.
- **Express.js** - Framework for handling the backend and REST API.
- **React.js** - Frontend library for the user interface.
- **Node.js** - Runtime environment for the backend.
- **Docker** - To run MongoDB in a container.

## Installation and Execution

### 1. Set Up Environment Variables
In the `node` folder, create a `.env` file with the following variables:
```env
MONGO_URI=mongodb://localhost:5175/merntasks
PORT=5174
```

### 2. Start the Database with Docker
Run the following command in the terminal to start MongoDB:
```sh
docker-compose up -d
```

### 3. Install Dependencies
Run the following in the **project root**:
```sh
npm install
```
This will install dependencies for both the backend and frontend.

### 4. Start the Application
Run:
```sh
npm start
```
This will start:
- **Backend (Node.js)** on port `5174`
- **Frontend (React.js)** on port `5173`
- **MongoDB** on port `5175`

## Features Implemented

- [x] **Task CRUD**: Create, read, update, and delete tasks.
- [x] **React Interface** to interactively manage tasks.
- [x] **REST API with Express** to handle backend logic.
- [x] **MongoDB with Mongoose** for task storage.
- [x] **State management in React using `useState` and `useEffect`.**

## Project Structure

```
MERNTasks/
├── node/              # Backend (Express & MongoDB)
│   ├── src/
│   │   ├── controllers/  # API Controllers
│   │   ├── models/       # API models
│   │   ├── routes/       # API Rputes
│   └── .env           # Environment variables
├── react/             # Frontend (React)
│   ├── src/
│   │   ├── components/ # UI components
│   │   ├── App.tsx     # Entry point
│   ├── package.json   # Frontend dependencies
│   └── .env           # Frontend configurations
└── docker-compose.yml # MongoDB configuration with Docker
```

## Important Notes

- To modify the API or data structure, edit files in `node/models/` and `node/routes/`.
- It is recommended to use tools like **Postman** or **Insomnia** to test the API.
- The application is configured to run locally, ensure Docker is installed for the database.

## Submission

The code is available in my fork: (https://github.com/cristianhernandez87/mern-tasks).

