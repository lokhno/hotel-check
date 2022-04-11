const initialState = {
    data: null,
    isAuth: !!window.localStorage["hotelLoginStatus"],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "USER:SET_DATA":
            return {
                ...state,
                data: action.payload,
                isAuth: true,
            };
        case "USER:LOGOUT":
            return {
                data: null,
                isAuth: false,
            };

        default:
            return state;
    }
};
