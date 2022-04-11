import React from "react";

import "./Input.scss";

export const Input = ({ label, type, className, value, setValue }) => {
    return (
        <div className={`input ${className}`}>
            <label>{label}</label>
            <input
                type={type}
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                }}
            />
        </div>
    );
};
