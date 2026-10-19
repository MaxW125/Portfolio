import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import Home from "@/pages/Home";

function App() {
  return (
    <Router
      basename="/Portfolio"
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="*"
          element={
            <div className="min-h-screen flex items-center justify-center bg-black">
              <h1 className="text-2xl font-bold text-white">404 - Page Not Found</h1>
            </div>
          }
        />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
