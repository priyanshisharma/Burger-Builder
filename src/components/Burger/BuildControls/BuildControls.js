import React from 'react';
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    {label: 'Meat', type: 'meat'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Salad', type: 'salad'}

];
const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Total Price: <strong>{props.price.toFixed(2)}</strong></p>
        {
            controls.map(ctrl => (
                <BuildControl 
                    key = {ctrl.label} 
                    label={ctrl.label}
                    added={() => props.ingredientAdded(ctrl.type)}
                    removed={() => props.ingredientRemoved(ctrl.type)}
                    disabled={props.disabled[ctrl.type]}/>
            ))
        }
        <button 
        className={classes.OrderButton}
        disabled={props.cannot_purchase}
        onClick={props.ordered }>ORDER NOW</button>
    </div>
);
export default buildControls;