import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Article from './components/Article'
import Footer from './components/Footer'
import darkwirecover from './images/darkwirecover.png';
import axios from 'axios';




class App extends Component {
  state = {
    articleData: []
  }
  componentDidMount(){
    axios.get("https://raw.githubusercontent.com/MonolithOfficial/darkwirejsons/master/articles.json")
    .then(res => {
        this.setState({
          articleData: res.data
        })
        console.log(this.state)
    })
    
  }
  render(){
    return (
      <BrowserRouter>
        <div className="App">
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"/>
          <img id="mainLogo" src={darkwirecover} alt="darkwire"/>
          <Navbar />
          
          
          <Switch>

            <Route exact path="/" component={Home}/>
            <Route path="/:post_id" component={Article}/>
          </Switch>
          <Footer articleProps={this.state.articleData}/>
        </div>
      </BrowserRouter>
      
    );
  }
  
}

export default App;
