# SPA Monorepo

Full-stack Single Page Application with React frontend and Spring Boot backend.

## Structure
- `/frontend` - React application with Google Authentication
- `/backend` - Spring Boot application with H2 database

## Running the Application

1. Start the backend in terminal A:

cd backend
./mvnw spring-boot:run

2. Start the frontend in terminal B:

cd frontend
npm install
npm start

3. To stop the front end

cd project dir
npm run stop

4. To get the status of the backend use:
curl http://localhost:8080/actuator/health

5. To stop the backend use:
curl -X POST http://localhost:8080/actuator/shutdown
