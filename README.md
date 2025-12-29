# 🏨 ThePods – Pod Booking Web Application

**ThePods** is a modern web application designed to simplify booking **Japanese-style pod accommodations**. Built using the **MERN stack**, it offers an affordable, space-efficient, and innovative lodging solution tailored for modern travelers in India.

---

## 📄 Project Documentation
For a detailed breakdown of the system architecture, Software Requirement Specification (SRS), and design diagrams, refer to the full project report:

👉 **[View Full Project Report (PDF)](https://drive.google.com/file/d/1dVNmTJJwuwQVYzgPXbPCUJSN1EtB1ndZ/view?usp=sharing)**

---

## 🚀 Key Features

- **User Authentication**  
  Secure user registration and login with password hashing and JWT-based authentication.

- **Real-Time Booking**  
  Interactive calendar for selecting stay dates with dynamic pod availability.

- **Variety of Pods**  
  Choose from *Classic*, *Premium*, and *Ladies-only* pods.

- **Secure Payments**  
  Integrated payment gateway supporting Cards, Net Banking, and Wallets.

- **User Dashboard**  
  Personalized dashboard to view and manage bookings.

- **Responsive Design**  
  Fully optimized for desktop and mobile devices using Tailwindcss.

---

## 🛠️ Technical Stack

The application is built using the **MERN Stack** for scalability and performance:

- **Frontend**: React.js  
- **Backend**: Node.js & Express.js  
- **Database**: MongoDB (NoSQL)  
- **State Management**: React State & Props  
- **Authentication**: JSON Web Tokens (JWT) & Bcrypt  
- **Styling**: Tailwindcss & CSS  

---

## 📊 System Architecture

The system follows a standard **client-server architecture**:

1. **User (Tourist)**  
   Interacts with the React-based user interface to explore and book pods.

2. **Web Application Server**  
   Handles business logic including authentication, pod availability, and bookings.

3. **External Services**  
   MongoDB for data storage and a secure payment gateway for transactions.

---

## 💻 Prerequisites

Ensure the following are installed on your system:

- **Node.js** (v14 or higher)
- **MongoDB** (Local installation or MongoDB Atlas)
- **VS Code** or any preferred code editor

---

## ⚙️ Local Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/nikhilpundir/thepods.git
cd thepods
