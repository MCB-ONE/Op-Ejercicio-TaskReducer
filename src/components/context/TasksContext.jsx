import React, { useReducer } from 'react';
import TaskListComponent from '../pure/TaskListComponent';
/**Import models */
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
/**react-id-generator import */
import nextId from "react-id-generator";

//creamos un contexto para el estado de tareas
const TasksContext = React.createContext(null); 
                    
//Acciones que puede despachar el reducer de tareas
const CREATE_TASK = 'CREATE_TASK';
const DELETE_TASK = 'DELETE_TASK';

const TasksContainer = () => {

    /**Tareas de prueba */
    const defaultTask1 = new Task(nextId(), 'Example1', 'Description1', true, LEVELS.NORMAL);
    const defaultTask2 = new Task(nextId(), 'Example2', 'Description 2', false, LEVELS.URGENT);
    const defaultTask3 = new Task(nextId(), 'Example3', 'Description 3', false, LEVELS.BLOCKING);

    // Estado inicial para el reducer de tareas
    const initialState = [
        defaultTask1,
        defaultTask2,
        defaultTask3
    ];

    /*Reducer para alterar el estado de las tareas
    Plantilla de como se ha de comportar el reducer en dierentes casos (switch) 
    */
    const reducer = (state, action) => {
        switch (action.type) {
            case CREATE_TASK:
                return [
                    ...state,
                    {
                        id: action.payload.id,
                        name: action.payload.name,
                        description: action.payload.description,
                        completed: false,
                        levele: action.payload.level
                    }

                ]

            case DELETE_TASK:
                const index = state.findIndex(task => task.id === action.payload.id);
                return state.splice(index, 1)

            default:
                return state
        }
    }

    //Asignando useReducer al estado, reducer y acciones que ha despachar
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <TasksContext.Provider value={{state}}>
           <TaskListComponent/>
        </TasksContext.Provider>
    )
}

export default TasksContainer
