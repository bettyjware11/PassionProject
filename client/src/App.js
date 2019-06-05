import React, { Component } from 'react';
import './App.css';
import ExoticStyleHome from "./ExoticStyleHome";
import ExoticStyleSignIn from "./ExoticStyleSignIn";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import ExoticStyleUserRegistration from "./ExoticStyleUserRegistration";
import StyleListing from "./StyleListing";
import AddExoticStyle from "./AddExoticStyle";
import LogOut from "./LogOut";

class App extends Component {
    // constructor to save state (component variables) like isLoggedIn, username, and email
    constructor(props) {
        super(props);
        this.state = {
            // isLoggedIn is false because a user is not logged in and there is no username or email so they're null
            id: null,
            isLoggedIn: false,


        }
    }

    // Changes the state (components variables). It's usually called in child components to change the state in this parent component
    // The parameters in here will be replaced with an id, or true/false if a person is going to be logged in
    loggedInUserInfo = (id, isLoggedIn) => {
        this.setState({id: id, isLoggedIn: isLoggedIn})
    };


    // Reset the component values back to it's original state by pressing the logout link
    userLogout = () => {
        this.setState({id: null, isLoggedIn: false});
    };

    // Renders the JSX for a component
    render(){
        if(this.state.id){
            return(
                <Router>
            <div>
                <h1>Welcome to the Exotic Hair Style Gallery!!!!!</h1>
                {/*This allows Route and Link to work*/}

                    {/*Link provides a link to specified routes*/}
                    <Link to={"/"}>Home</Link>

                    <Link to={"/viewGallery"}>Picture Gallery</Link>
                    <Link to={"/addExoticStyle"}>Add Exotic Style</Link>
                    <Link to={"/signin"}>Sign In</Link>
                    {/*This link has a onClick button to run the logOut function when clicked*/}
                    <Link to={"/"} onClick={this.userLogOut}>Log Out</Link>
                </div>
                    <div>

                    {/*Connects the link to the specified component to render*/}
                    {/*In order to pass in variables or functions in the Route you to use component={()=><YourComponentHere/>}. If you don't have to pass anything you can use component={YourComponentHere} */}
                    <Route exact path={"/"} component={()=><ExoticStyleHome id={this.state.id} isLoggedIn={this.state.isLoggedIn} username={this.state.username}  loggedInUserInfo={this.loggedInUserInfo}/>} />

                    <Route path={"/viewGallery"} component={()=><StyleListing/>} />
                    <Route path={"/addExoticStyle"} component={()=><AddExoticStyle/>} />
                    <Route path={"/signIn"} component={()=><ExoticStyleSignIn/>} />
                    <Route path={"/logout"} component={()=><LogOut/>} />
                    </div>
                </Router>
        );
    }
        else{
            return (
                <Router>
                    <div>
                        <h1>Welcome to the Exotic Hair Style Gallery!!!!!</h1>
                        <Link to={"/"}>Home</Link>
                        <Link to={"/viewGallery"}>Picture Gallery</Link>
                        <Link to={"/addUser"}>Register</Link>
                        </div>


                    <Route exact path={"/"} component={()=><ExoticStyleHome id={this.state.id} isLoggedIn={this.state.isLoggedIn} username={this.state.username}  loggedInUserInfo={this.loggedInUserInfo}/>} />
                    <Route path={"/viewGallery"} component={()=><StyleListing/>} />
                    <Route path={"/addUser"} component={()=><ExoticStyleUserRegistration/>} />
                </Router>
            );
        }

    }


}


export default App;