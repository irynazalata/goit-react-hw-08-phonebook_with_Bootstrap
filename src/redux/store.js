import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { contactReducer, loading } from './contacts/contactsReducer';
import filter from './filter/filterReducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from './auth/authReducers';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const rootReducer = {
  auth: persistReducer(authPersistConfig, authReducer),
  contacts: contactReducer,
  filter,
  loading,
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware({ serializableCheck: false })],
});

export const persistor = persistStore(store);
