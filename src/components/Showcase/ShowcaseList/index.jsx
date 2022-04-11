import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Loader from "react-loader-spinner";
import moment from "moment-with-locales-es6";

import { ShowcaseItem } from "../ShowcaseItem";
import { hotelsActions } from "../../../redux/actions";

import "./ShowcaseList.scss";

export const ShowcaseList = ({ className }) => {
    const dispatch = useDispatch();
    const filters = useSelector((state) => state.filters);
    const { hotelsList, hotelsFavoriteList, isLoading } = useSelector((state) => ({
        hotelsList: state.hotels.hotelsList,
        hotelsFavoriteList: state.hotels.hotelsFavoriteList,
        isLoading: state.hotels.isLoading,
    }));

    return (
        <div className={`${className} showcase-list`}>
            {!isLoading ? (
                hotelsList.map((item) => {
                    return (
                        <ShowcaseItem
                            key={item.hotelId}
                            className="showcase-list__showcase-item"
                            title={item.hotelName}
                            date={moment(filters.startDate).format("DD MMMM, YYYY")}
                            price={item.priceFrom}
                            daysCount={filters.daysCount}
                            stars={item.stars}
                            favorite={
                                hotelsFavoriteList.filter((favoriteItem) => favoriteItem.hotelId === item.hotelId)
                                    .length === 1
                            }
                            onClick={() => {
                                dispatch(
                                    hotelsActions.toggleFavorite({
                                        ...item,
                                        startDate: filters.startDate,
                                        daysCount: filters.daysCount,
                                    })
                                );
                            }}
                        />
                    );
                })
            ) : (
                <div className="showcase-list__loader">
                    <Loader type="Oval" color="#41522e" height={80} width={80} />
                </div>
            )}
        </div>
    );
};
