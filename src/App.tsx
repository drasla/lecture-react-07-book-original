import Home from "./pages/Home";
import Search from "./pages/Search";
import Detail from "./pages/Detail";
import { BrowserRouter, Route, Routes } from "react-router";
import GlobalStyle from "./styles.ts";

export default function App() {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/detail/:id" element={<Detail />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
