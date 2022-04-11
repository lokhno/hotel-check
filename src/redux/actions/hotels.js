const actions = {
    fetchHotels: (data) => ({
        type: "FETCH_HOTELS",
        data: data
    }),
    setHotels: (data) => ({
        type: "SET_HOTELS",
        payload: data,
    }),
    setLoading: () => ({
        type: "SET_LOADING"
    }),
    toggleFavorite: (item) => ({
        type: "TOGGLE_FAVORITE",
        payload: item
    })
};

export default actions;
