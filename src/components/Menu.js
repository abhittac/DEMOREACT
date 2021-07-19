import React, { Component } from 'react';
import { Media } from 'reactstrap';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish:null
        }
        
    }
    onDishSelected(dish) {
        this.setState({selectedDish:dish});
        this.renderDish(dish);
    }
    renderDish(dish){
        if(dish!=null){
            return(
                <div className="d-flex" >
                <div className="flex-shrink-0">
                    <img src={dish.image} className="img-thumbnail" height="80" width="80"  alt={dish.title}/>
                </div>
                    <div className="flex-grow-1 ms-3">
                    {dish.title}
                    </div>
            
            </div>
            )
        }
    }
    render() {

        

        const menu = this.props.dishes.map((dish) => {
            return (
                
                    <div className="d-flex" onClick={()=>{this.onDishSelected(dish);}}>
                        <div className="flex-shrink-0">
                            <img src={dish.image} className="img-thumbnail" height="80" width="80"  alt={dish.title}/>
                        </div>
                            <div className="flex-grow-1 ms-3">
                            {dish.title}
                            </div>
                    
                    </div>

                    
                    )
        })
                    return (
                    <>
                        <div className='container'>
                            <div className='row'>
                                <div className='col'>
                                    {menu}
                                </div>
                            </div>
                            <div className='row'>
                            {this.renderDish(this.state.selectedDish)}
                            </div>
                        </div>

                            
                        
                    </>
                    )
    }
};
                    export default Menu;