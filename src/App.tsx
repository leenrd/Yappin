import Home from "@/pages/public/home";
import { Routes, Route } from "react-router-dom";
import EditorPage from "@/pages/private/editor";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/editor" element={<EditorPage />} />
      </Routes>
    </>
  );
}

export default App;
