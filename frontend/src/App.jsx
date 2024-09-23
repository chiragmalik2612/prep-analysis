import { Routes, Route } from "react-router-dom";
import SubjectSelection from "./components/SubjectSelection";
import SubjectPage from "./components/SubjectPage";

function App() {
  return (

    <Routes>
      <Route path="/" element={<SubjectSelection />} />
      <Route path="/subject/:name" element={<SubjectPage/>} />
    </Routes>
  );
}

export default App;
