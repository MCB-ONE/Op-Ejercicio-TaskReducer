import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { FilterContext } from '../../store/FilterProvider';

/**MUI imports */
import { MenuItem, Select } from '@material-ui/core';
import { SET_VISIVILITY_FILTER } from '../../store/FilterReducer';

const Filters = () => {

    //Recibiendo el contexto de filtros
    const [filter, dispatch] = useContext(FilterContext);

    const changeFilter = (e) => {
        dispatch({
            type: SET_VISIVILITY_FILTER, 
            payload: {
                filter:  e.target.value
            }
            })
    }

    /*  function addTask(e) {
        e.preventDefault();
        setLevelTask()
        dispatch({
            type: taskActionTypes.CREATE_TASK, 
            payload: {
                id: nextId(), 
                name: nameRef.current.value,
                description: descriptionRef.current.value,
                completed: false,
                level: levelTask
            }
            })
    } */

    return (
        <div>
            <Select defaultValue={'SHOW_ALL'} id='selectLevel' onChange={changeFilter}>
                <MenuItem value={'SHOW_ALL'}>
                    All
                </MenuItem >
                <MenuItem value={'SHOW_NORMAL'}>
                    Normal
                </MenuItem >
                <MenuItem value={'SHOW_URGENT'}>
                    Urgent
                </MenuItem >
                <MenuItem value={'SHOW_BLOCKING'}>
                    Blocking
                </MenuItem >
            </Select>
        </div>
    )
}


export default Filters
