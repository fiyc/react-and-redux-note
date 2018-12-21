/**
* @Author: fiyc
* @Date : 2018-12-21 15:23
* @FileName : query-parameters.js
* @Description :
*     - Query Parameters
*/

import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

function ParamsExample({ location }) {

  return (
    <Router>
      <div>
        <h2>Accounts</h2>
        <ul>
          <li>
            <Link to={{ pathname: "/account", search: "?name=netflix" }}>
              Netflix
            </Link>
          </li>
          <li>
            <Link to={{ pathname: "/account", search: "?name=zillow-group" }}>
              Zillow Group
            </Link>
          </li>
          <li>
            <Link to={{ pathname: "/account", search: "?name=yahoo" }}>
              Yahoo
            </Link>
          </li>
          <li>
            <Link to={{ pathname: "/account", search: "?name=modus-create" }}>
              Modus Create
            </Link>
          </li>
        </ul>

        {/* <Child name={params.get("name")} /> */}
        <Route component={Child}/>
      </div>
    </Router>
  );
}

function Child({location}) {
  let params = new URLSearchParams(location.search);
  let name = params.get('name');
  return (
    <div>
      {name ? (
        <h3>
          The <code>name</code> in the query string is "{name}"
        </h3>
      ) : (
        <h3>There is no name in the query string</h3>
      )}
    </div>
  );
}

export default ParamsExample;