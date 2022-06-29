import React from "react";
import { Route, Switch, Routes } from "react-router-dom";
import Layout from "./components/layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import Meat from "./components/layout/meat";
import Larvae from "./components/layout/larvae";

function App() {
  return (
      <Layout>
        <Switch>
          <Route exact path="/tab/meat" element={
              <Meat />
          }/>
          <Route exact path="/tab/larvae" element={
              <Larvae />
          }/>
        </Switch>
      </Layout>
  );
}

export default App;
