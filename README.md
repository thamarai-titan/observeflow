# 🚀 ObserveFlow

ObserveFlow is a lightweight API monitoring and error tracking platform for Node.js applications.

It allows developers to monitor:

* 📊 API request logs
* ⚡ Response times
* ❌ Server errors
* 📈 Performance metrics

Using a simple middleware-based SDK, ObserveFlow automatically tracks requests without affecting application performance.

---

## 🧠 Why ObserveFlow?

Modern applications need visibility.

ObserveFlow provides:

* Zero-latency tracking (using `res.on('finish')`)
* Automatic error monitoring
* Project-based API key authentication
* Clean dashboard analytics
* Lightweight SDK integration

Monitoring should never slow down your users — and ObserveFlow is built with that principle.

---

## 🛠 Tech Stack

### Backend

* Node.js
* Express
* PostgreSQL
* Prisma ORM
* JWT Authentication

### Frontend (Dashboard)

* Next.js
* Tailwind CSS

### SDK

* Express Middleware
* API Key Based Authentication

---

## 🏗 System Architecture

```
Client App
   │
   │ (Express Middleware SDK)
   ▼
ObserveFlow API (/api/track)
   │
   ▼
PostgreSQL Database
   │
   ▼
Dashboard Analytics (Next.js)
```

---

## 📦 Features

### 🔐 Authentication

* User registration
* Login with JWT
* Protected dashboard routes

### 📁 Project Management

* Create projects
* Generate API keys
* Regenerate API keys
* Delete projects

### 📊 Request Monitoring

* Track HTTP method
* Track status codes
* Track response time
* Track endpoint paths

### ❌ Error Tracking

* Capture unhandled errors
* Capture stack traces
* Track 500 responses
* Centralized error logging

### 📈 Analytics

* Total requests
* Error rate
* Average response time
* Success percentage

---

## 🗂 Database Models (Prisma)

### User

* id
* email
* password
* name
* createdAt

### Project

* id
* name
* description
* apiKey
* userId
* createdAt

### RequestLog

* id
* path
* method
* statusCode
* responseTime
* projectId
* createdAt

### ErrorLog

* id
* path
* method
* message
* stack
* projectId
* createdAt

---

## 🔑 API Endpoints

### Authentication

**POST /api/auth/register**
Register new user

**POST /api/auth/login**
Login and receive JWT

**GET /api/auth/me**
Get logged-in user info

---

### Projects

**POST /api/projects**
Create new project (generates API key)

**GET /api/projects**
Get all user projects

**GET /api/projects/:id**
Get single project details

**DELETE /api/projects/:id**
Delete project

**POST /api/projects/:id/regenerate-key**
Generate new API key

---

### Logs

**GET /api/projects/:id/logs**
Get request logs

**GET /api/projects/:id/errors**
Get error logs

**GET /api/projects/:id/stats**
Get analytics data

---

### SDK Tracking Endpoint

**POST /api/track**

Used internally by SDK.

**Headers**

```
x-api-key: your_project_api_key
```

**Body**

```json
{
  "path": "/login",
  "method": "POST",
  "statusCode": 200,
  "responseTime": 120
}
```

---

## 🧩 SDK Usage

Install SDK:

```bash
bun add observeflow
```

Import and use:

```ts
import observeflow from "observeflow"

app.use(observeflow({
  apiKey: "sk_live_xxxxx"
}))
```

---

## ⚡ Zero-Latency Tracking

ObserveFlow uses:

```ts
res.on("finish", ...)
```

This ensures:

* Data is sent after response is completed
* No delay to end user
* No blocking behavior

Monitoring runs silently in the background.

---

## ❌ Error Tracking Middleware

```ts
import { observeflowErrorHandler } from "observeflow"

app.use(observeflowErrorHandler({
  apiKey: "sk_live_xxxxx"
}))
```

This captures:

* Thrown errors
* Unhandled exceptions
* Stack traces

---

## 📁 Project Structure (Backend)

```
src/
 ├── controllers/
 ├── routes/
 ├── middleware/
 │    ├── auth.middleware.ts
 │    ├── error.middleware.ts
 ├── services/
 ├── prisma/
 ├── utils/
 ├── app.ts
 └── server.ts
```

---

## 📁 Dashboard Structure (Next.js)

```
app/
 ├── login/
 ├── register/
 ├── dashboard/
 │    ├── projects/
 │    ├── logs/
 │    ├── errors/
 └── layout.tsx
```

---

## 🧪 Local Development Setup

### 1️⃣ Clone Repository

```bash
git clone <repo-url>
cd observeflow
```

### 2️⃣ Install Dependencies

```bash
bun install
```

### 3️⃣ Configure Environment Variables

Create `.env`:

```
DATABASE_URL=your_postgres_url
JWT_SECRET=your_secret
```

### 4️⃣ Run Prisma Migration

```bash
bunx prisma migrate dev
```

### 5️⃣ Start Development Server

```bash
bun dev
```

---

## 🔒 Security Design

* Dashboard → JWT authentication
* SDK → API key authentication
* API keys are unique per project
* API keys can be rotated

---

## 🚀 Future Roadmap

* Log batching
* Background job queue
* Uptime monitoring
* Alerts (Email / Slack)
* Performance breakdown per endpoint
* Rate limiting alerts
* Production-level scaling

---

## 🎯 Vision

ObserveFlow aims to become a lightweight alternative to:

* Sentry
* Datadog
* NewRelic

Focused on simplicity, speed, and developer-first experience.
