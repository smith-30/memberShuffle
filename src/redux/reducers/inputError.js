const inputError = (state = [], action) => {
    switch (action.type) {

        case 'ADD_ERROR':
            return action.message;

        default:
            return state
    }
};

export default inputError