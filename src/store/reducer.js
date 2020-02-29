import * as actionTypes from './actions';

const initialState = {
    persons: [],
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ADD:
            let newPerson = {
                id: Math.random(), // not really unique but good enough here!
                name: action.name,
                age: action.age
            };

            return {
             ...state,
                persons: state.persons.concat({
                    id: newPerson.id,
                    name: newPerson.name,
                    age: newPerson.age
                }),
            };

        case actionTypes.DELETE:
            const newArray = state.persons.filter( person => person.id !== action.personId );
            return {
                ...state,
                persons: newArray,
            }
    }
    return state;
};

export default reducer;