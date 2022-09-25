import React from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';

const Message = (props) => {
    if(props.messageType === "error" && props.message){
         NotificationManager.error('Error', props.message);
    }else if(props.messageType === "success" && props.message){
         NotificationManager.success('Success', props.message);
    }
    return (
        <NotificationContainer/>
    )
}



export default Message