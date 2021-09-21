import { createStore } from 'redux';
import rootReducer from '../redux/reducers';
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from "redux-persist";

// Sử dụng redux-persist để ngăng ko cho state reset khi refresh trang web
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);
let persistor = persistStore(store)

export { store, persistor };