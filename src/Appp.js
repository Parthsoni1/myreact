import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Appp extends Component {
  render() {
    return (
        <Router>
        <Route path = "/" component = {Appp}>
   
        <div className="container">
            <p>Hel</p>
        </div>
        </Route>
        </Router>

      );
  }
}
export default Appp;
