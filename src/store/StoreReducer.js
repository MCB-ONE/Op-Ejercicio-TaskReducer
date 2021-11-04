/**Import models para la creación de tareas*/
import { Task } from '../models/task.class';
import { LEVELS } from '../models/levels.enum';
/**react-id-generator import para generar id automaticos */
import nextId from "react-id-generator";

// Deficiendo el estado inicial para el reducer de tareas
const initialStore = [
    new Task(nextId(), 'Example1', 'Description1', true, LEVELS.NORMAL),
    new Task(nextId(), 'Example2', 'Description 2', false, LEVELS.URGENT),
    new Task(nextId(), 'Example3', 'Description 3', true, LEVELS.BLOCKING)
];

//Acciones que puede despachar el reducer de tareas
const taskActionTypes = {
    CREATE_TASK: 'CREATE_TASK',
    DELETE_TASK: 'DELETE_TASK'
}


/*Reducer para alterar el estado de las tareas
Plantilla de como se ha de comportar el reducer en dierentes casos (switch) 
*/
const StoreReducer = (state, action) => {
    switch (action.type) {
        case taskActionTypes.CREATE_TASK:
            console.log(state)
            return [
                ...state,
                new Task ( action.payload.id,
                    action.payload.name,
                    action.payload.description,
                    action.payload.completed,
                    action.payload.level
                )
            ]

        case taskActionTypes.DELETE_TASK:
            return state.filter((item) => item.id !== action.payload.id);

        default:
            return state
    }
}

export { initialStore, taskActionTypes }
export default StoreReducer