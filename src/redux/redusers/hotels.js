const initialState = {
    hotelsList: [],
    hotelsFavoriteList: [],
    isLoading: false,
};

const toggleFavotieList = (hotelsFavoriteList, hotelItem) => {
    const hotelsFavoriteListLength = hotelsFavoriteList.length;
    const tmpHotelFavoriteList = [...hotelsFavoriteList].filter((item) => item.hotelId !== hotelItem.hotelId);

    if (tmpHotelFavoriteList.length === hotelsFavoriteListLength) {
        tmpHotelFavoriteList.push(hotelItem);
    }
    return tmpHotelFavoriteList;
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "TOGGLE_FAVORITE":
            return {
                ...state,
                hotelsFavoriteList: toggleFavotieList(state.hotelsFavoriteList, action.payload),
            };
        case "SET_HOTELS":
            return {
                ...state,
                hotelsList: action.payload,
                isLoading: false,
            };
        case "SET_LOADING":
            return {
                ...state,

                isLoading: true,
            };
        case "TOGGLE_FAVORITE":
            return {
                ...state,
                hotelsList: state.hotelsList.map((item) => {
                    if (action.payload === item.id) {
                        if (item.hasOwnProperty("favorite")) {
                            item.favorite = !item.favorite;
                            return item;
                        } else {
                            item.favorite = true;
                            return item;
                        }
                    }
                    return item;
                }),
            };
        default:
            return state;
    }
};
