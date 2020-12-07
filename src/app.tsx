import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import store from './store';
import colors from "./constants/styles/colors";
import HomePage from "./components/pages/HomePage";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: ${colors.lighterGray};
    font-family: 'Roboto', sans-serif;
  }
  p {
    margin: 0;
  }
`;

const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Switch>
      <Route path="/" component={HomePage} exact />
    </Switch>
  </BrowserRouter>
);

render(<Provider store={store}><App/></Provider>, document.getElementById("root"));
