import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import MovieCreationIcon from '@material-ui/icons/MovieCreation';
import ComputerIcon from '@material-ui/icons/Computer';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import BrushIcon from '@material-ui/icons/Brush';
import DeckIcon from '@material-ui/icons/Deck';
import PetsIcon from '@material-ui/icons/Pets';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';

export const NavData = [
    {
        title: "Home",
        icon: <HomeIcon />,
        link: "/home"
    },
    {
        title: "Categories",
         
        link: "/explore"
    },
    {
        title: "Beer Styles", 
        
        link: "/category/1"
    },
    {
        title: "HomeBrewing", 
        
        link: "/category/2"
    },
    {
        title: "Fermentation", 
        
        link: "/category/3"
    },
    {
        title: "Hops, Malts & Yeast", 
        
        link: "/category/4"
    },
    {
        title: "Barrel Aging", 
        
        link: "/category/5"
    },
    {
        title: "Cellaring", 
        
        link: "/category/6"
    },
    {
        title: "Regional", 
        
        link: "/category/7"
    },
    {
        title: "Wine, Mead & Ciders", 
        
        link: "/category/8"
    },
    {
        title: "Misc. Beer Info", 
        
        link: "/category/9"
    },
]
