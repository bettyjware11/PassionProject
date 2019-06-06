import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import ExoticStyleUserRegistration from "./ExoticStyleUserRegistration";
import LogOut from "./LogOut";
import ExoticStyleSignIn from "./ExoticStyleSignIn";
import StyleListing from "./StyleListing";
import AddExoticStyle from "./AddExoticStyle";
import AddUser from "./AddUser";
import DetailedExoticStyle from "./DetailedExoticStyle";

class ExoticStyleHome extends Component{
    // constructor to save state (component variables) like isLoggedIn, username, and email
    constructor(props) {
        super(props);
        this.state={
            // isLoggedIn is false because a user is not logged in and there is no username or email so they're null
            isLoggedIn: false,
            username: null,
            // profileImage: null,
        };
    }

    // Changes the state (components variables). It's usually called in child components to change the state in this parent component
    // The parameters in here will be replaced with a username, email, or true/false if a person is going to be logged in
    loggedInUserInfo =(username, exoticStyle, loggedIn)=>{
        console.log("Clear");
        this.setState({
            username: username,
            // profileImage: profileImage,
            isLoggedIn: loggedIn,
        });
    };

    // Reset the component values back to it's original state by pressing the logout link
    logOut=()=>{
        this.setState({
            isLoggedIn: false,
            username: null,
            // profileImage: null,
        });
        // This is telling the server to clear the cookie (session) data
        fetch('/users/logout')
            .then(data=>data.text())
            // Console log any messages the server sends back
            .then(data=>console.log(data));
    };

    // Renders the JSX for a component
    render(){
        return(
            <div>
                <h1>Welcome to the Exotic Styles Home</h1>
                {/*This allows Route and Link to work*/}
                <Router>
                    {/*Link provides a link to specified routes*/}
                    <Link to={"/"}>Home</Link>
                    <Link to={"/addUser"}>Register</Link>
                    <Link to={"/viewGallery"}>Picture Gallery</Link>
                    <Link to={"/addExoticStyle"}>Add Exotic Style</Link>
                    {/*This link has a onClick button to run the logOut function when clicked*/}
                    <Link to={"/logout"} onClick={this.logOut}>Log Out</Link>
                    {/*Connects the link to the specified component to render*/}
                    {/*In order to pass in variables or functions in the Route you to use component={()=><YourComponentHere/>}. If you don't have to pass anything you can use component={YourComponentHere} */}
                    <Route exact path={"/"} component={()=><ExoticStyleSignIn isLoggedIn={this.state.isLoggedIn} username={this.state.username} email={this.state.exoticStyle} loggedInUserInfo={this.loggedInUserInfo}/>} />
                    <Route path={"/viewGallery"} component={()=><StyleListing/>} />
                    <Route path={"/addUser"} component={()=><AddUser/>} />
                    <Route path={"/addExoticStyle"} component={()=><AddExoticStyle/>} />
                    <Route path={"/logout"} component={()=><LogOut/>} />
                </Router>
            </div>
        );
    }
}

export default ExoticStyleHome;
