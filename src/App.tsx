import React from 'react';
import {BrowserRouter} from "react-router-dom";
import Routes from "./routes";
import GlobalStyles from "./styles";

function App() {
  return (
    <BrowserRouter>
        <Routes />
        <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
