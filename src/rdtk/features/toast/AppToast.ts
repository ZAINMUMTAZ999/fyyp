

import { createSlice } from "@reduxjs/toolkit";

export type toastMessage = {
    type:"SUCCESS" | "ERROR",
    message:string
};
interface NotifyState {
    toast:toastMessage | undefined,
    isLogged:boolean
};
const initialState :NotifyState= {
toast:undefined,
isLogged:false
};
const AppToast = createSlice({
   name:"notify",
   initialState,
   reducers:{
    
   }
    
});
console.log(AppToast);
export default AppToast.reducer;