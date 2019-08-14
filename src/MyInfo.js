import React from "react";
// import ReactDOM from "react-dom";
import {hot} from "react-hot-loader";

function MyInfo() {
  return(
      <div>
        <h1>
          Antonio
        </h1>
          <p>
            My name is Antonio, I like to play tennis and to build websites.
          </p>
          <ol >Top 3 vacation sites:
            <li>Japan</li>
            <li>Madrid</li>
            <li>Paris</li>
          </ol>
      </div>
    );
  }

  export default hot(module) (MyInfo);