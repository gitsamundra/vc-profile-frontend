const url = 'https://gurkha-vc-profile-api.herokuapp.com/api/';

export const fetchLists = () => async(dispatch) => {
    try {
        const response = await fetch(url + 'list');
        const lists = await response.json();
        dispatch({type: 'FETCH_LISTS', payload: lists});
    } catch (error) {
        console.log(error.message);
    }
};
export const createList = (data) => async(dispatch) => {
    try {
        const response = await fetch(url + 'createProfile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });
        await response.json();
        dispatch({type: 'CREATE_LIST', payload: data});
    } catch (error) {
        console.log(error.message);
    }
};

export const likeList = (id) => async(dispatch) => {
    try {
        const response = await fetch(url + id + '/like', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        const data = await response.json();
        dispatch({type: 'LIKE_LIST', payload: data});
    } catch (error) {
        console.log(error)
    }
};