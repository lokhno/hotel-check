import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { TopMenu } from "../../components/TopMenu";
import { Filters } from "../../components/Filters";
import { Showcase } from "../../components/Showcase";
import { Favorite } from "../../components/Favorite";

import { hotelsActions } from "../../redux/actions";

import "./Hotels.scss";

export const Hotels = () => {
    const dispatch = useDispatch();
    const filters = useSelector((state) => state.filters);
    useEffect(() => {
        dispatch(
            hotelsActions.fetchHotels({
                date: filters.startDate,
                daysCount: filters.daysCount,
                query: filters.location,
            })
        );
    }, [filters]);
    return (
        <div className="hotel-check">
            <TopMenu />
            <div className="hotel-check__contetnt">
                <Filters />
                <Showcase />
                <Favorite />
            </div>
        </div>
    );
};
