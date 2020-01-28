import React from 'react';
import Header from "./Header";
import "./Main.scss"
import Content from "./Content/index.js";

const Main = () => {
    return (
        <div className="main d-flex flex-column">
            <Header />
            <Content />
        </div>
    );
};

export default Main;