# Offline Assessment for Backend Developer

## Objective

Migrate a simple Express.js backend written in TypeScript to ASP.NET Core and implement an endpoint for managing blog posts.

## Provided Code

You will be provided with a basic Express.js backend that includes:

- Basic authentication logic using JWT.
- A simple structure for handling requests.

## Tasks

1. **Migration to ASP.NET Core**
   - Migrate the provided Express.js backend to ASP.NET Core using C#.
   - Ensure that the basic authentication logic using JWT is implemented in the ASP.NET Core application.
   - Maintain similar functionality and structure as the original Express.js application.

2. **Add Blog Post Endpoint**
   - Create an endpoint for managing blog posts. The endpoint should support the following operations:
     - **GET /api/posts**: Retrieve a list of all blog posts.
     - **POST /api/posts**: Create a new blog post. The request should include a title and content.
     - **GET /api/posts/{id}**: Retrieve a specific blog post by ID.
     - **PUT /api/posts/{id}**: Update a specific blog post by ID.
     - **DELETE /api/posts/{id}**: Delete a specific blog post by ID.

3. **Database Integration**
   - Use an in-memory database (like SQLite or another lightweight option) to store blog posts.
   - Implement caching mechanism using Redis.

4. **Testing**
   - Write unit tests for the authentication logic and the blog post endpoints.
   - Ensure that all tests pass successfully.

5. **Documentation**
   - Provide documentation on how to set up and run the ASP.NET Core application.
   - Include instructions for testing the endpoints using tools like Postman or curl.

## Submission Guidelines

- Submit the complete ASP.NET Core project via a GitHub repository.
- Include a README file with setup instructions and any additional notes.
- Ensure that your code is clean, well-organized, and follows best practices.

## Evaluation Criteria

- Successful migration of the Express.js backend to ASP.NET Core.
- Correct implementation of the blog post management endpoints.
- Quality and clarity of code, including adherence to coding standards.
- Completeness and accuracy of documentation.
- Effectiveness of unit tests.

## Submission Instructions

- Please submit your code repository (e.g., GitHub) along with a short video walkthrough of your application.
- Please keep the repsoitory as a private.
