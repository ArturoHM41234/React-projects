import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function Main(props) {
  return (
    <main className={props.darkMode ? "dark" : ""}>
      <FontAwesomeIcon icon={brands("react")} className="main--background" />
      <h1 className="main--title">Fun facts about React</h1>
      <ul className="main--facts">
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </main>
  );
}
