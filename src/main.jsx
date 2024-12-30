import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./Componants/Home.jsx";
import ResumeTamplate from "./Componants/ResumeTamplate.jsx";
import BiodataTamplate from "./Componants/BiodataTamplate.jsx";
import CollegeTemplate from "./Componants/CollegeTemplate.jsx";
import SchoolTemplate from "./Componants/SchoolTemplate.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/resume-maker" element={<ResumeTamplate />} />
      <Route path="/biodata-maker" element={<BiodataTamplate />} />
      <Route path="/college-template-maker" element={<CollegeTemplate />} />
      <Route path="/school-template-maker" element={<SchoolTemplate />} />
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
