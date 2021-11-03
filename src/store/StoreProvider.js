import { createContext, useReducer } from "react";
import StoreReducer, { initialStore } from "./StoreReducer";


//Creamos el contexto global
const StoreContext = createContext();


const StoreProvider = ({ children }) => {

    //Asignando el estado global y las acciones que ha de despachar a useReducer
    const [store, dispatch] = useReducer(StoreReducer, initialStore)

    return (
        <StoreContext.Provider value={[store, dispatch]}>
            {children}
        </StoreContext.Provider>
    )
}

export { StoreContext }
export default StoreProvider
