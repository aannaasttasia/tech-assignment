import React from "react";
import "./css/Logo.scss"
export default class Logo extends React.Component {
  render() {
    return (
      <div>
        <ul className="logo">
          <li>Logotype</li>
          <li>
            <button className="btn">Connect wallet</button>
          </li>
        </ul>
      </div>
    );
  }
}
