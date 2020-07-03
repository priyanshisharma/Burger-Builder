import React, {Component} from 'react'
import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button/Button'
class OrderSummary extends Component{

    render () {
        const ingredientSummary = Object.keys(this.props.ingredients).map(
            igKey => {
                return <li key={igKey}>
                        <span style={{textTransform: 'capitalize'}}>{igKey}</span> : {this.props.ingredients[igKey]}
                    </li> 
            }
        );
        return(
            
            <Aux>
                <h3>Your Order!</h3>
                <p>Your sumptuous burger shall contain the following</p>
                <ul>
                    {ingredientSummary}
                    
                </ul>
                <p><strong>Cost Payable</strong> : {this.props.totalPrice}</p>
                <p>Would you like to checkout now?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Aux>
        );
    }
};


export default OrderSummary;