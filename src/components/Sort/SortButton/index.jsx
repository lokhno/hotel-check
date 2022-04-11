import React from "react";
import cn from "classnames";

import "./SortButton.scss";

export const SortButton = ({ className, children, onClick, filterState }) => {
    return (
        <div
            className={cn(`sort-item ${className}`, { "sort-item_active": filterState !== "" })}
            onClick={() => {
                onClick(children);
            }}
        >
            <div className="sort-item__title">{children}</div>
            <div className="sort-item__position position">
                <div className={cn("position__arrow position__up", { position_active: filterState === "top" })}>
                    <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.5 4.24264L7.43934 5.3033L4.25736 2.12132L1.07538 5.3033L0.0147181 4.24264L4.25736 0L8.5 4.24264Z" />
                    </svg>
                </div>
                <div className={cn("position__arrow position__down", { position_active: filterState === "bottom" })}>
                    <svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.5 1.83245L7.43934 0.77179L4.25736 3.95377L1.07538 0.77179L0.0147181 1.83245L4.25736 6.07509L8.5 1.83245Z" />
                    </svg>
                </div>
            </div>
        </div>
    );
};
