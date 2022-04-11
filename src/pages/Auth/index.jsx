import React from "react";

import { AuthForm } from "../../components/AuthForm";

import "./Auth.scss";

export const Auth = () => {
    return (
        <div className="page-auth">
            <div className="back"></div>
            <AuthForm />
        </div>
    );
};
