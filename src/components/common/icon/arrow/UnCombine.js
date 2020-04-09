import React from 'react';

const UnCombine = ({ onClick }) => {
    return (
        <div onClick={onClick} className="combine-conference-button d-flex flex-column px-2 align-items-center justify-content-center">
        <svg cursor="pointer" width="18" height="13" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.5574 4.84206L18.838 8.56147C18.5809 8.81854 18.1652 8.81854 17.9109 8.56147L17.2928 7.94339C17.0357 7.68631 17.0357 7.27061 17.2928 7.01627L19.9292 4.37987L17.2928 1.74347C17.0357 1.48639 17.0357 1.0707 17.2928 0.816354L17.9081 0.192807C18.1652 -0.0642691 18.5809 -0.0642691 18.8352 0.192807L22.5546 3.91221C22.8145 4.16929 22.8145 4.58499 22.5574 4.84206Z" fill="#213991"/>
            <path d="M22.5574 16.0882L18.838 19.8076C18.5809 20.0646 18.1652 20.0646 17.9109 19.8076L17.2928 19.1895C17.0357 18.9324 17.0357 18.5167 17.2928 18.2624L19.9292 15.626L17.2928 12.9896C17.0357 12.7325 17.0357 12.3168 17.2928 12.0624L17.9081 11.4389C18.1652 11.1818 18.5809 11.1818 18.8352 11.4389L22.5546 15.1583C22.8145 15.4154 22.8145 15.8311 22.5574 16.0882Z" fill="#213991"/>
            <path d="M20.6251 4.4209H15.5463C14.1407 4.4209 12.8382 5.15869 12.1155 6.36429L11.0879 8.07849C10.3652 9.28409 9.06277 10.0219 7.65715 10.0219H5.22241" stroke="#213991" strokeWidth="3" strokeLinecap="round"/>
            <path d="M20.6251 15.623H15.5463C14.1407 15.623 12.8382 14.8853 12.1155 13.6797L11.0879 11.9655C10.3652 10.7599 9.06272 10.0221 7.6571 10.0221H2.42188" stroke="#213991" strokeWidth="3" strokeLinecap="round"/>
        </svg>
           </div>
    );
};

export default UnCombine;