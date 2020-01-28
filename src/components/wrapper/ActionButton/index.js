import React from 'react';
import Button from "../../common/Button";
import "./index.scss"
import KeyboardIcon from "../../common/icon/Keyboard";
import HangUpPhone from "../../common/icon/HangUpPhone";
import MakeCall from "../../common/icon/MakeCall";
import BackSpace from "../../common/icon/BackSpase";
import Subvalue from "../KeyBoard/Subvalue";
import OffMicro from "../../common/icon/OffMic";
import CloseIcon from "../../common/icon/CloseIcon";


const ActionButtonGroup = ({toggleCallStatus, toggleKeyboard, toggleTransfer, keyboardStatus, callStatus, transferCall}) => {
    let element = () => {
        if (toggleTransfer) {
            return {
                value: <KeyboardIcon/>,
                subValue:
                    <Subvalue
                        className="sub-value-call-board-item d-flex flex-nowrap"
                        subValue={keyboardStatus ? "Скрыть" : "Клавиатура"}
                    />

            }
        } else {
            return {
                value: <CloseIcon/>,
                subValue:
                    <Subvalue
                        className="sub-value-call-board-item d-flex flex-nowrap"
                        subValue="Отмена"
                    />
            }
        }
    };

    return (

        <div className="keyboard-wrapper d-flex flex-nowrap justify-content-between align-items-center">
            <Button
                className="common-call-keyboard-button d-flex flex-column align-items-center justify-content-center"
                onClick={!transferCall? toggleTransfer: toggleKeyboard}
                value={
                    <>
                        {element().value}
                        {element().subValue}

                    </>
                }
            />

            <Button
                className={`keyboard-action-button ${callStatus ? "hangUp-phone-button" : "make-call-button"}`}
                onClick={toggleCallStatus}
                value={callStatus ? <HangUpPhone/> : <MakeCall/>}
            />

            <Button
                className="common-call-keyboard-button d-flex flex-column align-items-center justify-content-center"
                onClick={(e) => e.currentTarget.classList.toggle("active")}
                value={
                    callStatus ?
                        <> <OffMicro/>
                            <Subvalue
                                className="sub-value-call-board-item d-flex flex-nowrap"
                                subValue="выключить микрофо"
                            />
                        </> : <BackSpace/>}
            />
        </div>
    );
};

export default ActionButtonGroup;