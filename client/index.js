import React from "react";
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from './store/index'

import Main from './components/Main'

const container = document.getElementById("app")
const root = createRoot(container)

root.render(
    <Provider store={store}>
        <Router>
            <Main/>
        </Router>
    </Provider>
)