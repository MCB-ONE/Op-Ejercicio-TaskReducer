import { createContext, useReducer } from "react";
import FilterReducer, { initialFilter } from "./FilterReducer";

//Creamos el contexto global
const FilterContext = createContext();


const FilterProvider = ({ children }) => {

    //Asignando el estado global y las acciones que ha de despachar a useReducer
    const [filter, dispatch] = useReducer(FilterReducer, initialFilter)

    return (
        <FilterContext.Provider value={[filter, dispatch]}>
            {children}
        </FilterContext.Provider>
    )
}

export { FilterContext }
export default FilterProvider