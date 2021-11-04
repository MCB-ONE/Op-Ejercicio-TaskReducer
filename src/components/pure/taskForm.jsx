import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { LEVELS } from '../../models/levels.enum';
import { taskActionTypes } from '../../store/StoreReducer';
/**react-id-generator import para generar id automaticos */
import nextId from "react-id-generator";

/**MUI imports */
import { Button, Box, Paper, TextField, Select, MenuItem } from '@material-ui/core';


const Taskform = ({ dispatch, length }) => {

    const nameRef = useRef('');
    const descriptionRef = useRef('');
    /* const levelRef = useRef(LEVELS.NORMAL); */
    const [levelTask,setLevelTask] = useState(LEVELS.NORMAL);


    /**Function to select update value */
    const updateLevel = (e) => {
        setLevelTask(e.target.value)
    }

    function addTask(e) {
        e.preventDefault();
        dispatch({
            type: taskActionTypes.CREATE_TASK, 
            payload: {
                id: nextId(), 
                name: nameRef.current.value,
                description: descriptionRef.current.value,
                completed: false,
                level: levelTask
            }
            })
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
                        alignItems:"center",
                        justifyContent:"center",
                        gap: "40px"
                    }}
                >
                    <TextField inputRef={nameRef} id='inputName' type='text' required autoFocus placeholder='Task Name' />
                    <TextField inputRef={descriptionRef} id='inputDescription' type='text' required placeholder='Task description' />
                    
                    <Select defaultValue={LEVELS.NORMAL} id='selectLevel' onChange={updateLevel}>
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
