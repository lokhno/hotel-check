import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { Hotels } from "./pages/Hotels";
import { Auth } from "./pages/Auth";

function App() {
    const user = useSelector(({ user }) => {
        return user;
    });
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/auth" element={!user.isAuth ? <Auth /> : <Navigate replace to="/" />} />
                    <Route path="/hotels" element={user.isAuth ? <Hotels /> : <Navigate replace to="/auth" />} />
                    <Route path="/" element={user.isAuth ? <Hotels /> : <Navigate replace to="/auth" />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
