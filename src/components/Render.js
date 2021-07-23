// import './App.css';
import Menu from './Menu';
import { Dish} from '../share/Dish';
import React,{Component} from 'react';
import Home from './Home';
import { Switch ,Route} from 'react-router-dom';
class Render extends Component{

  constructor(props)
  {
     super(props);
     this.state={
       Dish:Dish
     }
     
  }

  render(){
    return(
      <div className="App">
      <Switch>
        <Route path="/menu" component={Menu} />
        <Route path="/" component={Home} /> 
      </Switch>
    </div>
    )
  }
}


export default Render;
