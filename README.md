# 🔍 Perplexity AI Clone

> An intelligent, full-stack AI-powered conversational search engine inspired by **Perplexity AI**. It combines multi-LLM orchestration, real-time live web search indexing, streaming Markdown UI, and robust user authentication.

---

## 🌟 Overview

This repository features a full-stack web application designed to act as an interactive AI research assistant. When users ask questions, the system leverages **LangChain agents** integrated with **Mistral AI** & **Google Gemini** alongside **Tavily Search API** to fetch up-to-date information from the live web before compiling answers.

The interface is built with **React 19**, **Redux Toolkit**, and **Tailwind CSS v4**, delivering a sleek, dark-themed experience with real-time response rendering and automatic thread topic generation.

---

## ✨ Features

- 🌐 **Real-Time Live Web Search**: Equipped with Tavily Search API as a tool within a LangChain Agent to pull real-time data, facts, and internet search results.
- 🤖 **Multi-Model AI Integration**: Uses **LangChain**, **Mistral AI** (`mistral-medium-latest`), and **Google Gemini** for reasoning, answering queries, and context awareness.
- 🏷️ **Smart Topic Titling**: Automatically generates 2–4 word descriptive titles for new conversations based on the initial query.
- 📜 **Chat History & Thread Management**: Save, view, switch between, and delete past search threads stored in MongoDB.
- 🔐 **User Authentication & Email Verification**: Secure JWT authentication, Bcrypt password hashing, session cookies, and automated welcome/verification emails powered by **Nodemailer**.
- ⚡ **Real-time WebSockets**: Bidirectional event communication powered by **Socket.io**.
- 🎨 **Modern Dark Mode UI**: Responsive dashboard with high-contrast typography, styled with Tailwind CSS v4.
- 📝 **Rich Markdown Rendering**: Code highlighting, formatted bullet points, tables, and standard GitHub-Flavored Markdown (GFM) powered by `react-markdown`.

---

## 🛠️ Tech Stack

### **Backend**
| Technology | Description |
| :--- | :--- |
| **Node.js & Express.js (v5)** | High-performance HTTP server runtime & API framework |
| **LangChain** | Framework for developing applications powered by language models |
| **Mistral AI / Gemini AI** | LLM providers for generative responses and title synthesis |
| **Tavily Search API** | Autonomous web searching engine tailored for LLM agents |
| **MongoDB & Mongoose** | NoSQL database for managing users, chat history, and messages |
| **Socket.io** | Low-latency, real-time WebSocket communication |
| **JWT & Bcrypt** | Token-based authentication and password security |
| **Nodemailer** | Email transport service for verification and welcome emails |

### **Frontend**
| Technology | Description |
| :--- | :--- |
| **React 19** | Component-based UI engine |
| **Vite** | Next-generation frontend tooling and build server |
| **Redux Toolkit & React-Redux** | Centralized global state management for chats and auth |
| **React Router 7** | Client-side routing solution |
| **Tailwind CSS v4** | Utility-first CSS engine for styling |
| **React Markdown & Remark GFM** | Markdown parser for rendering AI responses |
| **Socket.io Client** | Real-time event listener on the frontend |

---

## 📁 Repository Structure

```
perplexity/
├── Backend/
│   ├── src/
│   │   ├── config/          # Database configuration (MongoDB)
│   │   ├── controller/      # Auth & Chat route logic controllers
│   │   ├── middleware/      # Auth & verification middlewares
│   │   ├── models/          # Mongoose Schemas (User, Chat, Message)
│   │   ├── routes/          # Express route definitions
│   │   ├── services/        # AI (LangChain), Internet Search (Tavily), & Email services
│   │   ├── sockets/         # Socket.IO connection handlers
│   │   └── validators/      # Request validation rules
│   ├── .env                 # Environment secrets (Git-ignored)
│   ├── package.json         # Node dependencies & scripts
│   └── server.js            # Express & HTTP server entry point
│
└── Frontend/
    ├── src/
    │   ├── app/             # Main App layout, router & Redux store config
    │   ├── features/        # Feature-sliced modules (Auth, Chat Dashboard)
    │   ├── main.jsx         # React application root
    │   └── index.css        # Global CSS & Tailwind imports
    ├── index.html           # HTML template
    ├── vite.config.js       # Vite configuration
    └── package.json         # Frontend dependencies & scripts
```

---

## 🚀 Getting Started

### **Prerequisites**
Make sure you have the following installed on your local machine:
- **Node.js** (v18.x or higher)
- **npm** or **yarn**
- **MongoDB** (Local instance or MongoDB Atlas Connection String)

---

### 1️⃣ **Backend Setup**

1. Navigate to the `Backend` directory:
   ```bash
   cd Backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `Backend/` directory with the following configuration:
   ```env
   PORT=3000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key

   # AI & Search API Keys
   GEMINI_API_KEY=your_google_gemini_api_key
   MISTRAL_API_KEY=your_mistral_api_key
   TAVILY_API_KEY=your_tavily_api_key

   # Email Service (Nodemailer OAuth / Credentials)
   GOOGLE_USER=your_email@gmail.com
   GOOGLE_CLIENT_ID=your_oauth_client_id
   GOOGLE_CLIENT_SECRET=your_oauth_client_secret
   GOOGLE_REFRESH_TOKEN=your_oauth_refresh_token
   ```

4. Start the backend development server:
   ```bash
   npm run dev
   ```
   The backend server will run on `http://localhost:3000` (or your configured `PORT`).

---

### 2️⃣ **Frontend Setup**

1. Open a new terminal and navigate to the `Frontend` directory:
   ```bash
   cd Frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the Vite development server:
   ```bash
   npm run dev
   ```
   The application will be accessible at `http://localhost:5173`.

---

## 🔌 API Endpoints Reference

### **Authentication (`/api/auth`)**
| Method | Endpoint | Description | Access |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/auth/register` | Register a new user & trigger verification email | Public |
| `POST` | `/api/auth/login` | Authenticate user & receive HTTP cookie token | Public |
| `GET` | `/api/auth/get-me` | Retrieve profile info of currently logged-in user | Protected |
| `GET` | `/api/auth/verify-email` | Confirm user email address via token | Public |

### **Chat & Conversations (`/api/chats`)**
| Method | Endpoint | Description | Access |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/chats/message` | Send message, perform live web search & get AI response | Protected |
| `GET` | `/api/chats` | Retrieve all chat threads for authenticated user | Protected |
| `GET` | `/api/chats/:chatId` | Retrieve full message history of a specific chat | Protected |
| `DELETE` | `/api/chats/:chatId` | Delete a chat thread and all associated messages | Protected |

---

## 🛡️ License

This project is licensed under the **ISC License**.

---

## 👨‍💻 Author

Developed by **Ravi Kasodariya**. Feel free to star ⭐️ the repository if you found this project helpful!
