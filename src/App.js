import React from "react";
import { 
  BrowserRouter,
  Routes,
  Route, } from "react-router-dom";
import Layout from "./components/Layout";
import Meat from "./pages/meat";
import Larvae from "./pages/larvae";
import LarvaDetails from "./pages/larvae/LarvaDetails";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/meat" element={
                <Meat />
            }/>
            <Route path="/larvae" element={
                <Larvae />
            }>
              <Route path='larva' element={<LarvaDetails />} />
            </Route>
          </Routes>
        </Layout>
      </BrowserRouter>
  );
}

export default App;
