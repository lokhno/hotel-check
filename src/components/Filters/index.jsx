import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment-with-locales-es6";

import { Button } from "../Button";
import { Input } from "../Input";
import { filtersActions } from "../../redux/actions";

import "./Filters.scss";

export const Filters = () => {
    const filters = useSelector((state) => state.filters);
    const [location, setLocation] = useState(filters.location);
    const [startDate, setStartDate] = useState(moment(filters.startDate).format("YYYY-MM-DD"));
    const [daysCount, setDaysCount] = useState(filters.daysCount);
    const dispatch = useDispatch();
    const onFilterSubmit = () => {
        dispatch(
            filtersActions.setFilters({
                location,
                startDate: new Date(startDate),
                daysCount,
            })
        );
    };

    return (
        <div>
            <div className="hotel-check__card hotel-check__filters filters">
                <Input
                    label="Локация"
                    type="text"
                    className="filters__filter-item filters__filter-item_location"
                    value={location}
                    setValue={setLocation}
                />
                <Input
                    label="Дата заселения"
                    type="date"
                    className="filters__filter-item filters__filter-item_start-date"
                    value={startDate}
                    setValue={setStartDate}
                />
                <Input
                    label="Количество дней"
                    type="text"
                    className="filters__filter-item filters__filter-item_day-count"
                    value={daysCount}
                    setValue={setDaysCount}
                />
                <Button className="filters__find-button" onClick={onFilterSubmit}>
                    Найти
                </Button>
            </div>
        </div>
    );
};
