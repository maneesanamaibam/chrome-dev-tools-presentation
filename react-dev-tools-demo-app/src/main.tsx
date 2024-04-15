import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DetachedDom from "./components/DetachedDomExample.tsx";
import LazyLoadingExample from "./components/LazyLoadingExample.tsx";
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
    path: "/lazy-loading-example",
    element: <LazyLoadingExample />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
