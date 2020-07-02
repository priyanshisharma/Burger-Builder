import React from 'react';
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'
const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link='/' active>Home</NavigationItem>
        <NavigationItem link='/'>Home 2 </NavigationItem>
    </ul>
);

export default navigationItems;