import React from "react";
import { useDispatch } from "react-redux";
import moment from "moment-with-locales-es6";

import { FavoriteItem } from "../FavoriteItem";
import { hotelsActions } from "../../../redux/actions";

import "./FavoriteList.scss";

export const FavoriteList = ({ className, hotelsFavoriteList }) => {
    const dispatch = useDispatch();

    return (
        <div className={`favorite-list ${className}`}>
            {hotelsFavoriteList.length > 0 ? (
                hotelsFavoriteList.map((item) => (
                    <FavoriteItem
                        key={item.hotelId}
                        className="favorite-list__favorite-item"
                        title={item.hotelName}
                        date={moment(item.startDate).format("DD MMMM, YYYY")}
                        price={item.priceFrom}
                        daysCount={item.daysCount}
                        stars={item.stars}
                        onClick={() => {
                            dispatch(
                                hotelsActions.toggleFavorite({
                                    ...item,
                                    startDate: item.startDate,
                                    daysCount: item.daysCount,
                                })
                            );
                        }}
                    />
                ))
            ) : (
                <div className="favorite-list__empty-list">Список избранного пуст</div>
            )}
        </div>
    );
};
