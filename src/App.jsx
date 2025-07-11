import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/layouts";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUp from "./pages/SignUp";
import ProgramsPage from "./pages/Programs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/programs" element={<ProgramsPage />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
