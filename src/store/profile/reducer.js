import {TOGGLE_ACTIONS} from "./actions";


const initialState = {
    checked: false
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_ACTIONS:
            return {
                ...state,
                checked: !state.checked
            };
        default:
            return state;
    }
}

export default profileReducer;