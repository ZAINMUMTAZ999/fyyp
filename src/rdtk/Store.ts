import appToastReducer from "./features/toast/AppToast";
import {configureStore} from "@reduxjs/toolkit";
export const Store = configureStore({
    reducer:{
  AppToast:appToastReducer
    }
});