import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage.component";
import ShopPage from "./pages/shop/shop.componnet";

const HatsPage = () => (
  <div>
    <h1>Hats</h1>
  </div>
);

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/shop" component={ShopPage} />
    </div>
  );
}

export default App;
