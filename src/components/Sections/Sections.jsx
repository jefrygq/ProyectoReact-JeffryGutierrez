import Categories from "../Categories/Categories";
import { Link } from "react-router-dom";
import React from "react";

const Sections = React.memo(() => {
    return (
        <>
            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>
            <Categories />
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
        </>
    );
});

export default Sections;