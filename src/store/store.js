import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'
//import userReducer from './features/user/userSlice'
//import userProduct from './features/user/userProduct'

const store = configureStore({
    reducer: {
        counter: counterReducer,
        // user: userReducer,
        // userProduct: userProduct,
    },
})

export default store;