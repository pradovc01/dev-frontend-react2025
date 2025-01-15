import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'
import productReducer from './features/product/productSlice.js'
//import userReducer from './features/user/userSlice'
//import userProduct from './features/user/userProduct'

const store = configureStore({
    reducer: {
        counter: counterReducer,
        // user: userReducer,
        // userProduct: userProduct,
        productr: productReducer
    },
})

export default store;