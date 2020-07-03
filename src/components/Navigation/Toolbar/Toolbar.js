import React from 'react';
import classes from './Toolbar.module.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToggler from '../Sidedrawer/DrawerToggler/DrawerToggler'

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawerToggler clicked={props.drawertogglerClicked}/>
        <Logo height="80%"/>
        <nav>
            <NavigationItems/>
        </nav>
    </header>
);

export default toolbar;