import React from 'react';
import "./index.scss"


const TransferItem = ({clientValue, className, children, clientIndex}) => {
    const [name, number] = [...clientValue];
      return (
        <div
            className={`transfer-item d-flex flex-nowrap align-items-center justify-content-between ${children ? className : ""} ${clientIndex.callStatus?"":"active"}`}>
            <div
                className=" d-flex flex-column justify-content-around p-0 align-items-start position-relative">
                <span
                    className="phone-book-item-name justify-content-between text-nowrap overflow-hidden"> {name}</span>
                <span className="phone-book-item-number text-nowrap overflow-hidden">{number}</span>
            </div>
            {children}
        </div>
    );
};

export default TransferItem;


