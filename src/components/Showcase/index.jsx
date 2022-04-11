import React from "react";
import { useSelector } from "react-redux";
import moment from "moment-with-locales-es6";

import { HoutelCarousel } from "../HoutelCarousel";
import { ShowcaseList } from "./ShowcaseList";

import "./Showcase.scss";

export const Showcase = () => {
    const filters = useSelector((state) => state.filters);
    const hotelsFavoriteList = useSelector((state) => state.hotels.hotelsFavoriteList);
    return (
        <div className="hotel-check__card hotel-check__showcase showcase">
            <div className="showcase__container">
                <div className="showcase__row">
                    <div className="showcase__name">
                        <div className="showcase__title">Отели</div>
                        <div className="showcase__devider">
                            <svg
                                width="11"
                                height="20"
                                viewBox="0 0 11 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1 1.33334L9.66667 10L1 18.6667"
                                    stroke="#A7A7A7"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                        <div className="showcase__city">{filters.location}</div>
                    </div>
                    <div className="showcase__date">
                        {moment(filters.startDate).locale("ru").format("DD MMMM YYYY")}
                    </div>
                </div>
                <HoutelCarousel />
                <div className="showcase__favorite">
                    Добавлено в Избранное:{" "}
                    <span className="showcase__favorite-count">{hotelsFavoriteList.length} </span>
                    {hotelsFavoriteList.length === 0 ? "отелей" : hotelsFavoriteList.length === 1 ? "отель" : "отеля"}
                </div>
                <ShowcaseList className="showcase__showcase-list" />
            </div>
        </div>
    );
};
