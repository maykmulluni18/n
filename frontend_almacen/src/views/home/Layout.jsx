import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "./everybody.scss"
const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <div className="home">
                <Sidebar />
                <div className="homecontainer">
                    <Navbar />
                    <div className="Con">
                        <main>{children}</main>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Layout;