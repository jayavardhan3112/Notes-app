import React from 'react';
import { List, ListItem, ListItemText, ListItemAvatar } from '@material-ui/core';
import '../css/todoList.css';

const Todos = (({todos}) => {
    
return (
    <ul className="todo_list">
        {todos.map(task => {
            return(
            <List>
                <ListItem>
                    <ListItemAvatar>
                    </ListItemAvatar>
                    <ListItemText primary={task} secondary="deadline 📅 " />
                </ListItem>
            </List>
        )})}
    </ul>
)});

export default Todos;