/**Import models para la creación de tareas*/
import { Task } from '../models/task.class';
import { LEVELS } from '../models/levels.enum';
/**react-id-generator import para generar id automaticos */
import nextId from "react-id-generator";

// Deficiendo el estado inicial para el reducer de tareas
const initialStore = [
    new Task(nextId(), 'Example1', 'Description1', true, LEVELS.NORMAL),
    new Task(nextId(), 'Example2', 'Description 2', false, LEVELS.URGENT),
    new Task(nextId(), 'Example3', 'Description 3', false, LEVELS.BLOCKING)
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

        case taskActionTypes.DELETE_TASK:
            const index = state.findIndex(task => task.id === action.payload.id);
            return state.splice(index, 1)

        default:
            return state
    }
}

export { initialStore, taskActionTypes }
export default StoreReducer