export const listReducer =  (state = [], action) => {
    switch(action.type) {
        case 'FETCH_LISTS':
            return action.payload;
        case 'CREATE_LIST':
            return [...state, action.payload];
        case 'LIKE_LIST':
            return state.map(list => list._id === action.payload._id ? action.payload : list);
        default:
            return state;
    };
};