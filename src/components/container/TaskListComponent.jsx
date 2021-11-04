import React, { useContext } from 'react'
import { StoreContext } from '../../store/StoreProvider';
import TaskComponent from '../pure/TaskComponent';
import Filters from '../pure/Filters'

/**MUI imports */
import { Table, Typography, TableHead, TableRow, TableCell, Container, TableBody, Box } from '@material-ui/core';
import Taskform from '../pure/TaskForm';
import { FilterContext } from '../../store/FilterProvider';


const TaskListComponent = () => {

    //Recibiendo el contexto de tareas
    const [store, dispatch] = useContext(StoreContext);

    //Recibiendo el contexto de filtros
    const [filter] = useContext(FilterContext);

    // Filter task list
    const filterTasks = (store, filter) => {
        switch (filter) {
            case 'SHOW_ALL':

                return store
            case 'SHOW_NORMAL':

                return store.filter((task) => task.level === "normal");
            case 'SHOW_URGENT':

                return store.filter((task) => task.level === "urgent");

            case 'SHOW_BLOCKING':

                return store.filter((task) => task.level === "blocking");

            default:
                return store;
        }
    }

    const tasks = filterTasks(store, filter);


    /*  useEffect(() => {
        console.log(store.length, dispatch)
    }) */

    return (
        <Box my={5}>
            <Container fixed sx={{ mb: 3 }}>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: "center",
                        justifyContent: "center",
                        margin: '20px',
                        gap: '40px'
                    }}
                >
                    <Typography variant="h4" component="h1" align="center" >Task List</Typography>
                    <Filters />
                </Box>
                <Table sx={{ minWidth: 700 }}>
                    <TableHead>
                        <TableRow style={{ backgroundColor: "lightgoldenrodyellow" }}>
                            <TableCell>Id</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Priority</TableCell>
                            <TableCell>State</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tasks.map((task, i) => {
                            return (
                                <TaskComponent
                                    task={task}
                                    key={i}
                                    dispatch={dispatch}
                                >
                                </TaskComponent>
                            )
                        })
                        }
                    </TableBody>
                </Table>
                <Taskform
                    dispatch={dispatch}
                    length={store.length}
                />
            </Container>
        </Box>
    )
}

export default TaskListComponent
