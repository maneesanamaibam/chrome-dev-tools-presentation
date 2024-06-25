import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DetachedDom from "./components/DetachedDomExample.tsx";
import LazyLoadingExample from "./components/LazyLoadingExample.tsx";
import IHaveABugFixMe from "./components/IHaveABugFixMe.tsx";
import PerformanceProfilingFixMe from "./components/PerformanceProfilingFixMe.tsx";
import PerformanceProfilingNoIssue from "./components/PerformanceProfilingNoIssue.tsx";
import("./index.css");

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/detached-dom-example",
    element: <DetachedDom />,
  },
  {
    path: "/performance-profiling-having-issue",
    element: <PerformanceProfilingFixMe />,
  },
  {
    path: "/performance-profiling-no-issue",
    element: <PerformanceProfilingNoIssue />,
  },
  {
    path: "/lazy-loading-example",
    element: <LazyLoadingExample />,
  },
  {
    path: "/i-have-a-bug-fix-me",
    element: <IHaveABugFixMe />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
