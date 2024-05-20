# Willeder-Interview-Backend

## Project Overview

Willeder Authentication Backend
This project is a backend implementation for authentication and basic account management using REST API, 
Firebase Cloud Functions, and Firestore. It includes user registration, login, logout, password management, 
and basic account CRUD operations.

## Features

- **Authentication**
  - Register
  - Login
  - Logout
  - Forgot Password
  - Reset Password
  - Refresh Token

- **Account Management**
  - Get Account Info
  - Update Password
  - Update Account

## User Model

- `user_id`: string
- `email`: string
- `password`: string
- `name`: string
- `phone`: string
- `address`: string
- `status`: 'active' | 'inactive'
- `refresh_token`: string | null
- `created_at`: string
- `updated_at`: string
- `deleted_at`: string

## Setup and Installation

1. **Clone the Repository**
   ```sh
   git clone https://github.com/Fulail-kt/Willeder-task.git
   cd Willeder-task

2. **Install Deppendencies
   ```sh
   cd functions
   npm install
   
3. **Setup firebase
   
   Create a firebase-dev.json file in the functions src / utils / serviceAcounts directory with your Firebase configuration.
   

