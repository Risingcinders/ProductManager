import { Router, Link } from "@reach/router";
import "./App.css";
import Main from "./views/Main";
import Detail from "./views/Detail";
import Update from "./views/Update";
import New from "./views/New"

function App() {
    return (
        <div className="App">
            <div>
                <Link to="/project/">Home</Link>
                <Link to="/project/new/">Create New Project</Link>
            </div>
            <Router>
                <New path="project/new" />
                <Main path="project/" />
                <Detail path="project/:id" />
                <Update path="project/:id/edit" />
            </Router>
        </div>
    );
}

export default App;
