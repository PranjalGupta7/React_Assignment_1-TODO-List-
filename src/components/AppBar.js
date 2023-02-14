import React from "react";
import styles from "./style.module.css";

function AppBar({text}) {
    return(
        <div id = {styles.appBar}>{text}</div>
    );
}

export default AppBar;