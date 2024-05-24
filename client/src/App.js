import "./App.css";
import AppRoutes from "./routes/AppRoutes.jsx";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <AppRoutes />
      <Toaster />
    </div>
  );
}

export default App;
