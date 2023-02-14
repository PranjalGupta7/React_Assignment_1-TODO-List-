import React, {useState} from 'react';
import styles from './style.module.css';
import TextInputArea from './TextInputArea';
import Button from './Button';
import ListOutputArea from './ListOutputArea'
import AppBar from './AppBar';

function App(){
    const [input,setInput] = useState("");
    const [notes,setNotes] = useState([]);

    function addToList(){
        setNotes((prev) => {
            return ([
            ...prev,{
                id : notes.length + 1,
                content: input
            }]
        )});
    }

    return (
        <React.StrictMode>
            <AppBar
                text = "TODO List"
            /> 
            
            <div id = {styles.inputArea}>
                <TextInputArea 
                    hint = "Add Text Here..."
                    value = {input}
                    setContent={setInput}
                />

                <Button 
                    text = "Add to List"
                    click={() => {
                         addToList();
                    }}
                />
            </div>
            
            <div id = {styles.subHeading}>List</div>
            
            <div id = {styles.outputArea}>
                <ListOutputArea
                    data = {notes}
                />
            </div>

        </React.StrictMode>
    );
}

export default App;