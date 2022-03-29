import express from "express";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "./App";

let app = express();

const login = require('../components/Login.js')

app.use(express.static(path.join(__dirname, '..build/')))

app.use('/login', login)

app.get("*", (req, res) => {
    let html = ReactDOMServer.renderToString(
        <StaticRouter location={req.url}>
            <App />
        </StaticRouter>
    );
    res.send("<!DOCTYPE html>" + html);
});

app.listen(3000);
