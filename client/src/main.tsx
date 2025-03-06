import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Demo from "./pages/Demo.tsx";
import Home from "./pages/Home.tsx";
import Register from "./pages/Register.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/demo" element={<Demo />} />
    </Route>
  )
);

createRoot(document.getElementById("root")! as HTMLElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
