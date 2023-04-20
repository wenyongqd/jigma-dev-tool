# Introduction:

`jigma-dev-tool` is a developer tool is designed to help you overcome two main problems that are often encountered in traditional teaching project backend services. These problems are:

1. Fragile service: Traditional teaching project backend services are limited in terms of the number of requests they can handle, and they are often unstable. If the service goes down, learners cannot use it, which can be frustrating and hinder their progress.

2. Limited control over the backend database: In many cases, learners do not have sufficient control over the backend database to reset it or make changes as needed.

To address these issues, `jigma-dev-tool` uses MSW with Service Worker to simulate the behavior of an API server. All requests are proxied by the Service Worker, and backend logic processing is done through localStorage for CRUD operations. This provides a more stable and reliable backend service that learners can use without interruption.

In addition, `jigma-dev-tool` provides precise control over the timing, failure probability, and failure rules of HTTP requests. This allows you to focus on improving the robustness of your project, which is a key best practice for any developer.

![alt text](https://raw.githubusercontent.com/wenyongqd/jigma-dev-tool/master/src/images/image.png)

## Installation:

To get started with `jigma-dev-tool`, simply run the command `yarn add jigma-dev-tool` in your terminal. This will install the package and allow you to start using its features.

## Set up an MSW service worker:

To set up an MSW service worker, run the command `yarn msw init public` in your terminal. This will create a public folder and set up the necessary files for the service worker.

## Usage:

```jsx
import { DevTools, loadServer } from "jigma-dev-tool";

loadServer(() =>
  ReactDOM.render(
    <React.StrictMode>
      <DevTools />
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  )
);
```

## Conclusion:

`jigma-dev-tool` is a powerful developer tool that can help you overcome many of the common problems encountered in traditional teaching project backend services. With its ability to simulate the behavior of an API server and provide precise control over HTTP requests, you can focus on improving the robustness of your project and providing a better learning experience for your users.
