import { Router, Link } from "@reach/router";
import "./App.css";
import Main from "./views/Main";
import Detail from "./views/Detail";
import Update from "./views/Update";

function App() {
    return (
        <div className="App">
            <div>
                <Link to="/projects/">Home</Link>
            </div>
            <Router>
                <Main path="projects/" />
                <Detail path="project/:id" />
                <Update path="project/:id/edit" />
            </Router>
        </div>
    );
}

export default App;
