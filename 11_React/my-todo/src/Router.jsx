import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import DeletePage from "./Components/DeletePage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/delete" element={<DeletePage />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;