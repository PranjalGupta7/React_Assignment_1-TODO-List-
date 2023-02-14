import React from "react";
import styles from "./style.module.css";

function ListOutputArea ({data}) {
    const itemClick = () => {
        
    }

    const items = (listArray) => {
        return listArray.map((e) => {
            return (
                <div id = {styles.item} key = {e.id}>
                <span id = {styles.sqBox} />
                <span id = {styles.listContent}>{e.content}</span>
                </div>
            );
        })
    } 
    return (
        <>
        {items(data)}
        </>
    );
}

export default ListOutputArea; 