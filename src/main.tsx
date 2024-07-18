import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "./Contexts/ThemeContext.tsx";
import Loading from "./Loading.tsx";
import { lazy, Suspense } from "react";

const Recipes = lazy(() => import("./Pages/Recipes"));
const RecipeDetail = lazy(() => import("./Pages/RecipeDetail"));
const NotFoundPage = lazy(() => import("./Pages/NotFoundPage"));

const router = createBrowserRouter([
  {
    path: "/",

    element: (
      <Suspense fallback={<Loading />}>
        <Recipes />,
      </Suspense>
    ),
  },
  {
    path: "/recipe/:id",
    element: (
      <Suspense fallback={<Loading />}>
        <RecipeDetail
          label={""}
          image={""}
          ingredientLines={[]}
          calories={0}
          cuisineType={[]}
          dietLabels={[]}
        />
      </Suspense>
    ),
  },
  {
    path: "/*",
    element: (
      <Suspense fallback={<Loading />}>
        <NotFoundPage />,
      </Suspense>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App>
        <RouterProvider router={router} />
      </App>
    </ThemeProvider>
  </React.StrictMode>
);
