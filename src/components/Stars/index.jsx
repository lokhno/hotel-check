import React from "react";
import { StarsItem } from "./StarsItem";

import "./Stars.scss";

export const Stars = ({className, count}) => {
    return (
        <div className={`${className} stars`}>
            <StarsItem active={count > 0} />
            <StarsItem active={count > 1} />
            <StarsItem active={count > 2} />
            <StarsItem active={count > 3}/>
            <StarsItem active={count > 4}/>
        </div>
    );
};
