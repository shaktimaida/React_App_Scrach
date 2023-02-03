import react, {useEffect} from "react";
import { useAppSelector, useAppDispatch } from "../../appHooks";
import { notification, notificationTypes} from "../contract/notification";
import {FaCheck, FaExclamationTriangle, FaWindowClose} from 'react-icons/fa'
import notificationSlice from "../slice/notificationSlice";

const Notification = () : JSX.Element => {
    const state = useAppSelector(x => x.notification);
    const {removeNotification} = notificationSlice.actions;
    const dispatch = useAppDispatch();
    useEffect(()=>{
    }, [state.notifications]);

    const element = state.notifications && state.notifications.length > 0 ? 
    state.notifications.map((notification) => {
            return <div className="notification-item">
                { notification.type == notificationTypes.message ? <FaCheck className="notification-icon" style={{color:"green", border:"solid"}}></FaCheck> : null}
                { notification.type == notificationTypes.warning ? <FaExclamationTriangle className="notification-icon" style={{color:"orange"}}></FaExclamationTriangle>: null}
                { notification.type == notificationTypes.error ? <FaExclamationTriangle className="notification-icon" style={{color:"red"}}></FaExclamationTriangle>: null}
                    <h4 className="notification-message">{notification.message}</h4>
                <FaWindowClose onClick={() => dispatch(removeNotification(notification.id))} className="notification-icon" style={{color:"red", position:"relative",float:"right",top:5,right:5}}></FaWindowClose>
        </div>
          
    })
    
    : <></>

    return <div className= "notification-wrapper">{element}</div>;

};

export default Notification;
