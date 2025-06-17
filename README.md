# Secure Feedback API

A secure, token-protected feedback collection backend built with Node.js, Express, and MongoDB. This project allows users to submit feedback and gives admins the ability to view, filter, and delete feedback using JWT authentication.

---

## 🚀 Features

- ✅ Public feedback submission (`POST /api/feedback`)
- ✅ Admin login with JWT (`POST /api/auth/login`)
- ✅ Protected admin dashboard to:
  - View all feedback (`GET /api/feedback/admin`)
  - Delete feedback by ID (`DELETE /api/feedback/:id`)
- 🔒 JWT-based authentication
- 🗃 MongoDB with Mongoose schema modeling
- 🌐 RESTful API, ready for frontend or deployment

---

## 🛠️ Technologies Used

- Node.js
- Express.js
- MongoDB + Mongoose
- JSON Web Tokens (JWT)
- bcrypt.js for password hashing
- dotenv for environment configuration
- Postman for testing

---

## 📦 API Endpoints

### 🔓 Public

#### `POST /api/feedback`
Submit feedback (no auth required)
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Great work!",
  "rating": 5
}
```

---

### 🔐 Admin (Protected with JWT)

#### `POST /api/auth/login`
Login to get JWT
```json
{
  "username": "admin",
  "password": "admin123"
}
```

Response:
```json
{
  "success": true,
  "token": "<JWT_TOKEN>"
}
```

Use this token in headers:
```
Authorization: Bearer <JWT_TOKEN>
```

#### `GET /api/feedback/admin`
Get all feedbacks (requires valid token)

#### `DELETE /api/feedback/:id`
Delete a feedback by ID (admin only)

---

## ⚙️ Installation

```bash
git clone https://github.com/Harsh-EH/Secure_Feedback_API.git
cd Secure_Feedback_API
npm install
```

Create a `.env` file:
```env
PORT=5000
MONGO_URI=<your MongoDB URI>
JWT_SECRET=<your super secret key>
```

Start the server:
```bash
node server.js
```

---

## 🔐 Admin Account Setup

Run this one-time script to create the admin account:
```bash
node seedAdmin.js
```

Default credentials:
```
Username: admin
Password: admin123
```

---

## 📫 Author

**Harsh Kasana**  
[GitHub](https://github.com/Harsh-EH) | [LinkedIn](https://www.linkedin.com/in/harsh-kasana-0328b030a/)

---

## 🧠 License

This project is open source and free to use for learning and non-commercial purposes.
