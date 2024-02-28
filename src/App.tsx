import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Routes from "./routes";

const router = createBrowserRouter(Routes());

function App() {
  return <RouterProvider router={router} />;
}

export default App;
