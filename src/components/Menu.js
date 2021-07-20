import React, { Component } from 'react'

class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {

            selectedDish: null
        }
    }
    renderDish(dish) {
        if(dish!=null){
        return (
            <div className="row">
                <div className="col-3 col-sm-3 col-md-3">
                </div>
                <div className="col-3 col-sm-3 col-md-3">
                    <div className="card" >
                        <img src={dish.image} className="card-img-top" alt="..." height="180" width="80" />
                        <div className="card-body">
                            <h5 className="card-title">{dish.title}</h5>
                            <p className="card-text">{dish.price}</p>
                        </div>
                    </div>

                </div>
                <div className="col-6 col-sm-6 col-md-6">
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                {dish.avialable[0].name}
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <strong>Rating : </strong> {dish.avialable[0].rating}                        </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                {dish.avialable[1].name}
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <strong>Rating :</strong>  {dish.avialable[1].rating}
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                {dish.avialable[2].name}
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <strong>Rating :</strong> {dish.avialable[2].rating}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    {this.props.dishes.map((dish) => {
                        return (
                            <div className="col-12 sm-12 md-3 col-sm-3 mt-4" onClick={() => {
                                this.setState({ selectedDish: dish })
                            }}>
                                <div className="card" >
                                    <img src={dish.image} className="card-img-top" alt="..." height="180" width="80" />
                                    <div className="card-body">
                                        <h5 className="card-title">{dish.title}</h5>
                                        <p className="card-text">{dish.price}</p>
                                    </div>
                                </div>

                            </div>


                        )
                    })}

                </div>
                <div >{this.renderDish(this.state.selectedDish)}</div>
            </div>
        )
    }


}
export default Menu;
