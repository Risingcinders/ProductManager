import { Router } from "@reach/router";
import "./App.css";
import Main from "./views/Main";
import Detail from "./views/Detail";

function App() {
    return (
        <div className="App">
            <Router>
                <Main path="projects/" />
                <Detail path="project/:id" />
            </Router>
        </div>
    );
}

export default App;
