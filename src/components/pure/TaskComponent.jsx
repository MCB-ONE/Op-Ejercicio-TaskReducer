import React from 'react';

/**MUI imports */
import { TableRow, TableCell } from '@material-ui/core';

const TaskComponent = ({ task }) => {

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
                <p>{task.completed}</p>
            </TableCell>
            <TableCell >
                <p>DELETEBUTTON</p>
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
