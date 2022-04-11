import React from "react";

import "./Button.scss";

export const Button = ({ children, className, onClick }) => {
    return (
        <button
            className={`${className}`}
            onClick={() => {
                onClick && onClick();
            }}
        >
            {children}
        </button>
    );
};
