import React from "react";
import {createBrowserRouter} from "react-router";
import EmptyLayout from "../LayOut/EmptyLayout";
import HomePage from "../_Features/HomePage/HomePage.jsx";
import About from "../_Features/About/About.jsx";

const router = createBrowserRouter([
    {
        element:<EmptyLayout />,
        children:[
            {path:"/",         element:<HomePage />,     },
            {path:"/About",     element:<About />,     },
        ]
    },
]);

// import HomeIcon from '@mui/icons-material/Home';
// export const navItems = [
//     { name: 'ראשי'    , path: '/'    , icon: <HomeIcon /> },
// ];

export default router;

