import { createBrowserRouter, RouterProvider } from "react-router-dom";
//import "./App.css";
import {
  HomeLayout,
  Error,
  Login,
  Register,
  DashboardLayout,
  Landing,
  Pools,
  Admin,
  Profile,
  Stats,
  Farming,
  Swap,
} from "./pages";

const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem("darkTheme") === "true";
  document.body.classList.toggle("dark-theme", isDarkTheme);
  return isDarkTheme;
};

const isDarkThemeEnabled = checkDefaultTheme();

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "wallet", element: <Register /> },
      {
        path: "dashboard",
        element: <DashboardLayout isDarkThemeEnabled={isDarkThemeEnabled} />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Pools />,
      },
      { path: "stats", element: <Stats /> },
      {
        path: "farming",
        element: <Farming />,
      },

      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "admin",
        element: <Admin />,
      },
      {
        path: "Swap",
        element: <Swap />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
