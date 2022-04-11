import React from "react";

import { SortButton } from "./SortButton";

import "./Sort.scss";

export const Sort = ({ className, ratingFileterInfo, costFileterInfo }) => {
    const handleFilterClick = (type) => {
        if (type === "Рейтинг") {
            if (ratingFileterInfo.ratingFileter === "top") {
                ratingFileterInfo.setRatingFileter("bottom");
            }
            if (ratingFileterInfo.ratingFileter === "bottom") {
                ratingFileterInfo.setRatingFileter("");
            }
            if (ratingFileterInfo.ratingFileter === "") {
                ratingFileterInfo.setRatingFileter("top");
            }
            costFileterInfo.setCostFileter("");
        } else {
            if (costFileterInfo.costFileter === "top") {
                costFileterInfo.setCostFileter("bottom");
            }
            if (costFileterInfo.costFileter === "bottom") {
                costFileterInfo.setCostFileter("");
            }
            if (costFileterInfo.costFileter === "") {
                costFileterInfo.setCostFileter("top");
            }
            ratingFileterInfo.setRatingFileter("");
        }
    };

    return (
        <div className={`sort ${className}`}>
            <SortButton className="sort__sort-item" onClick={handleFilterClick} filterState={ratingFileterInfo.ratingFileter}>
                Рейтинг
            </SortButton>
            <SortButton className="sort__sort-item" onClick={handleFilterClick} filterState={costFileterInfo.costFileter}>
                Цена
            </SortButton>
        </div>
    );
};
