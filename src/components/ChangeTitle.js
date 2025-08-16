import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ChangeTitle() {
    const location = useLocation();
    useEffect(() => {
        if (location.pathname === "/home") {
            document.title = "TextUtils";
        } else if (location.pathname === "/about") {
            document.title = "TextUtils - About";
        } else {
            document.title = "TextUtils";
        }
    }, [location]);
    return null;
}
