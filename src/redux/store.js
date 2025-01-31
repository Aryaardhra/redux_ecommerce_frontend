import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "./features/cart/cartSlice"
import authApi from './features/auth/authApi'
import authReducer from "./features/auth/authSlice"
import productsApi from './features/products/productsApi'
import reviewApi from './features/reviews/reviewApi'
import statusApi from './features/status/StatusApi'
import orderApi from './features/orders/OrderApi'
export default configureStore({
  reducer: {
    cart: cartReducer,
    [authApi.reducerPath] : authApi.reducer,
    auth: authReducer,
    [productsApi.reducerPath] : productsApi.reducer,
    [reviewApi.reducerPath] : reviewApi.reducer,
    [statusApi.reducerPath] : statusApi.reducer,
    [orderApi.reducerPath] : orderApi.reducer,
  },
  middleware : (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(authApi.middleware, productsApi.middleware, reviewApi.middleware, statusApi.middleware, orderApi.middleware), 
})