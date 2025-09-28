# 💬 Real-Time Chat Application

> **A modern, feature-rich real-time messaging platform built with the MERN stack, featuring instant messaging, video calling, group chats, and comprehensive user management**

<div align="center">

## 🌐 **Live Application**

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-Visit_Application-4A90E2?style=for-the-badge&logo=render&logoColor=white)](https://chat-app-83p9.onrender.com/)

**Experience the platform:** [https://chat-app-83p9.onrender.com/](https://chat-app-83p9.onrender.com/)

[![GitHub Repository](https://img.shields.io/badge/📚_Repository-View_Source-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/M-hell/chat-app)

## 🎯 **Real-Time Communication**

[![Socket.io](https://img.shields.io/badge/⚡_Powered_by-Socket.io-010101?style=for-the-badge&logo=socket.io&logoColor=white)](#real-time-features)
[![Video Calling](https://img.shields.io/badge/📹_Video_Calls-ZegoCloud-FF6B35?style=for-the-badge&logo=zoom&logoColor=white)](#video-calling)

</div>

---

## 📋 **Project Description**

The **Real-Time Chat Application** is a comprehensive messaging platform that brings people together through seamless communication. Built with the powerful **MERN stack** (MongoDB, Express.js, React, Node.js) and enhanced with **Socket.io** for real-time functionality, this application delivers an exceptional user experience similar to popular messaging platforms.

The system features **instant messaging**, **video calling integration**, **group chat management**, **online presence tracking**, and **media sharing capabilities**. What makes it special is the combination of **real-time communication**, **intuitive user interface**, and **robust security features** that ensure private and secure conversations.

**⚡ Real-Time Messaging**: Instant message delivery powered by **Socket.io** for seamless communication.
**📹 Video Calling**: Integrated **ZegoCloud** video calling for face-to-face conversations.
**👥 Group Management**: Create, manage, and participate in group conversations with multiple users.

---

## ✨ **Key Features**

### 💬 **Real-Time Messaging**
- **Instant Message Delivery** with Socket.io real-time communication
- **Message Status Indicators** (sent, delivered, read)
- **Typing Indicators** to show when users are composing messages
- **Message History** with persistent storage and retrieval

### 👥 **Group Chat Management**
- **Create Group Chats** with multiple participants
- **Group Administration** with admin privileges and member management
- **Group Settings** including name changes and member additions/removals
- **Group Message Broadcasting** with real-time delivery to all members

### 📹 **Video Communication**
- **One-on-One Video Calls** powered by ZegoCloud integration
- **Group Video Meetings** for multi-participant video conferences
- **Screen Sharing** capabilities for presentations and collaborations
- **High-Quality Audio/Video** with adaptive streaming

### 🔐 **User Authentication & Security**
- **Secure Registration/Login** with JWT authentication
- **Password Encryption** using bcrypt for enhanced security
- **Session Management** with secure cookie handling
- **User Profile Management** with customizable avatars and details

### 🌐 **Online Presence & Status**
- **Real-Time Online Status** tracking for all users
- **Last Seen Indicators** for offline users
- **Activity Status** showing user engagement
- **Presence Notifications** for connection status changes

### 📱 **Media & File Sharing**
- **Image Sharing** with instant preview and download
- **Video File Support** for multimedia conversations
- **File Upload Management** with size limitations and type validation
- **Media Gallery** for browsing shared content

### 🎨 **Modern User Interface**
- **Responsive Design** optimized for desktop, tablet, and mobile
- **Dark/Light Theme** support for user preference
- **Intuitive Chat Interface** with modern messaging UI patterns
- **Smooth Animations** and transitions for enhanced user experience

---

## 🏗️ **System Architecture**

```
┌──────────────────────────────────────────────────────────────────────────────────┐
│                          CLIENT LAYER (React Frontend)                          │
├─────────────────────┬─────────────────────┬─────────────────────────────────────┤
│  🎨 React 18        │  🎯 Vite Builder    │  🖼️ Tailwind CSS                  │
│  Component System   │  Development Server │  Modern Styling                     │
│                     │                     │                                      │
└──────────┬──────────┴──────────┬──────────┴──────────┬──────────────────────────┘
           │                     │                     │
           ▼                     ▼                     ▼
┌──────────────────────────────────────────────────────────────────────────────────┐
│                        STATE MANAGEMENT                                         │
├─────────────────────┬─────────────────────┬─────────────────────────────────────┤
│  📊 Redux Toolkit   │  🔄 Real-time       │  🍪 Cookie Storage                 │
│  Global State       │  Socket Updates     │  Authentication                     │
│                     │                     │                                      │
└──────────┬──────────┴──────────┬──────────┴──────────┬──────────────────────────┘
           │                     │                     │
           ▼                     ▼                     ▼
┌──────────────────────────────────────────────────────────────────────────────────┐
│                         COMMUNICATION LAYER                                     │
├─────────────────────┬─────────────────────┬─────────────────────────────────────┤
│  ⚡ Socket.io       │  📹 ZegoCloud       │  🔗 Axios HTTP                     │
│  Real-time Events   │  Video Calling      │  API Requests                       │
│                     │                     │                                      │
└──────────┬──────────┴──────────┬──────────┴──────────┬──────────────────────────┘
           │                     │                     │
           ▼                     ▼                     ▼
┌──────────────────────────────────────────────────────────────────────────────────┐
│                        SERVER LAYER (Node.js/Express)                          │
├─────────────────────┬─────────────────────┬─────────────────────────────────────┤
│  🚀 Express.js      │  🔐 JWT Auth        │  📁 File Upload                    │
│  REST API Server    │  Middleware         │  Media Processing                   │
│                     │                     │                                      │
└──────────┬──────────┴──────────┬──────────┴──────────┬──────────────────────────┘
           │                     │                     │
           ▼                     ▼                     ▼
┌──────────────────────────────────────────────────────────────────────────────────┐
│                        BUSINESS LOGIC                                           │
├─────────────────────┬─────────────────────┬─────────────────────────────────────┤
│  👤 User            │  💬 Message         │  👥 Group                          │
│  Management         │  Processing         │  Management                         │
│                     │                     │                                      │
└──────────┬──────────┴──────────┬──────────┴──────────┬──────────────────────────┘
           │                     │                     │
           ▼                     ▼                     ▼
┌──────────────────────────────────────────────────────────────────────────────────┐
│                         REAL-TIME LAYER                                         │
├─────────────────────┬─────────────────────┬─────────────────────────────────────┤
│  ⚡ Socket.io       │  🔔 Event           │  🌐 Presence                       │
│  Server             │  Broadcasting       │  Management                         │
│                     │                     │                                      │
└──────────┬──────────┴──────────┬──────────┴──────────┬──────────────────────────┘
           │                     │                     │
           ▼                     ▼                     ▼
┌──────────────────────────────────────────────────────────────────────────────────┐
│                          DATA LAYER                                             │
├─────────────────────┬─────────────────────┬─────────────────────────────────────┤
│  🗄️ MongoDB         │  📊 Mongoose ODM   │  📚 Collections                    │
│  Database           │  Data Modeling      │  (Users, Conversations)            │
│                     │                     │                                      │
└─────────────────────┴─────────────────────┴─────────────────────────────────────┘
                              │
                              ▼
┌──────────────────────────────────────────────────────────────────────────────────┐
│                       EXTERNAL SERVICES                                         │
├─────────────────────┬─────────────────────┬─────────────────────────────────────┤
│  📹 ZegoCloud       │  ☁️ Cloud Storage   │  🔔 Push Notifications             │
│  Video Platform     │  Media Files        │  Real-time Alerts                  │
└─────────────────────┴─────────────────────┴─────────────────────────────────────┘
```

## 📁 **Project Structure**

```
📦 real-time-chat-app/
├── 📁 client/                          # 🎨 React Frontend Application
│   ├── 📁 public/                      # 🌐 Static Assets
│   │   ├── 📄 index.html               # 🌐 Main HTML template
│   │   └── 🎨 assets/                  # 🖼️ Images and icons
│   ├── 📁 src/                         # 💻 Source Code Directory
│   │   ├── 📁 components/              # 🧩 Reusable UI Components
│   │   │   ├── 📄 Avatar.jsx           # 👤 User avatar component
│   │   │   ├── 📄 Sidebar.jsx          # 📱 Navigation sidebar
│   │   │   ├── 📄 MessagePage.jsx      # 💬 Main chat interface
│   │   │   ├── 📄 GroupChat.jsx        # 👥 Group chat component
│   │   │   ├── 📄 VideoCall.jsx        # 📹 Video calling interface
│   │   │   ├── 📄 CreateMeeting.jsx    # 🎥 Meeting creation component
│   │   │   ├── 📄 MeetingRoom.jsx      # 🏢 Meeting room interface
│   │   │   ├── 📄 SearchUser.jsx       # 🔍 User search component
│   │   │   ├── 📄 UserSearchCard.jsx   # 👤 User search result card
│   │   │   ├── 📄 EditUserDetails.jsx  # ✏️ User profile editor
│   │   │   ├── 📄 Groupmsg.jsx         # 👥 Group message component
│   │   │   ├── 📄 Loading.jsx          # ⏳ Loading spinner
│   │   │   └── 📄 Divider.jsx          # ➖ UI divider component
│   │   ├── 📁 pages/                   # 📄 Main Application Pages
│   │   │   ├── 📄 Login.jsx            # 🚪 User login page
│   │   │   ├── 📄 Register.jsx         # 📝 User registration page
│   │   │   ├── 📄 Home.jsx             # 🏠 Main chat dashboard
│   │   │   └── 📄 Profile.jsx          # 👤 User profile page
│   │   ├── 📁 redux/                   # 📊 State Management
│   │   │   ├── 📄 store.js             # 🏪 Redux store configuration
│   │   │   ├── 📄 userSlice.js         # 👤 User state management
│   │   │   └── 📄 chatSlice.js         # 💬 Chat state management
│   │   ├── 📁 routes/                  # 🛣️ Application Routing
│   │   │   └── 📄 ProtectedRoute.jsx   # 🔐 Protected route component
│   │   ├── 📁 layout/                  # 🎨 Layout Components
│   │   │   └── 📄 AuthLayout.jsx       # 🔐 Authentication layout
│   │   ├── 📁 helpers/                 # 🛠️ Utility Functions
│   │   │   ├── 📄 uploadFile.js        # 📁 File upload utilities
│   │   │   └── 📄 formatTime.js        # ⏰ Time formatting helpers
│   │   ├── 📄 App.jsx                  # 🎯 Main App component
│   │   ├── 📄 main.jsx                 # 🚀 Application entry point
│   │   ├── 📄 App.css                  # 🎨 Main stylesheet
│   │   └── 📄 index.css                # 🎨 Global styles
│   ├── 📄 package.json                 # 📦 Frontend dependencies
│   ├── 📄 vite.config.js               # ⚙️ Vite configuration
│   ├── 📄 tailwind.config.js           # 🎨 Tailwind CSS config
│   ├── 📄 postcss.config.js            # 🎨 PostCSS configuration
│   └── 📄 .env                         # 🔒 Environment variables
├── 📁 server/                          # 🚀 Node.js Backend Server
│   ├── 📁 models/                      # 🗄️ Database Models
│   │   ├── 📄 UserModel.js             # 👤 User data schema
│   │   └── 📄 ConversationModel.js     # 💬 Conversation schema
│   ├── 📁 controllers/                 # 🎛️ Business Logic Controllers
│   │   ├── 📄 userController.js        # 👤 User management logic
│   │   ├── 📄 authController.js        # 🔐 Authentication logic
│   │   ├── 📄 chatController.js        # 💬 Chat management logic
│   │   └── 📄 groupController.js       # 👥 Group management logic
│   ├── 📁 routes/                      # 🛣️ API Route Definitions
│   │   ├── 📄 userRoutes.js            # 👤 User API endpoints
│   │   ├── 📄 authRoutes.js            # 🔐 Authentication endpoints
│   │   ├── 📄 chatRoutes.js            # 💬 Chat API endpoints
│   │   └── 📄 groupRoutes.js           # 👥 Group API endpoints
│   ├── 📁 socket/                      # ⚡ Real-time Socket Handlers
│   │   ├── 📄 socketHandlers.js        # ⚡ Socket event handlers
│   │   ├── 📄 messageHandlers.js       # 💬 Message socket events
│   │   └── 📄 presenceHandlers.js      # 🌐 Presence management
│   ├── 📁 config/                      # ⚙️ Configuration Files
│   │   ├── 📄 database.js              # 🗄️ MongoDB connection
│   │   └── 📄 cloudinary.js            # ☁️ File upload config
│   ├── 📁 helpers/                     # 🛠️ Server Utilities
│   │   ├── 📄 jwt.js                   # 🔐 JWT token utilities
│   │   ├── 📄 bcrypt.js                # 🔒 Password encryption
│   │   └── 📄 fileUpload.js            # 📁 File upload helpers
│   ├── 📄 index.js                     # 🎯 Server entry point
│   ├── 📄 package.json                 # 📦 Backend dependencies
│   └── 📄 .env                         # 🔒 Environment variables
├── 📄 .gitignore                       # 🚫 Git ignore rules
└── 📄 README.md                        # 📖 Project documentation
```

---

## 🛠️ **Technology Stack**

### 🎨 **Frontend Technologies**
| Technology | Version | Purpose | Documentation |
|------------|---------|---------|---------------|
| ![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB) | **18.3.1** | UI Library | [docs](https://react.dev/) |
| ![Vite](https://img.shields.io/badge/Vite-B73BFE?style=flat&logo=vite&logoColor=FFD62E) | **Latest** | Build Tool | [docs](https://vitejs.dev/) |
| ![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-593D88?style=flat&logo=redux&logoColor=white) | **2.2.7** | State Management | [docs](https://redux-toolkit.js.org/) |
| ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=flat&logo=react-router&logoColor=white) | **6.26.1** | Client-side Routing | [docs](https://reactrouter.com/) |
| ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white) | **Latest** | CSS Framework | [docs](https://tailwindcss.com/) |
| ![Socket.io Client](https://img.shields.io/badge/Socket.io_Client-010101?style=flat&logo=socket.io&logoColor=white) | **4.7.5** | Real-time Client | [docs](https://socket.io/docs/v4/client-api/) |

### 🚀 **Backend Technologies**
| Technology | Version | Purpose | Documentation |
|------------|---------|---------|---------------|
| ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=flat&logo=node.js&logoColor=white) | **Latest** | Runtime Environment | [docs](https://nodejs.org/) |
| ![Express.js](https://img.shields.io/badge/Express.js-404D59?style=flat&logo=express) | **4.19.2** | Web Framework | [docs](https://expressjs.com/) |
| ![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=flat&logo=mongodb&logoColor=white) | **Latest** | NoSQL Database | [docs](https://www.mongodb.com/) |
| ![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=flat&logo=mongoose&logoColor=white) | **8.5.4** | ODM Library | [docs](https://mongoosejs.com/) |
| ![Socket.io](https://img.shields.io/badge/Socket.io-010101?style=flat&logo=socket.io&logoColor=white) | **4.7.5** | Real-time Server | [docs](https://socket.io/docs/v4/) |
| ![JWT](https://img.shields.io/badge/JWT-000000?style=flat&logo=JSON%20web%20tokens&logoColor=white) | **9.0.2** | Authentication | [docs](https://jwt.io/) |

### 🎥 **Video & Media Technologies**
| Technology | Purpose | Integration |
|------------|---------|-------------|
| **ZegoCloud** | Video Calling & Meetings | High-quality video communication platform |
| **Moment.js** | Date & Time Formatting | Message timestamps and time-based features |
| **React Hot Toast** | Notification System | User-friendly toast notifications |
| **React Icons** | Icon Library | Comprehensive icon set for UI elements |

### 🔐 **Security & Authentication**
- **![bcryptjs](https://img.shields.io/badge/bcryptjs-FF6B35?style=flat)** - Password hashing and encryption
- **![Cookie Parser](https://img.shields.io/badge/Cookie_Parser-FF6B35?style=flat)** - HTTP cookie parsing middleware
- **![CORS](https://img.shields.io/badge/CORS-FF6B35?style=flat)** - Cross-Origin Resource Sharing configuration

### 🛠️ **Development Tools**
- **![Nodemon](https://img.shields.io/badge/Nodemon-76D04B?style=flat&logo=nodemon&logoColor=white)** - Development server with auto-restart
- **![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=flat&logo=eslint&logoColor=white)** - Code linting and quality
- **![PostCSS](https://img.shields.io/badge/PostCSS-DD3A0A?style=flat&logo=postcss&logoColor=white)** - CSS processing

---

## 🔄 **Application Flow**

```
🌐 User Visits Chat Application
            │
            ▼
    ┌───────────────────┐
    │ 🔐 Authentication │
    │     Check         │
    └─────────┬─────────┘
              │
        ┌─────▼─────┐
        │    No     │
        ▼           ▼
📝 Register/       💬 Chat Dashboard
   Login              │
        │         ┌───┼───┬───────┬───────┐
        ▼         │   │   │       │       │
🛡️ JWT Auth       │   │   │       │       │
Validation        ▼   ▼   ▼       ▼       ▼
        │    💬 Private 👥 Group 📹 Video 🔍 Search
        ▼    Chat     Chat   Call   Users
🍪 Token Storage  │      │      │      │
        │         ▼      ▼      ▼      ▼
        └────► ⚡ Real-time Communication Hub
                      │
               ┌──────┼──────┬──────────┐
               │      │      │          │
               ▼      ▼      ▼          ▼
          💬 Message 🌐 Presence 📹 Video 📁 Media
          Delivery  Updates   Calls   Share
               │      │      │          │
               ▼      ▼      ▼          ▼
            ┌─────────────────────────────┐
            │  ⚡ Socket.io Real-time     │
            │  Event Broadcasting        │
            └────────────┬────────────────┘
                         │
                         ▼
                   🗄️ MongoDB
                   Message Storage
                         │
                         ▼
                   📱 All Connected Clients
                   (Real-time Updates)
```

---

## ⚡ **Real-Time Features Architecture**

### 💬 **Message System**
```
📝 User Types Message
         │
         ▼
┌─────────────────────┐
│  🎯 Client Sends    │
│  Socket Event       │
└─────────┬───────────┘
          │
          ▼
┌─────────────────────┐
│  🚀 Server          │
│  Processes Event    │
└─────────┬───────────┘
          │
          ▼
┌─────────────────────┐
│  🗄️ Save to         │
│  Database           │
└─────────┬───────────┘
          │
          ▼
┌─────────────────────┐
│  📡 Broadcast to    │
│  All Participants   │
└─────────────────────┘
```

### 🌐 **Presence Management**
```
👤 User Connection Status
├── 🟢 Online (Active connection)
├── 🟡 Away (Inactive but connected)
├── 🔴 Offline (Disconnected)
└── 💬 Typing (Currently composing)

Real-time Updates:
├── ⚡ Connection events
├── 📊 Status broadcasts
├── 🔔 Presence notifications
└── 📱 UI status indicators
```

### 📹 **Video Call Integration**
```
🎥 Video Call Initiation
         │
         ▼
┌─────────────────────┐
│  📞 Call Request    │
│  via Socket         │
└─────────┬───────────┘
          │
          ▼
┌─────────────────────┐
│  🔔 Recipient       │
│  Notification       │
└─────────┬───────────┘
          │
          ▼
┌─────────────────────┐
│  🎯 ZegoCloud       │
│  Room Creation      │
└─────────┬───────────┘
          │
          ▼
📹 Video Communication
```

---

## 🚀 **Installation & Setup**

### 📋 **Prerequisites**

Before setting up the Real-Time Chat Application, ensure you have:

- **Node.js** (v14.0.0 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** - Package manager
- **MongoDB** (v4.4 or higher) - [Download](https://www.mongodb.com/try/download/community)
- **Git** for version control - [Download](https://git-scm.com/)

### 🔧 **Local Development Setup**

#### 1️⃣ **Clone Repository**
```bash
git clone https://github.com/M-hell/chat-app.git
cd chat-app
```

#### 2️⃣ **Server Setup**
```bash
cd server
npm install

# Create environment file
cp .env.example .env

# Configure environment variables
nano .env
```

**Server Environment Configuration** (`.env`):
```env
# Server Configuration
PORT=8080
NODE_ENV=development

# Database Configuration
MONGODB_URI=mongodb://localhost:27017/chat-app
MONGODB_TEST_URI=mongodb://localhost:27017/chat-app-test

# Authentication
JWT_SECRET=your-super-secure-jwt-secret-key-here
JWT_EXPIRE=7d

# CORS Configuration
CLIENT_URL=http://localhost:5173

# File Upload Configuration
MAX_FILE_SIZE=10485760
ALLOWED_FILE_TYPES=jpeg,jpg,png,gif,mp4,mov,avi

# ZegoCloud Configuration (Optional)
ZEGO_APP_ID=your_zego_app_id
ZEGO_APP_SIGN=your_zego_app_sign
```

#### 3️⃣ **Client Setup**
```bash
cd ../client
npm install

# Create environment file
cp .env.example .env
```

**Client Environment Configuration** (`.env`):
```env
# API Configuration
VITE_API_URL=http://localhost:8080/api
VITE_SOCKET_URL=http://localhost:8080

# Application Configuration
VITE_APP_TITLE=Real-Time Chat App
VITE_APP_DESCRIPTION=Modern messaging platform

# ZegoCloud Configuration
VITE_ZEGO_APP_ID=your_zego_app_id
VITE_ZEGO_SERVER_SECRET=your_zego_server_secret
```

#### 4️⃣ **Database Setup**
```bash
# Start MongoDB service
sudo systemctl start mongod  # Linux
brew services start mongodb  # macOS
# Or start MongoDB manually

# MongoDB should be running on mongodb://localhost:27017
```

#### 5️⃣ **Start Development Servers**

**Terminal 1 - Backend Server:**
```bash
cd server
npm run dev
```

**Terminal 2 - Frontend Client:**
```bash
cd client
npm run dev
```

**Terminal 3 - MongoDB (if not running as service):**
```bash
mongod
```

**🌐 Application URLs:**
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:8080
- **Socket Server**: http://localhost:8080

---

## 🎯 **Usage Guide**

### 🔐 **Authentication System**

```
👤 New User Registration
         │
         ▼
┌─────────────────────┐      ┌─────────────────────┐
│   📧 Email & Pass   │  OR  │  🔗 Quick Demo      │
│   Registration      │      │  Account            │
└─────────┬───────────┘      └─────────┬───────────┘
          │                            │
          └────────────┬───────────────┘
                       ▼
              ┌─────────────────────┐
              │  🛡️ JWT Token       │
              │  Generation         │
              └─────────┬───────────┘
                        │
                        ▼
               💬 Chat Dashboard Access
```

### 💬 **Messaging Workflow**

#### **1. Private Chat**
- **Search for users** in the user directory
- **Start private conversation** by clicking on a user
- **Send messages** with real-time delivery
- **Share media files** (images, videos)

#### **2. Group Chat Management**
```bash
# Group creation process
👥 Create Group → 👤 Add Members → 💬 Start Chatting → 🎛️ Manage Settings
```

#### **3. Real-Time Communication**
```
💬 Message Composition
         │
         ▼
┌─────────────────────┐
│  ⚡ Socket.io       │
│  Event Emission     │
└─────────┬───────────┘
          │
          ▼
┌─────────────────────┐
│  🚀 Server          │
│  Message Processing │
└─────────┬───────────┘
          │
          ▼
┌─────────────────────┐
│  📡 Real-time       │
│  Delivery           │
└─────────────────────┘
```

### 📹 **Video Calling Features**

#### **One-on-One Video Calls**
- **Initiate calls** directly from chat interface
- **High-quality video/audio** powered by ZegoCloud
- **Screen sharing** for presentations and collaborations
- **Call controls** (mute, video toggle, end call)

#### **Group Video Meetings**
- **Create meeting rooms** for multiple participants
- **Share meeting links** for easy joining
- **Meeting management** with host controls
- **Recording capabilities** (if configured)

### 🌐 **Online Presence System**

#### **Status Indicators**
```
User Presence States:
├── 🟢 Online - Actively using the application
├── 🟡 Away - Inactive but connected
├── 🔴 Offline - Not connected to the application
└── 💬 Typing - Currently composing a message

Automatic Updates:
├── ⚡ Connection status changes
├── 📱 Activity-based presence
├── 🔔 Status notifications to contacts
└── ⏰ Last seen timestamps
```

---

## 🔗 **API Documentation**

### 🔐 **Authentication Endpoints**

#### **POST** `/api/auth/register`
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securePassword123",
  "profile_pic": "profile_image_url"
}
```

#### **POST** `/api/auth/login`
```json
{
  "email": "john@example.com",
  "password": "securePassword123"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Login successful",
  "user": {
    "id": "user_id",
    "name": "John Doe",
    "email": "john@example.com",
    "profile_pic": "profile_image_url",
    "online": true
  },
  "token": "jwt_token_here"
}
```

### 👤 **User Management API**

#### **GET** `/api/users/search`
**Query Parameters:** `search=username_or_email`

#### **PUT** `/api/users/update-profile`
```json
{
  "name": "Updated Name",
  "profile_pic": "new_profile_image_url"
}
```

#### **GET** `/api/users/online-status`
Returns list of online users and their status.

### 💬 **Chat Management API**

#### **GET** `/api/conversations`
Retrieves all conversations for the authenticated user.

#### **POST** `/api/conversations`
```json
{
  "sender": "user_id",
  "receiver": "recipient_id",
  "messageType": "text",
  "message": "Hello there!"
}
```

#### **GET** `/api/conversations/:conversationId/messages`
Retrieves message history for a specific conversation.

### 👥 **Group Management API**

#### **POST** `/api/groups/create`
```json
{
  "name": "Group Name",
  "description": "Group description",
  "members": ["user_id_1", "user_id_2"],
  "groupImage": "group_image_url"
}
```

#### **PUT** `/api/groups/:groupId/add-member`
```json
{
  "userId": "user_id_to_add"
}
```

---

## ⚡ **Socket.io Events**

### 📡 **Real-Time Events**

#### **Client to Server Events**
```javascript
// Join user room for presence
socket.emit('join-user', userId);

// Send message
socket.emit('new-message', {
  sender: 'user_id',
  receiver: 'recipient_id',
  message: 'Hello!',
  messageType: 'text'
});

// Typing indicators
socket.emit('typing-start', { conversationId, userId });
socket.emit('typing-stop', { conversationId, userId });

// Video call events
socket.emit('video-call-request', { from, to, roomId });
socket.emit('video-call-accept', { roomId, userId });
socket.emit('video-call-reject', { roomId, userId });
```

#### **Server to Client Events**
```javascript
// New message received
socket.on('message-received', (messageData) => {
  // Update UI with new message
});

// User online status
socket.on('user-online', (userId) => {
  // Update user status in UI
});

// Typing indicators
socket.on('user-typing', ({ userId, conversationId }) => {
  // Show typing indicator
});

// Video call notifications
socket.on('incoming-video-call', (callData) => {
  // Show incoming call notification
});
```

---

## 🧪 **Testing**

### 🔧 **Running Tests**

```bash
# Backend Tests
cd server
npm test

# Frontend Tests
cd client
npm test

# Integration Tests
npm run test:integration

# E2E Tests
npm run test:e2e
```

### 📊 **Test Coverage**

```bash
# Generate coverage report
npm run test:coverage

# View coverage report
open coverage/lcov-report/index.html
```

### 🎯 **Testing Areas**
- **Unit Testing**: Component and utility function testing
- **Integration Testing**: API endpoint testing
- **Socket Testing**: Real-time event testing
- **E2E Testing**: Complete user workflow testing

---

## 🚀 **Deployment**

### ☁️ **Render Deployment (Current)**

The application is currently deployed on Render at: https://chat-app-83p9.onrender.com/

#### **Deployment Configuration**
1. **Connect GitHub repository** to Render
2. **Configure environment variables** in Render dashboard
3. **Set up MongoDB Atlas** for production database
4. **Configure build settings:**
   ```bash
   Build Command: npm install && npm run build
   Start Command: npm start
   ```

#### **Environment Variables for Production**
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/chatapp
JWT_SECRET=production_jwt_secret
CLIENT_URL=https://chat-app-83p9.onrender.com
NODE_ENV=production
```

### 🐳 **Docker Deployment**

```dockerfile
# Dockerfile.server
FROM node:18-alpine
WORKDIR /app
COPY server/package*.json ./
RUN npm ci --only=production
COPY server/ .
EXPOSE 8080
CMD ["npm", "start"]
```

```dockerfile
# Dockerfile.client
FROM node:18-alpine AS build
WORKDIR /app
COPY client/package*.json ./
RUN npm ci
COPY client/ .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

**Docker Compose:**
```yaml
version: '3.8'
services:
  server:
    build:
      context: .
      dockerfile: Dockerfile.server
    ports:
      - "8080:8080"
    environment:
      - MONGODB_URI=mongodb://mongo:27017/chatapp
    depends_on:
      - mongo

  client:
    build:
      context: .
      dockerfile: Dockerfile.client
    ports:
      - "3000:80"
    depends_on:
      - server

  mongo:
    image: mongo:6.0
    ports:
      - "27017:27017"
    volumes:
      - mongo_data:/data/db

volumes:
  mongo_data:
```

### 🌐 **Alternative Deployment Options**

#### **Vercel (Frontend) + Railway (Backend)**
- Deploy React app to Vercel for optimal performance
- Deploy Node.js server to Railway for backend services
- Use MongoDB Atlas for database hosting

#### **AWS Deployment**
- **EC2 instances** for server hosting
- **S3 bucket** for media file storage
- **CloudFront** for CDN distribution
- **RDS or DocumentDB** for database

---

## 🤝 **Contributing**

### 🛡️ **Contribution Guidelines**

We welcome contributions from developers and the community! Here's how you can contribute:

#### **🔄 Development Process**
1. **Fork** the repository
2. **Create** feature branch (`git checkout -b feature/video-call-improvements`)
3. **Implement** changes following coding standards
4. **Test** thoroughly (unit tests, integration tests)
5. **Commit** with clear messages (`git commit -m 'Add: Enhanced video call quality'`)
6. **Push** to branch (`git push origin feature/video-call-improvements`)
7. **Create** Pull Request with detailed description

#### **📝 Code Standards**
- **JavaScript/React**: ES6+ with consistent formatting
- **Node.js**: Express.js best practices and error handling
- **Socket.io**: Proper event handling and error management
- **Database**: Efficient MongoDB queries and indexing
- **UI/UX**: Responsive design and accessibility compliance

#### **🧪 Testing Requirements**
- Unit tests for all new components and utilities
- Integration tests for API endpoints and socket events
- Real-time functionality testing
- Cross-browser compatibility testing

#### **🎯 Contribution Areas**
- ⚡ **Real-time Features** - Enhanced messaging and presence features
- 📹 **Video Integration** - Improved video calling and screen sharing
- 🎨 **UI/UX Improvements** - Modern design and user experience enhancements
- 🔐 **Security Enhancements** - Advanced authentication and data protection
- 📱 **Mobile Optimization** - Enhanced mobile responsiveness
- 🌍 **Internationalization** - Multi-language support

---

## 📞 **Support & Contact**

### 🛠️ **Technical Support**

**🐛 Issue Reporting:**
- **GitHub Issues:** [Report Bug](https://github.com/M-hell/chat-app/issues/new?template=bug_report.md)
- **Feature Request:** [Request Feature](https://github.com/M-hell/chat-app/issues/new?template=feature_request.md)
- **Documentation:** [Improve Docs](https://github.com/M-hell/chat-app/issues/new?template=documentation.md)

**💬 Community Support:**
- **Discussions:** [GitHub Discussions](https://github.com/M-hell/chat-app/discussions)
- **Real-time Help:** Use the app itself for community support
- **Documentation:** Check README and code comments for guidance

### 👨‍💻 **Developer Contact**

**Project Maintainer:** [M-hell]
- **GitHub:** [@M-hell](https://github.com/M-hell)
- **Email:** [Contact via GitHub]
- **Live Demo:** [https://chat-app-83p9.onrender.com/](https://chat-app-83p9.onrender.com/)

### 🎯 **Feature Requests**
Have ideas for new features? We'd love to hear them!
- **Real-time Polls** in group chats
- **Message Reactions** and emoji responses
- **File Sharing** enhancements
- **Voice Messages** support
- **Chat Themes** and customization

---

## 📄 **License**

```
MIT License

Copyright (c) 2024 Real-Time Chat Application

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 🔗 **Important Links**

| Resource | URL | Description |
|----------|-----|-------------|
| 🚀 **Live Application** | [chat-app-83p9.onrender.com](https://chat-app-83p9.onrender.com/) | Production deployment |
| 📚 **GitHub Repository** | [M-hell/chat-app](https://github.com/M-hell/chat-app) | Source code & documentation |
| 📹 **Video Demo** | [Demo Video](https://chat-app-83p9.onrender.com/) | Application walkthrough |
| 🎯 **Features Overview** | [Live Demo](https://chat-app-83p9.onrender.com/) | Try all features live |
| 🔧 **Technical Docs** | [README](https://github.com/M-hell/chat-app/blob/main/README.md) | Complete documentation |

---

<div align="center">

### 💬 **Connecting People Through Technology**

**Built with modern web technologies to provide seamless, real-time communication experiences.**

[![GitHub Stars](https://img.shields.io/github/stars/M-hell/chat-app?style=social)](https://github.com/M-hell/chat-app)
[![Live Demo](https://img.shields.io/badge/🚀-Try_Live_Demo-4A90E2?style=social)](https://chat-app-83p9.onrender.com/)

**"Communication is the bridge between confusion and clarity."**

---

*Last Updated: September 2025 | Version: 1.0.0 | Built with ❤️ for Real-Time Communication*

</div>