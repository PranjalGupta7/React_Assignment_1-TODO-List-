import React, { useState } from "react";
import styles from './style.module.css';

function TextInputArea({hint, content, setContent}){
    return (
        <input 
            id = {styles.txtArea}
            type = "text" 
            value = {content}
            placeholder = {hint} 
            onChange={(e) => setContent(e.target.value)}
        />
        
    );
}

export default TextInputArea;


