# User Analytics Platform

A full-stack user analytics platform inspired by tools like Hotjar, Mixpanel, and Google Analytics.

This project was built as part of the Full Stack Engineer assignment for CausalFunnel.

The platform tracks user interactions on a website, stores analytics events, and visualizes user behavior through session analytics and click heatmaps.

---

# Live Demo

## Dashboard

   Deployed dashboard URL here:

```bash
https://user-analytics-dashboard-delta.vercel.app/
```

## Backend API

 Deployed backend URL here:

```bash
https://user-analytics-api-zzqo.onrender.com/
```

## Demo Ecommerce Website

Deployed demo website URL here:

```bash
https://spontaneous-cheesecake-1ab7c2.netlify.app/
```

---

# Project Architecture

```text
Demo Ecommerce Website
        ↓
Tracking SDK (tracker.js)
        ↓
Analytics API (Express + MongoDB)
        ↓
MongoDB Atlas
        ↓
Analytics Dashboard (Next.js)
```

---

# Repositories

## 1. Analytics Backend API

Repository:

```bash
user-analytics-api (https://github.com/amarkumar55/user-analytics-api)
```

Tech Stack:

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* Express Validator

Features:

* Event ingestion APIs
* Session analytics
* Heatmap data APIs
* Validation middleware
* Error handling middleware
* Pagination support
* MongoDB indexing

---

## 2. Analytics Dashboard

Repository:

```bash
user-analytics-dashboard (https://github.com/amarkumar55/user-analytics-dashboard)
```

Tech Stack:

* Next.js
* React
* TypeScript
* Tailwind CSS

Features:

* Sessions dashboard
* User journey timeline
* Heatmap visualization
* Loading and error states
* Reusable components
* Typed API layer

---

## 3. Demo Ecommerce Website

Repository:

```bash
user-analytics-demo-site (https://github.com/amarkumar55/user-analytics-demo-site)
```

Tech Stack:

* HTML
* CSS
* JavaScript

Features:

* Product interaction simulation
* Tracking SDK integration
* Click tracking
* Page view tracking
* Session tracking

---

# Features

## Event Tracking

The tracking SDK automatically captures:

* Page views
* Click events
* Session IDs
* Page URLs
* Event timestamps
* Click coordinates
* Device information
* Screen dimensions

---

## Session Analytics

The dashboard provides:

* Session list
* Event counts
* User journey timeline
* Ordered event history

---

## Heatmap Visualization

The heatmap view visualizes:

* Click distribution
* User interaction hotspots
* Page engagement patterns

---

# API Endpoints

## POST /api/v1/events

Stores tracking events.

Example payload:

```json
{
  "sessionId": "abc123",
  "type": "click",
  "url": "https://spontaneous-cheesecake-1ab7c2.netlify.app/",
  "timestamp": "2026-05-12T10:00:00Z",
  "x": 120,
  "y": 340,
  "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
  "screenWidth": 1440,
  "screenHeight": 900
}

```

---

## GET /api/v1/sessions

Returns all sessions with event counts.

---

## GET /api/v1/sessions/:sessionId/events

Returns ordered events for a session.

---

## GET /api/v1/heatmap?url=<page-url>

Returns click coordinate data for heatmap visualization.

---

# Database Design

MongoDB stores analytics events in a flexible document structure.

Indexes were added for:

* sessionId
* timestamp
* url
* event type

Compound indexes improve:

* session queries
* heatmap queries
* timeline sorting

---

# Deployment

| Service     | Platform      |
| ----------- | ------------- |
| Dashboard   | Vercel        |
| Backend API | Render        |
| Database    | MongoDB Atlas |
| Demo Site   | Netlify       |

---

# Setup Instructions

## Clone Repositories

```bash
# Backend
https://github.com/amarkumar55/user-analytics-api

# Dashboard
https://github.com/amarkumar55/user-analytics-dashboard

# Demo Site
https://github.com/amarkumar55/user-analytics-demo-site
```

---

# Backend Setup

```bash
cd user-analytics-api
npm install
```

Create `.env`

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Run:

```bash
npm run dev
```

---

# Dashboard Setup

```bash
cd user-analytics-dashboard
npm install
```

Create `.env.local`

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api/v1/
```

Run:

```bash
npm run dev
```

---

# Demo Site Setup

Open:

```bash
index.html
```

Ensure:

```javascript
tracker.js
```

points to the correct backend API URL.

---

# Engineering Decisions

## Why MongoDB?

Analytics events are document-oriented and append-heavy.

MongoDB provides:

* schema flexibility
* fast writes
* aggregation support
* scalable querying

---

## Why Next.js?

Next.js provides:

* fast frontend development
* production-ready architecture
* TypeScript support
* excellent deployment experience

---

## Why Separate Services?

The project intentionally separates:

* frontend dashboard
* analytics API
* tracked website

This mirrors real-world analytics systems and demonstrates scalable service architecture.

---

# Future Improvements

Potential enhancements:

* Real-time analytics using Socket.IO
* Scroll tracking
* Rage click detection
* Session replay
* Geo-location analytics
* Device analytics dashboard
* Event filtering
* Charts and metrics
* Authentication and multi-tenant support
* Rate limiting and security hardening

---

# Screenshots

Add screenshots here after deployment.

Suggested screenshots:

* Sessions dashboard
  <img width="1908" height="1020" alt="Screenshot from 2026-05-12 17-20-49" src="https://github.com/user-attachments/assets/b1dc36e0-e97e-4e73-a179-98f65489937d" />
  <img width="1908" height="1020" alt="Screenshot from 2026-05-12 17-20-56" src="https://github.com/user-attachments/assets/96264c24-3974-48fc-8ea1-7c9793642efc" />

* User journey timeline
  <img width="1908" height="1020" alt="Screenshot from 2026-05-12 17-21-02" src="https://github.com/user-attachments/assets/45443593-8b19-4575-9254-cb03875340c8" />

* Heatmap view
  <img width="1908" height="1020" alt="Screenshot from 2026-05-12 17-21-17" src="https://github.com/user-attachments/assets/4d9f9467-5fd7-4a80-b36a-78834eb8187c" />

* Demo ecommerce site
  <img width="921" height="777" alt="Screenshot from 2026-05-12 17-20-33" src="https://github.com/user-attachments/assets/24d85948-abe2-4eb5-97cb-6c6c84eafe28" />


---

# Assignment Requirements Coverage

| Requirement           | Status    |
| --------------------- | --------- |
| Page view tracking    | Completed |
| Click tracking        | Completed |
| Session tracking      | Completed |
| Backend APIs          | Completed |
| MongoDB storage       | Completed |
| Sessions dashboard    | Completed |
| User journey view     | Completed |
| Heatmap visualization | Completed |
| Deployment            | Completed |

---

# Author

Amar Kumar

Senior Software Engineer

Linkedin: https://www.linkedin.com/in/amarkumar241429017/

GitHub: https://github.com/amarkumar55


