
# Chat App Project

This is a full-stack chat application project consisting of two main parts:

- **Client:** The frontend application built with modern web technologies. It provides the user interface for chatting, login, profile management, and more.
- **Server:** The backend API server that handles authentication, message management, and database interactions.

## Features

- Real-time chat functionality
- User authentication and profile management
- Responsive and user-friendly interface
- Cloud storage integration for media files

## Project Structure

- `client/` - Frontend React application
- `server/` - Backend Node.js/Express server

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB or other database setup (as per server configuration)

### Installation

1. Clone the repository:
   ```bash
   git clone <your-github-repo-url>
   cd chat-app
   ```

2. Install dependencies for client and server:
   ```bash
   cd client
   npm install
   cd ../server
   npm install
   ```

3. Configure environment variables as needed for the server.

### Running the Project

- To start the client:
  ```bash
  cd client
  npm run dev
  ```

- To start the server:
  ```bash
  cd server
  npm start
  ```

## Deployment

This project can be deployed on platforms like Vercel (for client) and any Node.js hosting service (for server). Configuration files for Vercel are included in both `client/` and `server/` directories.

## License

This project is licensed under the MIT License.

