import React from "react";
import CustomNavBar from "./CustomNavBar";
import Footer from "./Footer";
import './Base.css'; // Import CSS for styling

const Base = ({ title = "Welcome to our website", children }) => {
    return (
        <div className="base-container">
            <CustomNavBar /> {/* Render the navigation bar */}
            <main className="content">
                {children} {/* Render the child components */}
            </main>
            <Footer /> {/* Render the footer */}
        </div>
    );
}

export default Base;
