import { AnyAction, CombinedState, configureStore, Reducer } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import sagaMiddleware, { setupMiddleware } from './middleware';
import { persistConfig } from './options';
import rootReducer from './reducers';

export type RootState = ReturnType<typeof rootReducer>;

const persistedReducer = persistReducer(persistConfig, rootReducer) as Reducer<CombinedState<RootState>, AnyAction>;

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(sagaMiddleware),
});

setupMiddleware();
let persistor = persistStore(store);
export { store, persistor };
