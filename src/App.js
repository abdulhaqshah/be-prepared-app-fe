import React, { Component } from "react";
import Routes from "./routes/index";
import "font-awesome/css/font-awesome.min.css";
import "./App.css";
import "./myOwn.css";
// import { getItem } from "./services/Session";
// import Navbar from "./containers/Dashboard/Navbar";
// import Header from "./components/Header";
// import { LOGIN } from "./constants/index";

class App extends Component {
  render() {
    return <Routes />;
    // const token = getItem("token");
    // debugger;
    // if (token !== null) {
    //   return (
    //     <Fragment>
    //       <Routes />
    //     </Fragment>
    //   );
    // } else {
    //   return (
    //     <Fragment>
    //       <Header btnName="Log In" redirectTo={LOGIN} />
    //       <Routes />
    //     </Fragment>
    //   );
    // }
  }
}
export default App;
