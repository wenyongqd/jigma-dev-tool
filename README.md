# React & TypeScript Mastery: Best Practices 2023
> Exclusive Developer Tool

Installation and Usage:

```sh
npx jigma-dev-tool
```
```jsx
import { DevTools, loadServer } from "jigma-dev-tool";

loadServer(() =>
  ReactDOM.render(
    <React.StrictMode>
      <Profiler id={"Root App"} phases={["mount"]}>
        <AppProviders>
          <DevTools />
          <App />
        </AppProviders>
      </Profiler>
    </React.StrictMode>,
    document.getElementById("root")
  )
);
```

## Introduction to Two Main Features
### 1. simulate the behavior of an API server
Two main problems with traditional teaching project backend service:

- Fragile service, limited number of requests, unstable, and if it goes down, learners cannot use it
- Limited control over the backend database, such as the inability to easily reset the database

This developer tool simulate the behavior of an API server using MSW with Service Worker:

![](public/image.png)

- All requests are proxied by Service Worker
- Backend logic processing is done through localStorage for CRUD operations

### 2. Precise Control of HTTP Requests
The robustness of the project is often overlooked in many teaching projects. As a best practice project, robustness is a key focus.
- This developer tool provides precise control over the timing, failure probability, and failure rules of HTTP requests.
