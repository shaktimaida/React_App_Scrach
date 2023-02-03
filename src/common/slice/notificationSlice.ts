import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { notification, notificationTypes, notificationState } from "../../common/contract/notification";
import _ from "lodash";

export const initialState:notificationState = {
    notifications: []
}

export const notificationSlice = createSlice({
name: 'notification',
initialState,
reducers: {
    addMessage: (state, payloadAction: PayloadAction<notification>) => {
        payloadAction.payload.type = notificationTypes.message;
        state.notifications = state.notifications.concat(payloadAction.payload);
        return state;
    },
    addWarning: (state, payloadAction: PayloadAction<notification>) => {
        payloadAction.payload.type = notificationTypes.warning;
        state.notifications = state.notifications.concat(payloadAction.payload);
        return state;
    },
    addError:(state, payloadAction:PayloadAction<notification>) => {
        payloadAction.payload.type = notificationTypes.error;
        state.notifications = state.notifications.concat(payloadAction.payload);
        return state;
        
    },
    removeNotification:(state, payloadAction:PayloadAction<string>) => {
        state.notifications = state.notifications.filter(x => x.id != payloadAction.payload);
        return state;
    }

},
});

export default notificationSlice;