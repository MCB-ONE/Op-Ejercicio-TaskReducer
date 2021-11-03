import React, { useContext, useEffect } from 'react'
import TasksContext from '../context/TasksContext'
import TaskComponent from '../pure/TaskComponent';


/**MUI imports */
import { Table, Typography, TableHead, TableRow, TableCell, Container, TableBody } from '@material-ui/core';


const TaskListComponent = () => {

    const state = useContext(TasksContext);

    useEffect(() => {
        console.log(state)
    }, [])

    return (
        <Container fixed sx={{ my: 3 }}>
        <Typography variant="h4" component="h1" align="center" >Task List</Typography>
        <Table >
            <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Priority</TableCell>
                    <TableCell>Completed</TableCell>
                    <TableCell>Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {/* { state.map((task, i) => {
                    return (
                        <TaskComponent
                            task={task}
                            key={i}
                        >
                        </TaskComponent>
                    )
                })
                } */}
            </TableBody>
        </Table>
    </Container>
    )
}

export default TaskListComponent
