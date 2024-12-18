import {BrowserRouter} from "react-router";
import {AppRouter} from "./AppRouter.tsx";

function App() {
    return (
        <BrowserRouter>
            <AppRouter/>
        </BrowserRouter>
    )
}

export default App
