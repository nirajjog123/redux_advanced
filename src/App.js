import React,{Component} from 'react';
import './App.css';
import {connect} from 'react-redux';

class App extends Component {

  // constructor(props){
  //   super(props);
  //   this.state = {
  //     age:21
  //   }
  // }
  
  // ageUp(e){
  
  //   this.setState({age :this.state.age +1});
  // }

  // ageDown(e){
  //   this.setState({age :this.state.age -1});
  // }
  
  render(){
  return (
        
      <div className="App">
    Age : <div>{this.props.age}</div> 
    <button onClick={this.props.ageUp} >ageUp</button>
    <button onClick={this.props.ageDown} >ageDown</button>
    </div>
  );
  }
}

const mapStateToProps = (state) =>{
  return{
    age:state.age
  }
}
const mapDispachToProps = (dispach) =>{
return{
  ageUp :() => dispach({type:'ageUp', value: 1}),
  ageDown :() => dispach({type:'ageDown', value: 1})

};
}

export default connect(mapStateToProps,mapDispachToProps)(App);
