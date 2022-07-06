import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProvider } from "./context/AppContext";
import { CookiesProvider } from "react-cookie";

import { Root } from './Root'

function App() {
  return (
    <CookiesProvider>
      <AppProvider>
        <Root />
      </AppProvider>
    </CookiesProvider>
  );
}

export default App;
