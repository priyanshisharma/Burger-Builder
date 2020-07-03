import React, {Component} from 'react';

import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/Sidedrawer/SideDrawer'
import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';

class Layout  extends Component{

    state = {
        showSideDrawer: false
    }
    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false}); 
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer
        }});
    }
    
    render(){
        return(
         <Aux>
            <Toolbar drawertogglerClicked={this.sideDrawerToggleHandler}/>
            <SideDrawer 
            closed={this.sideDrawerClosedHandler}
            open={this.state.showSideDrawer} />
            <main className={classes.Content}>
                {this.props.children}
            </main>
        </Aux>
        )
            
    }
}
    

export default Layout;