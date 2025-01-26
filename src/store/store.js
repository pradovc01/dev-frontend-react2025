import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'
import productReducer from './features/product/productSlice.js'
import productReducer2 from './features/product/productSlice2.js'
import formReducer from './form/formSlice.js'
//import userReducer from './features/user/userSlice'
//import userProduct from './features/user/userProduct'

const store = configureStore({
    reducer: {
        counter: counterReducer,
        // user: userReducer,
        // userProduct: userProduct,
        productr: productReducer,
        productr2: productReducer2,
        formRed: formReducer,
    },
})

export default store;