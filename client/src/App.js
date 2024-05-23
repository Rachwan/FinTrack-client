import "./App.css";
import AppRoutes from "./routes/AppRoutes.jsx";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App h-screen">
      <AppRoutes />
      <Toaster />
    </div>
  );
}

export default App;
