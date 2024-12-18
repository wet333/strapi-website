import {Route, Routes} from "react-router";
import {LandingPage} from "./pages/LandingPage.tsx";
import {ColorTests} from "./pages/tests/ColorTests.tsx";

export function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/tests/colors" element={<ColorTests/>}/>
        </Routes>
    )
}