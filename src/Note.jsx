import React from "react";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { Button } from "@material-ui/core";

const Note = (props) => {
  return (
    <>
        <div>
            <h1> {props.title} </h1>
            <br/>
            <p> {props.content} </p>
            <Button className="btn">
            <DeleteOutlineIcon className="deleteIcon" />
            </Button>
        </div>
    </>
  )
}

export default Note;
