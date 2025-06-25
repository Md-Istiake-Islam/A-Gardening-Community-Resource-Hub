# 🌿 Garden Community Hub

**Live Site:** [https://a-garden-community.firebaseapp.com](https://a-garden-community.firebaseapp.com)

---

## 📝 Overview

**Garden Community Hub** is a modern, community-driven web application for plant lovers. It allows users to share plant care tips, browse advice by season or plant type, and engage with content through real-time updates and likes. Whether you're new to gardening or a seasoned expert, this hub is built to grow your knowledge and passion.

![Screenshot Placeholder](https://your-screenshot-url.com/preview.jpg)

---

## 🚀 Live Links

- 🌐 **Live Site**: [https://a-garden-community.firebaseapp.com](https://a-garden-community.firebaseapp.com)
- 💻 **Client Repo**: [GitHub - Frontend](https://github.com/Md-Istiake-Islam/A-Gardening-Community-Resource-Hub.git)
- 🖥️ **Server Repo**: [GitHub - Backend](https://github.com/Md-Istiake-Islam/A-Gardening-Community-Resource-Hub.git)

---

## 🌟 Features

- 📚 Dynamic plant care tips library
- ✍️ Users can contribute tips with images
- 🕒 Real-time sorting of latest posts
- ❤️ Like system (PATCH API)
- 🌗 Theme toggle (light/dark) using daisyUI
- 🔍 Search & filter by plant type
- 📱 Fully responsive design (mobile-friendly)

---

## ⚙️ Technologies Used

### Frontend

- React.js
- Tailwind CSS + daisyUI
- Firebase (Auth + Hosting)
- React Router v7
- React Icons / Heroicons
- Lottie React
- Day.js
- React Toastify
- SweetAlert2

### Backend

- Node.js
- Express.js
- MongoDB
- dotenv
- cors

---

## 📦 Dependencies

### Client

```json
{
  "@heroicons/react": "^2.2.0",
  "@tailwindcss/vite": "^4.1.7",
  "daisyui": "^5.0.35",
  "dayjs": "^1.11.13",
  "firebase": "^11.8.0",
  "lottie-react": "^2.4.1",
  "react": "^19.1.0",
  "react-dom": "^19.1.0",
  "react-icons": "^5.5.0",
  "react-router": "^7.6.0",
  "react-toastify": "^11.0.5",
  "react-tooltip": "^5.28.1",
  "sweetalert2": "^11.21.2",
  "tailwindcss": "^4.1.7"
}


```

---

##🧪 Local Development Setup

To run this project locally on your machine, follow the steps below.

###Prerequisites

- Node.js installed
- MongoDB URI (local or from MongoDB Atlas)
- Firebase project (for Auth + Hosting)
- Git installed

### Clone the Repositories

```
git clone https://github.com/Md-Istiake-Islam/A-Gardening-Community-Resource-Hub.git
git clone https://github.com/your-username/garden-community-server.git
```
### Backend Setup

```
cd garden-community-server
npm install
```
### Create a .env file in the root of the server directory and add:

```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```
### Start the server:

```
node index.js
```

### Frontend Setup

```
cd ../garden-community-client
npm install
```
### Make sure Firebase configuration is correctly set inside your firebase.config.js file, or via environment variables.

### Start the development server:

```
npm run dev
```

