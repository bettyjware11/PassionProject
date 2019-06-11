import React, { Component } from 'react';

class EditExoticStyle extends Component{
    constructor(props) {
        super(props);
        this.state = {
            // This state will hold any successMessages from the server
            successMessage: "",
        };
        console.log("In edit");
        console.log(this.props.entryCollection);
    }

    // This function is run when you submit the form and add a new exotic style
    submitAdditionalExoticStyle = (e) =>{
        // You need preventDefault to stop the page from reloading. If it reloaded the rest of the function wouldn't run.
        e.preventDefault();
        //Call localhost[PORT]/exoticStyle like you would in POSTMAN. It's a POST method as seen below.
        fetch('/exoticStyle', {
            method: "PUT",
            // You need HTML headers so the server knows the data in the HTML body is json.
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            // We want to make the JSON data that's going to the body of the message into a string when we send it to the server.
            body:JSON.stringify({
                _id: this.props.entryCollection._id,
                exoticStyleName: e.target.exoticStyleName.value,
                exoticStyleDetails:{
                    styleImage:e.target.styleImage.value,
                    uniqueColorMix:e.target.uniqueColorMix.value,
                    styleColor: e.target.styleColor.value,
                    comments: e.target.comments.value,
                }
            }),
        })
        // The response or res from your server is pushed into the variable here. Because it's getting a string back we want to use .text()
            .then(data=>data.text())
            // This is saving the string data into the state successMessage
            .then(data=>this.setState({successMessage: data}))
            .then(()=>this.props.changeEdit(false,undefined))
    };

    // The render function will run when you need to update something on the page
    render(){
        // Everything in the return is the JSX that will show up on the page
        return(
            <div>
                <h1>Style Listing</h1>
                {/*This form will run the submitAdditionalExoticStyle function when you hit a button in the form*/}
                <form onSubmit={this.submitAdditionalExoticStyle}>
                    {/*The label and input in the p tag keeps them separated from the rest of the label/inputs because a p tag has a block display by default*/}
                    <p>
                        <label htmlFor="exoticStyleName">Enter the style name:</label>
                        <input type="text" id={"exoticStyleName"} name={"exoticStyleName"} defaultValue={this.props.entryCollection.exoticStyleName}/>
                    </p>

                    <p>
                        <label htmlFor="styleImage">Enter style Image URL:</label>
                        <input type="text" id={"styleImage"} name={"styleImage"} defaultValue={this.props.entryCollection.exoticStyleDetails.styleImage}/>
                    </p>

                    <p>
                        <label htmlFor="uniqueColorMix">Is this a unique color?</label>
                        <input type="text" id={"uniqueColorMix"} name={"uniqueColorMix"} defaultValue={this.props.entryCollection.exoticStyleDetails.uniqueColorMix}/>
                    </p>

                    <p>
                        <label htmlFor="styleColor">What is the style color?</label>
                        <input type="text" id={"styleColor"} name={"styleColor"} defaultValue={this.props.entryCollection.exoticStyleDetails.styleColor}/>
                    </p>

                    <p>
                        <label htmlFor="comments">Style likes/dislikes</label>
                        <input type="text" id={"comments"} name={"comments"} defaultValue={this.props.entryCollection.exoticStyleDetails.comments}/>
                    </p>
                    {/*When you click this button it will send all the form's data to the submitAdditionalExoticStyle because of the onSubmit call in the beginning of the form*/}
                    <button>Submit</button>
                </form>
                {/*This is going to show a successMessage pulled from the database. It was set in the fetch function above*/}
                <div className={"successMessage"}>{this.state.successMessage}</div>
            </div>
        );
    }
}

export default EditExoticStyle;