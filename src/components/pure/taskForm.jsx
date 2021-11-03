import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';

/**MUI imports */
import { Button, Box, Paper, TextField, Select, MenuItem } from '@material-ui/core';

const Taskform = ({ create, length }) => {

    const nameRef = useRef('');
    const descriptionRef = useRef('');
    const levelRef = useRef(LEVELS.NORMAL);

    function addTask(e) {
        e.preventDefault();
        const newTask = new Task(
            nameRef.current.value,
            descriptionRef.current.value,
            false,
            levelRef.current.value
        );
        console.log(newTask)
        /* create(newTask); */
    }


    return (
        <Box
            sx={{
                margin: '20px'
            }}
        >
            <Paper elevation={4} square={false} style={{
                padding: "40px",
                marginLeft: "40px"
            }}>
                <form onSubmit={addTask}  
                    style={{
                        display: "flex",
                        gap: "10px"
                    }}
                >
                    <TextField inputRef={nameRef} id='inputName' type='text' required autoFocus placeholder='Task Name' />
                    <TextField inputRef={descriptionRef} id='inputDescription' type='text' required placeholder='Task description' />
                    
                    <Select ref={levelRef} defaultValue={LEVELS.NORMAL} id='selectLevel'>
                            <MenuItem value={LEVELS.NORMAL}>
                                Normal
                            </MenuItem >
                            <MenuItem value={LEVELS.URGENT}>
                                Urgent
                            </MenuItem >
                            <MenuItem value={LEVELS.BLOCKING}>
                                Blocking
                            </MenuItem >
                        </Select>
                    <Button variant="contained" color="primary" type="submit">
                        {length > 0 ? 'Create New Task' : 'Create First Task'}
                    </Button>
                </form>
            </Paper>
        </Box>
    );
}

Taskform.protoTypes = {
    create: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired
}

export default Taskform;
