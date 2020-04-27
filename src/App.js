import React from 'react';
import {Switch,Route} from 'react-router-dom'
import Home from './pages/Home'
import Detail from './componentes/Detail'
 class App extends React.Component{


  render(){
    return (
        <Switch>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/details"  component={Detail} />
        </Switch>
    );  
  }
  }

export default App;
