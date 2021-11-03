import React, { useContext, useEffect } from 'react'
import { StoreContext } from '../../store/StoreProvider';
import TaskComponent from '../pure/TaskComponent';
import { taskActionTypes } from '../../store/StoreReducer';

/**MUI imports */
import { Table, Typography, TableHead, TableRow, TableCell, Container, TableBody, Box } from '@material-ui/core';
import Taskform from '../pure/taskForm';


const TaskListComponent = () => {

    const [store, dispatch] = useContext(StoreContext)

    useEffect(() => {
        console.log(store.length, dispatch)
    })

    return (
        <Box my={5}>
            <Container fixed sx={{ mb: 3 }}>
                <Box 
                    sx={{ display: 'flex',
                        alignItems:"center",
                        justifyContent:"end",
                        margin: '20px'
                    }} 
                >
                    <Typography variant="h4" component="h1" align="center" >Task List</Typography>
                    <Taskform 
                    create = {dispatch(taskActionTypes.CREATE_TASK)}
                    length = {store.length}
                />
                </Box>
                <Table sx={{ minWidth: 700 }}>
                    <TableHead>
                        <TableRow style={{ backgroundColor: "lightgoldenrodyellow" }}>
                            <TableCell>Id</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Priority</TableCell>
                            <TableCell>Completed</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {store.map((task, i) => {
                            return (
                                <TaskComponent
                                    task={task}
                                    key={i}
                                >
                                </TaskComponent>
                            )
                        })
                        }
                    </TableBody>
                </Table>
            </Container>
        </Box>
    )
}

export default TaskListComponent
