import React, { Component } from 'react';
import { Media } from 'reactstrap';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: [
                {
                    "userId": 1,
                    "id": 1,
                    "title": "Omlet Nachos",
                    "image": '/assets/images/1.jpg'
                },
                {
                    "userId": 2,
                    "id": 2,
                    "title": "Pizza",
                    "image": '/assets/images/2.jpg'
                },
                {
                    "userId": 3,
                    "id": 3,
                    "title": "Omlet Spinch",
                    "image": '/assets/images/3.jpg'
                },
                {
                    "userId": 4,
                    "id": 4,
                    "title": "Noodles",
                    "image": '/assets/images/4.jpg'
                },
                {
                    "userId": 5,
                    "id": 5,
                    "title": "Fruit Salad",
                    "image": "/assets/images/5.jpg"
                }
            ]
        }

    }
    render() {

        const menu = this.state.dishes.map((dish) => {
            return (
                
                    <div className="d-flex">
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
                        </div>
                    </>
                    )
    }
};
                    export default Menu;