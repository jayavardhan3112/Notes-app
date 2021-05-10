import React, { useState } from 'react';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import { List, ListItem, ListItemText, ListItemAvatar, Modal, Input, Button } from '@material-ui/core';
import '../css/todoList.css';
import db from '../firebase';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'relative',
        width: 200,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[2],
        padding: theme.spacing(2, 4, 3),
    },
}));

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}
 
const Todos = (({todos}) => {
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState('');
    const [taskText, setTaskText] = useState('');
    const [taskId, setTaskId] = useState('');
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);

    const updateTodo = () => {
        db.collection('todos').doc(taskId).set({
            task: input
        }, {merge: true});
        setOpen(false);
    }

    const handleOpen = ({text, id}) => {
        setOpen(true);
        setTaskText(text);
        setTaskId(id);
    }

    return (
        <ul className="todo_list">
            {todos.map(task => {
                return(
                <>
                    <Modal 
                        style={modalStyle}
                        className={classes.paper}
                        open={open}
                        onClose={e => setOpen(false)}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                    >
                        <form className={classes.root} noValidate autoComplete="off"><Input placeholder={taskText} onChange={e => setInput(e.target.value)} id="outlined-basic" label="Update" variant="outlined" />
                        <Button onClick={updateTodo} variant="contained" color="primary">Submit</Button></form>
                    </Modal>
                    <List>
                        <ListItem>
                            <ListItemAvatar>
                            </ListItemAvatar>
                            <ListItemText primary={task.task} secondary=" 📅" />
                        </ListItem>
                        <DeleteForeverIcon onClick = {event =>{
                            db.collection('todos').doc(task.id).delete(); 
                        }} />
                        <EditIcon onClick={e => handleOpen({text:task.task, id:task.id})}/>
                    </List>
                </>
            )})}
        </ul>
    )}
);

export default Todos;