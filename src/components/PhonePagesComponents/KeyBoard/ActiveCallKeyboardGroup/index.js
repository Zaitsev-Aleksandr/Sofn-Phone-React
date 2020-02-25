import React from 'react';
import {callKeyValues} from "../statics";
import Subvalue from "../Subvalue";
import Button from "../../../common/Button";

const ActiveCallKeyboardGroup = ({toggleConferenceStatus, toggleHoldLine, inComingLineArr}) => {

    const changeButtonActive = (e) => {
        e.currentTarget.classList.toggle("active")
    };

    const onClickFunction = (i, e) => {
           if (i === 0) {
            toggleConferenceStatus();
            changeButtonActive(e);

        } else if (i === 2) {
            changeButtonActive(e);
            toggleHoldLine()
        }
    };

    const item = callKeyValues.map((elem, i) => <Button
        className={`d-flex flex-column  align-items-center common-call-keyboard-button ${i===0 && inComingLineArr.find(elem=>elem.conferenceActive)? "active": "" }` }
        onClick={e => onClickFunction(i, e)}
        value={(
            <>
                {elem.defaultValue}
                <Subvalue
                    className={"sub-value-call-board-item d-flex flex-nowrap"}
                    subValue={elem.dropDownItems.reduce((sum, item) => sum + item, "")}
                />
            </>
        )}
        key={i}
    />);


    return (
        <>
            {item}
        </>
    );
};

export default ActiveCallKeyboardGroup;
