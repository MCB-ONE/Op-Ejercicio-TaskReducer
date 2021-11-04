// Deficiendo el estado inicial para el reducer de tareas
const initialFilter = ('SHOW_ALL');

//Acciones que puede despachar el reducer de tareas
const SET_VISIVILITY_FILTER = 'SET_VISIVILITY_FILTER'

const FilterReducer = (state = initialFilter, action) => {
    switch (action.type) {
        case SET_VISIVILITY_FILTER:
            return action.payload.filter
    
        default:
            return state
    }
}



export { initialFilter, SET_VISIVILITY_FILTER }
export default FilterReducer