import React from "react";
import { Stars } from "../../Stars";

import { FavoriteButton } from "../../FavoriteButton";

import { numberWithSpaces } from "../../../helper";

import "./FavoriteItem.scss";

export const FavoriteItem = ({ className, title, date, price, daysCount, stars, onClick }) => {
    return (
        <div className={`${className} favorite-item`}>
            <div className="favorite-item__row">
                <div className="favorite-item__title">{title}</div>
                <FavoriteButton className="favorite-item__favorite-icon" active={true} onClick={onClick} />
            </div>
            <div className="favorite-item__row">
                <div className="favorite-item__date-info date-info">
                    <div className="date-info__date">{date}</div>
                    <div className="date-info__dash"></div>
                    <div className="date-info__day-count">
                        {daysCount} {daysCount > 1 ? "дней" : "день"}
                    </div>
                </div>
            </div>
            <div className="favorite-item__row">
                <Stars className="favorite-item__stars" count={stars} />
                <div className="favorite-item__price price">
                    <div className="price__name">Price:</div>
                    <div className="price__count">{numberWithSpaces(price)} ₽</div>
                </div>
            </div>
        </div>
    );
};
