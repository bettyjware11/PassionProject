import React, { Component } from 'react';
import StyleListing from "./StyleListing";
import { Route, Redirect } from 'react-router'


class AddExoticStyle extends Component{
    constructor(props) {
        super(props);
        this.state = {
            // This state will hold any successMessages from the server
            successMessage: "",
        };
    }

    // This function is run when you submit the form and add a new movie
    submitAdditionalExoticStyle = (e) =>{
        // You need preventDefault to stop the page from reloading. If it reloaded the rest of the function wouldn't run.
        e.preventDefault();
        //Call localhost[PORT]/movie like you would in POSTMAN. It's a POST method as seen below.
        fetch('/exoticStyle', {
            method: "POST",
            // You need HTML headers so the server knows the data in the HTML body is json.
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            // We want to make the JSON data that's going to the body of the message into a string when we send it to the server.
            body:JSON.stringify({
                exoticStyleName: e.target.exoticStyleName.value,

            }),
        })
        // The response or res from your server is pushed into the variable here. Because it's getting a string back we want to use .text()
            .then(data=>data.text())
            // This is saving the string data into the state successMessage
            .then(data=>this.setState({successMessage: data}))
    };

    // The render function will run when you need to update something on the page
    render(){

        // Everything in the return is the JSX that will show up on the page
        return(
            <div>
                <h1>Exotic Styles Gallery</h1>
                {/*This form will run the submitAdditionalMovie function when you hit a button in the form*/}
                <form onSubmit={this.submitAdditionalExoticStyle}>
                    {/*The label and input in the p tag keeps them separated from the rest of the label/inputs because a p tag has a block display by default*/}

                    <p>
                        <label htmlFor={'exoticStyleName'}>Enter the style name:</label>
                        <input type="text" id={"exoticStyleName"} name={"exoticStyleName"}/>
                    </p>
                    <p>
                        <label htmlFor={'exoticStyleDetails.styleImage'}>Enter style Image URL:</label>
                        <input type="text" id={"exoticStyleDetails.styleImage"} name={"exoticStyleDetails.styleImage"}/>
                    </p>
                    <p>
                        <label htmlFor={'exoticStyleDetails.uniqueColorMix'}>Is this a unique color?</label>
                        <input type="text" id={"exoticStyleDetails.uniqueColorMix"} name={"exoticStyleDetails.uniqueColorMix"}/>
                    </p>
                    <p>
                        <label htmlFor={'exoticStyleDetails.styleColor'}>What is the style color?</label>
                        <input type="text" id={"exoticStyleDetails.styleColor"} name={"exoticStyleDetails.styleColor"}/>
                    </p>
                    <p>
                        <label htmlFor={'exoticStyleDetails.comments'}>Style likes/dislikes</label>
                        <input type="text" id={"exoticStyleDetails.comments"} name={"exoticStyleDetails.comments"}/>
                    </p>

                    {/*When you click this button it will send all the form's data to the submitAdditionalMovie because of the onSubmit call in the beginning of the form*/}
                    <button>Submit</button>
                </form>
                {/*This is going to show a successMessage pulled from the database. It was set in the fetch function above*/}
                <div className={"successMessage"}>{this.state.successMessage}</div>



            </div>

        );
    }
}

export default AddExoticStyle;
