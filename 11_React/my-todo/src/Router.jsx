import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import DeletePage from "./Components/DeletePage";
import MainPage from "./Components/MainPage";
import Page from "./Components/Page";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/delete" element={<DeletePage />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;