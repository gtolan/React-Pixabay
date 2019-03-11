import React, { Component } from "react";
import "./App.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Navbar from "./components/header/Navbar";
import Search from "./components/search/Search";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <Navbar />
          <Search />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default App;
