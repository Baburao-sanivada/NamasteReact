const { configureStore } = require("@reduxjs/toolkit");
import CartReducer from "./CardSlice";

const AppStore=configureStore({
    reducer:{
        cart:CartReducer
    }
});

export default AppStore;