const initialState = {
    location: "Москва",
    startDate: new Date(),
    daysCount: 1,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_FILTER":
            return {
                ...state,
                location: action.payload.location,
                startDate: action.payload.startDate,
                daysCount: action.payload.daysCount,
            };
       
        default:
            return state;
    }
};
