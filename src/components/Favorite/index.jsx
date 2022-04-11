import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { Sort } from "../Sort";
import { FavoriteList } from "./FavoriteList";

import "./Favorite.scss";

const hotelsSort = (type, param, hotels) => {
    if (type === "top") {
        hotels.sort((a, b) => a[param] - b[param]);
    }
    if (type === "bottom") {
        hotels.sort((a, b) => b[param] - a[param]);
    }
    return hotels;
};

export const Favorite = () => {
    const hotelsFavoriteList = useSelector((state) => state.hotels.hotelsFavoriteList);
    const [ratingFileter, setRatingFileter] = useState("");
    const [costFileter, setCostFileter] = useState("");
    const [sortHotelsFavorite, setSortHotelsFavorite] = useState(hotelsFavoriteList);

    useEffect(() => {
        const tmpHotelsFavoriteList = [...hotelsFavoriteList];
        if (ratingFileter !== "") {
            setSortHotelsFavorite(hotelsSort(ratingFileter, "stars", tmpHotelsFavoriteList));
        }
        if (costFileter !== "") {
            setSortHotelsFavorite(hotelsSort(costFileter, "stars", tmpHotelsFavoriteList));
        }
        if (ratingFileter === "" && costFileter === "") {
            setSortHotelsFavorite(tmpHotelsFavoriteList);
        }
    }, [ratingFileter, costFileter, hotelsFavoriteList]);
    return (
        <div className="hotel-check__card hotel-check__favorite favorite">
            <div className="favorite__title">Избранное</div>
            <Sort
                className="favorite__sort"
                ratingFileterInfo={{ ratingFileter, setRatingFileter }}
                costFileterInfo={{ costFileter, setCostFileter }}
            />
            <FavoriteList className="favorite__favorite-list" hotelsFavoriteList={sortHotelsFavorite} />
        </div>
    );
};
