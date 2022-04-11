import React from "react";
import { useDispatch } from "react-redux";

import { userActions } from "../../redux/actions";

import "./TopMenu.scss";

export const TopMenu = () => {
    const dispatch = useDispatch();
    const handleClick = () => {
        window.localStorage["hotelLoginStatus"] = "";
        dispatch(userActions.logout());
    };
    return (
        <div className="hotel-check__top-menu">
            <div className="hotel-check__title">Simple Hotel Check</div>
            <div className="hotel-check__exit exit" onClick={handleClick}>
                <div className="exit__text">Выйти</div>
                <div className="exit__img">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9"
                            stroke="#41522E"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M16 17L21 12L16 7"
                            stroke="#41522E"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M21 12H9"
                            stroke="#41522E"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};
