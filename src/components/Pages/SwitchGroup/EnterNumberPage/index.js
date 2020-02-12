import React from 'react';

import DisplayGroup from "../../Display";
import LineGroup from "../../PhonePagesComponents/LineGroup";
import Keyboard from "../../PhonePagesComponents/KeyBoard";
import ActionButtonGroup from "../../PhonePagesComponents/ActionButton";


const EnterNumberPage = ({ endCallSession, toggleConferenceStatus, runCallTimer,  conferenceStatus, toggleMicrophoneStatus, microphoneStatus, toggleHoldLine, startCallSession, keyboardStatus, inComingLineArr, updateEnterValue, updateContactValue, enterValue, contactValueName,contactValueNumber}) => {
    return (
        <>
            <DisplayGroup
                runCallTimer={runCallTimer}
                enterValue={enterValue}
                contactValueName ={contactValueName}
                contactValueNumber={contactValueNumber}
                microphoneStatus={microphoneStatus}
                inComingLineArr={inComingLineArr}
                updateContactValue={updateContactValue}
                updateEnterValue={updateEnterValue}
            />
            <LineGroup
                 inComingLineArr={inComingLineArr}
            />

            <Keyboard
                toggleConferenceStatus={toggleConferenceStatus}
                conferenceStatus={conferenceStatus}
                toggleHoldLine={toggleHoldLine}
                endCallSession={endCallSession}
                startCallSession={startCallSession}
                keyboardStatus={keyboardStatus}
                updateEnterValue={updateEnterValue}
                 inComingLineArr={inComingLineArr}
            />

            <ActionButtonGroup
                conferenceStatus={conferenceStatus}
                toggleMicrophoneStatus={toggleMicrophoneStatus}
                endCallSession={endCallSession}
                startCallSession={startCallSession}
                keyboardStatus={keyboardStatus}
                inComingLineArr={inComingLineArr}
                           />

        </>
    );
};


export default EnterNumberPage;