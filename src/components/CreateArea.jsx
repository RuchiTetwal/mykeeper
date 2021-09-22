import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { Zoom } from '@material-ui/core';

function CreateArea(props) {

    const [isExpanded, setExpanded] = useState(false);

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function expand(){
        setExpanded(true);
    }

    function updateNote(event) {

        const { name, value } = event.target;


        setNote(
            prevNote => {
                return {
                    ...prevNote,
                    [name]: value
                }
            }
        )
    }

    function submitNote(event) {

        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        })
        event.preventDefault();

    }


    return (
        <div>
            <form className="create-note">
            {isExpanded ?       
                    <input
                    onChange={updateNote}
                    name="title"
                    placeholder="Title"
                    value={note.title} />
                    :null
            }

                <textarea
                    onChange={updateNote}
                    onClick={expand}
                    name="content"
                    placeholder="Take a note..."
                    rows={isExpanded ? 3:1}
                    value={note.content} />

                <Zoom in={isExpanded}>
                    <Fab onClick={submitNote}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;