import React from 'react'
import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button/Button'
const OrderSummary = (props) => {
    
    const ingredientSummary = Object.keys(props.ingredients).map(
        igKey => {
            return <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span> : {props.ingredients[igKey]}
                </li>
        }
    );
    
    
    return (
        <Aux>
            <h3>Your Order!</h3>
            <p>Your sumptuous burger shall contain the following</p>
            <ul>
                {ingredientSummary}
                
            </ul>
            <p><strong>Cost Payable</strong> : {props.totalPrice}</p>
            <p>Would you like to checkout now?</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </Aux>
    );
};
export default OrderSummary;