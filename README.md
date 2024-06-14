# Simple CRUD Application Angular-Nest

## Overview

This project is a simple CRUD (Create, Read, Update, Delete) application where users can register, log in, and manage student records. It features a user-friendly interface built with Angular and a secure backend powered by NestJS.

## Features

- User Authentication: Registration and login functionality with secure password storage and user session management.
- Student Management: CRUD operations for managing student records.
- Responsive UI: Built with Angular and Bootstrap, ensuring a user-friendly experience across devices.
- RESTful API: Backend designed with NestJS to handle data operations and validations.

## Tech Stack

### Frontend

- **[Angular](https://angular.dev/):** A framework for building dynamic web applications.
- **[Bootstrap](https://getbootstrap.com/):** A front-end toolkit for developing responsive, mobile-first projects.
- **[ng-bootstrap](https://ng-bootstrap.github.io/#/home):** Bootstrap components for Angular.
  - **[Modal](https://ng-bootstrap.github.io/#/components/modal/examples):** For displaying pop-up dialogs.
  - **[Datepicker](https://ng-bootstrap.github.io/#/components/datepicker/overview):** For selecting dates.
- **[ng-select](https://github.com/ng-select/ng-select):** Angular component for multi-select dropdown.
- **[sweetalert2](https://sweetalert2.github.io/):** Library for beautiful and customizable alerts.

### Backend

- **[NestJS](https://docs.nestjs.com/):** A progressive Node.js framework for building efficient and scalable server-side applications.
- **RESTful API Design:** For handling CRUD operations and data interactions.
- **Data Validation and Error Handling:** Ensuring data integrity and proper error responses.
- **ORM / Repository:** Utilizing an Object-Relational Mapping tool for database interactions.

### Database

- **Relational Database:** MySQL for managing users and student records.
- **Proper Schema Design:** Ensuring efficient and logical database schema for user and student entities.

### Deployment (\*\*Bonus)

- **Cloud Deployment:** Deploying the application to a cloud service such as Heroku, AWS, or Vercel.
- **Documentation:** Providing clear instructions for setting up and running the application both locally and in the cloud.

## Getting Started

### Prerequisites

- **Node.js**: Ensure you have Node.js installed. You can download it from [Node.js official site](https://nodejs.org/).
- **Angular CLI**: Install Angular CLI globally using `npm install -g @angular/cli`.
- **Database**: Have a relational database setup (PostgreSQL, MySQL, or MS SQL).

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/mahmudhmh/ultatel-fullstack-task.git
   cd ultatel-fullstack-task
   ```

2. **Install Frontend Dependencies**

   Navigate to the `frontend` directory and install dependencies.

   ```bash
   cd crud-client
   npm install
   ```

3. **Install Backend Dependencies**

   Navigate to the `backend` directory and install dependencies.

   ```bash
   cd crud-server
   npm install
   ```

4. **Setup Database**

   Create a new database in your relational database management system (MySQL).

5. **Configure Environment Variables**

   Create a `.env` file in the `backend` directory with the following content, updating the placeholders with your database credentials:

   ```bash
   DATABASE_HOST=localhost
   DATABASE_PORT=5432
   DATABASE_USER=yourusername
   DATABASE_PASSWORD=yourpassword
   DATABASE_NAME=yourdatabase
   JWT_SECRET=your_jwt_secret
   ```

### Usage

- **Register**: Create a new user account.
- **Login**: Log in with your credentials.
- **Manage Students**: Perform CRUD operations on student records.

### Documentation

- The project repository includes detailed documentation for setting up and running the application both locally and in the cloud.
- The documentation provides instructions for managing dependencies, configuring environment variables, and deploying to a cloud service.

### Contact

For any questions or support, please contact `mahmudhmh.business@gmail.com`.
