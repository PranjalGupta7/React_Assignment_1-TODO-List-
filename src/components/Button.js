import React from 'react';
import styles from './style.module.css';

function Button({text, click}){
    return(
        <button id = {styles.btn} onClick = {click}>{text}</button>
    );
}

export default Button;