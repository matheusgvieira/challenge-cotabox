const initialState = {
    firstName: '',
    lastName: '',
    participation: 0,
}

export default function inputsReducer(state = initialState, action){
    switch (action.type) {
        case 'ADD_FIRST_NAME':
            return{
                ...state, 
                firstName: action.payload,
            }
        case 'ADD_LAST_NAME':
            return{
                ...state, 
                lastName: action.payload,
            }
        case 'ADD_PARTICIPATION':
            return{
                ...state, 
                participation: action.payload,
            }
    
        default:
            return state;
    }

}