import React from 'react';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { List, ListItem, ListItemText, ListItemAvatar } from '@material-ui/core';
import '../css/todoList.css';
import db from '../firebase';

const Todos = (({todos}) => {
    
return (
    <ul className="todo_list">
        {todos.map(task => {
            return(
            <List>
                <ListItem>
                    <ListItemAvatar>
                    </ListItemAvatar>
                    <ListItemText primary={task.task} secondary="deadline 📅 " />
                </ListItem>
                <DeleteForeverIcon onClick = {event =>{
                    db.collection('todos').doc(task.id).delete(); 
                }} />
            </List>
        )})}
    </ul>
)});

export default Todos;