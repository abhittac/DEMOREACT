import './App.css';
import Menu from './components/Menu';
import { Dish } from './share/Dish';
import React,{Component} from 'react';
class App extends Component{

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
      <Menu dishes={this.state.Dish} />
    </div>
    )
  }
}


export default App;
