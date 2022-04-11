import React from "react";
import cn from "classnames";

import './Field.scss'

export const Field = ({ type, fieldTitle, errorText, isError, handleChange, handleBlur }) => {
    return (
        <div
            className={cn("field", {
                field_error: isError,
                field_login: type === "login",
                field_password: type === "password",
            })}
        >
            <div className="field__name">{fieldTitle}:</div>
            <input
                onBlur={handleBlur}
                onChange={handleChange}
                className="field__input"
                type={type === "password" ? "password" : "text"}
                id={type}
                name={type}
            />
            <div className="field__error-text">{errorText}</div>
        </div>
    );
};
