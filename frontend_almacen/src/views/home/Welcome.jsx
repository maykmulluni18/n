import React from "react";
import { useSelector } from "react-redux";
import "./everybody.scss";

const Welcome = () => {
    const { user } = useSelector((state) => state.auth);

    return (
        <div className="Container">
            <div className="listtitle">
                Bienvenidos al Sub - Almacen central
                <h4>
                    holas
                    <strong>{user && user.username}</strong>
                </h4>
            </div>
        </div>
    )
}

export default Welcome;