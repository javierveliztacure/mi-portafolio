import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("../pages/Home"));

function HomeWrapper() {
  return (
    <Suspense fallback={<div className="w-full h-screen bg-[#faf9f6]" />}>
      <Home />
    </Suspense>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeWrapper />,
  },
]);
