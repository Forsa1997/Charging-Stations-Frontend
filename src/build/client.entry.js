import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import App from "./App";

ReactDOM.hydrate(
    <HashRouter>
        <App />
    </HashRouter>,
    document.documentElement
);