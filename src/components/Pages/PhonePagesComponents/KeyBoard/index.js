import React from 'react';

import "./index.scss"
import "./statics"

import PassCallkeyboardGroup from "./PassCallkeyboardGroup";
import ActiveCallKeyboardGroup from "./ActiveCallKeyboardGroup";

const Keyboard = ({updateEnterValue, toggleConferenceStatus,  conferenceStatus, startCallSession, inComingLineArr, toggleHoldLine}) => {
    return (
        <div
            className={"keyboard-button-group d-flex flex-wrap justify-content-center  align-items-stretch"}>
            {!inComingLineArr.find(elem => elem.callStatus === true ) || conferenceStatus===true ?
                <PassCallkeyboardGroup
                     pdateEnterValue={updateEnterValue}
                /> : <ActiveCallKeyboardGroup
                    toggleConferenceStatus={toggleConferenceStatus}
                    toggleHoldLine={toggleHoldLine}
                    updateEnterValue={updateEnterValue}
                />}
        </div>
    );
};

export default Keyboard;