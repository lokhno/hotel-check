const actions = {
    logout: () => ({
        type: "USER:LOGOUT",
    }),
    setUserData: (data) => ({
        type: "USER:SET_DATA",
        payload: data,
    }),
};

export default actions;
