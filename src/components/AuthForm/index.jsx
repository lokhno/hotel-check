import React from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";

import { Field } from "./Field";
import { Button } from "../Button";

import { userActions } from "../../redux/actions";

import "./AuthForm.scss";

const validate = (values) => {
    const checkRusLetters = (str) => {
        return !str.split("").filter((item) => {
            if (
                (item.charCodeAt() >= "а".charCodeAt() && item.charCodeAt() <= "я".charCodeAt()) ||
                (item.charCodeAt() >= "А".charCodeAt() && item.charCodeAt() <= "Я".charCodeAt())
            ) {
                return true;
            }
            return false;
        }).length;
    };
    const errors = {};
    if (!values.password) {
        errors.password = "Поле обязательное для заполнения";
    } else if (values.password.length < 8) {
        errors.password = "В пароле должно быть больше 8 символов";
    } else if (!checkRusLetters(values.password)) {
        errors.password = "Пароль не может содержать русских букв";
    }

    if (!values.login) {
        errors.login = "Поле обязательное для заполнения";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.login)) {
        errors.login = "Некорректный Email";
    }

    return errors;
};

export const AuthForm = () => {
    const dispatch = useDispatch();
    const handleClick = () => {
        if (!formik.errors.login && !formik.errors.password && !!formik.values.login && !!formik.values.password) {
            formik.handleSubmit();
            window.localStorage["hotelLoginStatus"] = "Auth";
            dispatch(userActions.setUserData("Auth"));
        }
    };

    const formik = useFormik({
        initialValues: {
            login: "",
            password: "",
        },
        validate,
        onSubmit: (values) => {},
    });

    return (
        <div className="auth">
            <div className="auth_border">
                <div className="auth__title">Simple Hotel Check</div>

                <Field
                    handleChange={formik.handleChange}
                    type="login"
                    fieldTitle={"Логин"}
                    errorText={formik.errors.login}
                    isError={formik.touched.login && !!formik.errors.login}
                    handleBlur={formik.handleBlur}
                />
                <Field
                    handleChange={formik.handleChange}
                    type="password"
                    fieldTitle={"Пароль"}
                    errorText={formik.errors.password}
                    isError={formik.touched.password && !!formik.errors.password}
                    handleBlur={formik.handleBlur}
                />

                <Button className="auth__enter-button" onClick={handleClick}>
                    Войти{" "}
                </Button>
            </div>
        </div>
    );
};
