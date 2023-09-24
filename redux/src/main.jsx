import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import userReducer from './features/user'
import themeReducer from './features/theme'
import todoReducer from "./features/todo"

const store = configureStore({
  reducer: {
    todo: todoReducer,
    user: userReducer,
    theme: themeReducer,
  },
  devTools: true,
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
       <App />
    </Provider>
  </React.StrictMode>,
)
