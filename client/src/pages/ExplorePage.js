import React from 'react'
import { useHistory, Link } from 'react-router-dom';
import MovieCreationIcon from '@material-ui/icons/MovieCreation';
import ComputerIcon from '@material-ui/icons/Computer';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import BrushIcon from '@material-ui/icons/Brush';
import DeckIcon from '@material-ui/icons/Deck';
import PetsIcon from '@material-ui/icons/Pets';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';

export default function ExplorePage() {

    // route params
    let history = useHistory();

    return (
        <div className="page">
            <div className="container">
            <div className="row ml-2 mb-2">
                    <h1>Topics & Categories</h1>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="jumbotron category-box">
                            <h1>Categories</h1>
                            <hr className="my-4"></hr>
                            <div className="row">
                                <div className="col-4">
                                    <div className="cat-cell">
                                        <div className="nav-link" activeclassname="active" onClick={() => history.push('/category/1')}>  Beer Styles</div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="cat-cell">
                                        <li className="nav-link" activeclassname="active" onClick={() => history.push('/category/2')}> HomeBrewing </li>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="cat-cell">
                                        <li className="nav-link" activeclassname="active" onClick={() => history.push('/category/3')}> Fermentation </li>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4">
                                    <div className="cat-cell">
                                        <li className="nav-link" activeclassname="active" onClick={() => history.push('/category/4')}> Hops, Malts & Yeast </li>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="cat-cell">
                                        <li className="nav-link" activeclassname="active" onClick={() => history.push('/category/5')}> Barrel Aging </li>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="cat-cell">
                                        <li className="nav-link" activeclassname="active" onClick={() => history.push('/category/6')}> Cellaring </li>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4">
                                    <div className="cat-cell">
                                        <li className="nav-link" activeclassname="active" onClick={() => history.push('/category/7')}> Regional </li>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="cat-cell">
                                        <li className="nav-link" activeclassname="active" onClick={() => history.push('/category/8')}> Wine, Mead & Ciders </li>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="cat-cell">
                                        <li className="nav-link" activeclassname="active" onClick={() => history.push('/category/9')}> Misc. </li>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
