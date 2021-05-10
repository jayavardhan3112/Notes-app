import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function Buttons({addTodoFunc, btnText, input}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button disabled={!input} variant="outlined" color="primary" type="submit" onClick={addTodoFunc}>
        {btnText}
      </Button>
    </div>
  );
}
