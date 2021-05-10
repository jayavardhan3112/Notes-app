import React from 'react';
import { FormControl, InputLabel, Input} from '@material-ui/core';

const Forms = (({input, setInput}) => {
    return (
        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />
        </FormControl>
        )
})

export default Forms;