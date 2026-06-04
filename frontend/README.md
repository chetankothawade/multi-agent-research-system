# Multi-Agent Deep Research Frontend

React frontend for the Multi-Agent Deep Research Platform. The UI is intentionally simple and Bootstrap-based for fast development, easy maintenance, and clear interview explanation.

## Tech Stack

- React
- TypeScript
- Vite
- Bootstrap 5
- React Router
- Redux Toolkit
- Axios
- Socket.IO Client

## Features

- User login
- User registration
- Protected routes
- JWT token persistence
- Research topic submission
- Live agent activity feed with Socket.IO
- Basic dashboard shell
- Report page placeholder
- Observability page placeholder

## Folder Structure

```text
src/
  components/
  features/
  hooks/
    useAppDispatch.ts
    useAppSelector.ts
  layouts/
    AppLayout.tsx
  pages/
    DashboardPage.tsx
    LoginPage.tsx
    ObservabilityPage.tsx
    RegisterPage.tsx
    ReportPage.tsx
    ResearchPage.tsx
  routes/
    ProtectedRoute.tsx
  services/
    api.ts
  store/
    authSlice.ts
    index.ts
  App.tsx
  main.tsx
  index.css
```

## Application Routes

| Route | Access | Purpose |
| --- | --- | --- |
| `/login` | Public | User login |
| `/register` | Public | User registration |
| `/dashboard` | Protected | Main user dashboard |
| `/research` | Protected | Start research and view live agent feed |
| `/report/:id` | Protected | Final report view |
| `/observability/:sessionId` | Protected | Session observability dashboard |

## Setup

Install dependencies:

```bash
npm install
```

Create optional environment file:

```bash
VITE_API_URL=http://localhost:4000
```

Start development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## API Integration

Axios client is configured in:

```text
src/services/api.ts
```

Default backend URL:

```text
http://localhost:4000
```

If `VITE_API_URL` is set, it overrides the default.

The Axios interceptor reads `accessToken` from `localStorage` and attaches it to requests:

```text
Authorization: Bearer <token>
```

## Authentication Flow

Login:

1. User enters email and password.
2. Frontend calls `POST /auth/login`.
3. Backend returns user and JWT access token.
4. Redux stores user/token.
5. Token is persisted in `localStorage`.
6. User is redirected to `/dashboard`.

Register:

1. User enters name, email, and password.
2. Frontend calls `POST /auth/register`.
3. Backend creates the user and returns user/token.
4. Redux stores credentials.
5. User is redirected to `/dashboard`.

Logout:

1. `logout` action clears Redux auth state.
2. `accessToken` is removed from `localStorage`.
3. User is redirected to `/login`.

## Protected Routes

Protected route logic lives in:

```text
src/routes/ProtectedRoute.tsx
```

If an access token exists, protected pages render. Otherwise, the user is redirected to `/login`.

## State Management

Redux store lives in:

```text
src/store/index.ts
```

Auth slice lives in:

```text
src/store/authSlice.ts
```

The auth slice stores:

- `user`
- `accessToken`

Typed hooks:

```text
src/hooks/useAppDispatch.ts
src/hooks/useAppSelector.ts
```

## Real-Time Agent Feed

The research page connects to Socket.IO after a research session starts.

Relevant file:

```text
src/pages/ResearchPage.tsx
```

Socket flow:

1. User submits a research topic.
2. Frontend calls `POST /research/start`.
3. Backend returns `sessionId`.
4. Frontend connects to Socket.IO.
5. Frontend emits `session:join` with the session id.
6. Backend emits `agent:event` messages.
7. Research page renders the live feed.

Socket events used:

```text
session:join
session:leave
agent:event
```

## Bootstrap Design Approach

The frontend uses Bootstrap classes directly for:

- Navbar
- Forms
- Buttons
- Cards
- Grid layout
- Alerts
- List groups

Custom CSS is intentionally minimal and located in:

```text
src/index.css
```

This keeps the UI simple and easy to explain during interviews.

## Main Pages

### LoginPage

File:

```text
src/pages/LoginPage.tsx
```

Responsibilities:

- Render login form.
- Call login API.
- Store credentials.
- Redirect after success.

### RegisterPage

File:

```text
src/pages/RegisterPage.tsx
```

Responsibilities:

- Render registration form.
- Call register API.
- Store credentials.
- Redirect after success.

### DashboardPage

File:

```text
src/pages/DashboardPage.tsx
```

Responsibilities:

- Show dashboard shell.
- Display summary cards.
- Link to research creation.

### ResearchPage

File:

```text
src/pages/ResearchPage.tsx
```

Responsibilities:

- Submit research topic.
- Start research session.
- Connect to Socket.IO.
- Render live agent events.

### ReportPage

File:

```text
src/pages/ReportPage.tsx
```

Responsibilities:

- Prepared for final report rendering.
- Will integrate with `GET /report/:id`.

### ObservabilityPage

File:

```text
src/pages/ObservabilityPage.tsx
```

Responsibilities:

- Prepared for observability dashboard.
- Will integrate with `GET /observability/session/:sessionId`.

## Interview Talking Points

### Why React Router?

The application has multiple screens with different access requirements. React Router provides declarative page routing and nested layouts.

### Why Redux Toolkit?

Authentication state is global. Redux Toolkit gives predictable state updates and a clean place to store the authenticated user and access token.

### Why Axios Interceptor?

Every protected API needs the JWT token. The interceptor centralizes this behavior so individual pages do not repeat token header logic.

### Why Socket.IO?

Research is a long-running workflow. Socket.IO lets the UI show live agent progress without polling the backend repeatedly.

### Why Bootstrap?

The design requirement is simple UI. Bootstrap provides reliable layout and components with minimal custom CSS.

## Current Limitations

- Dashboard summary cards are placeholders.
- Report page is prepared but not fully connected to the report API.
- Observability page is prepared but not fully connected to observability APIs.
- Token refresh is not implemented.
- Form validation is minimal on the frontend.

## Recommended Next Steps

1. Bind dashboard metrics to backend data.
2. Render final markdown report in `ReportPage`.
3. Build full observability UI with timeline and step drawer.
4. Add frontend form validation with Zod or React Hook Form.
5. Add loading states and toast notifications.
6. Add route-level ownership and not-found states.
7. Add component tests for auth and protected route behavior.

