import Home from "./pages/Home";
import Search from "./pages/Search";
import Detail from "./pages/Detail";
import "./styles/global.css";
import { BrowserRouter, Route, Routes } from "react-router";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="/detail/:id" element={<Detail />} />
            </Routes>
        </BrowserRouter>
    );
}
