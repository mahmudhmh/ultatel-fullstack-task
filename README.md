# ULTATEL Full-Stack Task.

## Overview

a simple CRUD application where users can register, log in, create, edit, and delete student. The
application should have a user-friendly interface and secure backend.

## Features

- User authentication with secure password handling.
- Complete CRUD operations for managing student records.
  - CRUD Operations for Students:
    - Create: Add new student records.
    - Read: View details of student records.
    - Update: Modify existing student records.
    - Delete: Remove student records.
- Responsive user interface built with Angular and Bootstrap.
- Search Functionality and Filters available for:
  - Name
  - Gender
  - Country
  - Age
- Pagination and Sorting: Efficiently navigate through large lists of students with pagination and sorting options.
- Clean code architecture following the repository/service design pattern in NestJS.

## Api Documentation

- **API Documentation:** https://ultatel-fullstack-task-server.onrender.com/api

## Backend Deployed on render

- **Backend:** https://ultatel-fullstack-task-server.onrender.com/

## Database Deployed on Aiven.io

```sh
  DATABASE_HOST=aiven.io/host/provided
  DATABASE_PORT=aiven.io/port/provided
  DATABASE_USER=aiven.io/user/provided
  DATABASE_PASSWORD=aiven.io/password/provided
  DATABASE_NAME=aiven.io/dbName/provided
```

## Setup

### Backend

0. **Configure Environment Variables**

   First, set up your `.env` file as per the provided `.env.example` file.

1. **Clone Repository and Install Dependencies**

   ```sh
   git clone https://github.com/mahmudhmh/ultatel-fullstack-task.git
   cd crud-server
   npm install --force
   ```

2. **Start Database**

   Start your database service (e.g., MySQL) and create a new database as specified in your `.env` file.

3. **Start Backend Server**

   ```sh
   npm run start:dev
   ```

### Frontend

1. **Install Dependencies**

   ```sh
   cd ../crud-client
   npm install --force
   ```

2. **Start Angular Application**

   ```sh
   ng serve
   ```

### Frontend Packages and Libraries

- Angular: A framework for building dynamic web applications.
- Bootstrap: A front-end toolkit for developing responsive, mobile-first projects.
- ng-bootstrap: Bootstrap components for Angular.

  - Modal: For displaying pop-up dialogs.
  - Datepicker: For selecting dates.

- ng-select: Angular component for multi-select dropdown.
- sweetalert2: Library for beautiful and customizable alerts.

### Backend Packages and Libraries

- NestJS: A progressive Node.js framework for building efficient and scalable server-side applications.
- TypeORM: An ORM for TypeScript and JavaScript (ES7, ES6, ES5) that supports different databases and allows easy integration and management of data.
- JWT (JSON Web Tokens): A compact, URL-safe means of representing claims to be transferred between two parties, used for securely transmitting information between parties as a JSON object.

### Database

- MySQL.

### Demo Video

- Watch the demo video on YouTube: [ULTATEL Task Demo Video](https://www.youtube.com/embed/XLCnzPHDDUM)

[![Watch the video](https://img.youtube.com/vi/XLCnzPHDDUM/0.jpg)](https://www.youtube.com/watch?v=XLCnzPHDDUM "ULTATEL Task Demo Video")


### Application Screens

- [Screen Shots](https://drive.google.com/drive/folders/1LBVB23xv3-qfR_X6jd1l7tsJup0NtfPz?usp=sharing)


### Note

Ensure that your frontend is hosted on port 4200. If you change the port, update the CORS settings in your `.env` file accordingly.

### Contact

For any questions or support, please contact `mahmudhmh.business@gmail.com`.
