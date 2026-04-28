import React from "react";
import {createBrowserRouter} from "react-router";
import EmptyLayout from "../LayOut/EmptyLayout";
import HomePage from "../_Features/HomePage/HomePage.jsx";
import About from "../_Features/About/About.jsx";
import LangList from "../_Features/Language/LangList.jsx";
import AppLayout from "../LayOut/AppLayout.jsx";
import LevelsList from "../_Features/Levels/LevelsList.jsx";

const router = createBrowserRouter([
    {
        element:<AppLayout />,
        children:[
            {path:"/",         element:<HomePage />,     },
            {path:"/About",     element:<About />,     },
            {path:"/Lang",     element:<LangList />,     },
            {path:"/Lvl",     element:<LevelsList />,     },
        ]
    },
]);

import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import LanguageIcon from '@mui/icons-material/Language';
import StairsIcon from '@mui/icons-material/Stairs';

export const navItems = [
    {path:"/", name:"ראשי", icon:<HomeIcon />},
    {path:"/About", name:"אודות", icon:<InfoIcon />},
    {path:"/Lang", name:"שפות", icon:<LanguageIcon />},
    {path:"/Lvl", name:"רמות", icon:<StairsIcon />},
]

export default router;

