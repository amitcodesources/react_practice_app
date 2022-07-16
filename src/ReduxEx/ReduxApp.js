import React from 'react'

import store from "./store";
import { Provider } from "react-redux";
import AppHome from './AppHome';


export default function ReduxApp() {
    store.subscribe(() => console.log(store.getState()));
  return (
    <Provider store={store}>
        <AppHome />
    </Provider>
  )
}
