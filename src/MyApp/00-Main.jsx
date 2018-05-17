import React from 'react'
import { HashRouter, Route, Link, Switch } from 'react-router-dom'
import './css/style.css'
 
import Home from './01-Home'
import Page2 from './02-Sum'
import Page3 from './03-String'
 
 
export default class extends React.Component{
    render(){
 
        return(
            <HashRouter>
                <div className="MainContainer">
            
                    <div className="menu1">
                        <Link className="menuButton" to="/">HOME</Link>
                        <Link className="menuButton" to="/2">SUM</Link>
                        <Link className="menuButton" to="/3">STRING</Link>
                    </div>
            
                    <hr/>
 
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/2" component={Page2}/>
                        <Route path="/3" component={Page3}/>
                    </Switch>
 
                    <br/>
                    <hr/>
                    <div>By: Edmundo</div>
            
                </div>
            </HashRouter>
        )
    }
}