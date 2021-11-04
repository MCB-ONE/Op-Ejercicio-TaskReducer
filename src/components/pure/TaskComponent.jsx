import React from 'react';
import { taskActionTypes } from '../../store/StoreReducer';

/**MUI imports */
import { TableRow, TableCell, IconButton } from '@material-ui/core';
import DeleteIcon  from '@material-ui/icons/Delete'

const TaskComponent = ({ task, dispatch }) => {

    const deleteTask = () => {
        console.log(task.id)
        dispatch({
            type: taskActionTypes.DELETE_TASK,
            payload: {
                id: task.id
            }
        })
    }

    return (
        <TableRow >
            <TableCell >
                <p>{task.id}</p>
            </TableCell >
            <TableCell >
                <p>{task.name}</p>
            </TableCell>
            <TableCell >
                <   p>{task.description}</p>
            </TableCell>
            <TableCell >
                <p>{task.level}</p>
            </TableCell>
            <TableCell >
                <p>{task.completed ?'Completed' : "Incompleted"}</p>
            </TableCell>
            <TableCell >
            <IconButton color="secondary" aria-label="delete" size="small"
                onClick={deleteTask}
            >
                <DeleteIcon fontSize="inherit" />
            </IconButton>
            </TableCell>
        </TableRow>
    );
};


/* TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
}; */


export default TaskComponent;
