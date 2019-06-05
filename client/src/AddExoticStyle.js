import React, { Component } from 'react';

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
        fetch('exoticStyles/addStyle', {
            method: "POST",
            // You need HTML headers so the server knows the data in the HTML body is json.
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            // We want to make the JSON data that's going to the body of the message into a string when we send it to the server.
            body:JSON.stringify({
                id: e.target.id.value,
                username: e.target.username.value,
                profileImage: e.target.profileImage.value,
                styleName: e.target.exoticStyles.styleName.value,
                styleImage: e.target.exoticStyles.styleImage.value,
                uniqueColorMix: e.target.exoticStyles.uniqueColorMix.value,
                styleColor: e.target.exoticStyles.styleColor.value,
                comments: e.target.exoticStyles.comments.value
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
                        <label htmlFor={'id'}>Enter your user ID:</label>
                        <input type="text" id={"id"} name={"id"}/>
                    </p>
                    <p>
                        <label htmlFor={'username'}>Enter your username:</label>
                        <input type="text" id={"username"} name={"username"}/>
                    </p>
                    <p>
                        <label htmlFor={'profileImage'}>Profile image URL:</label>
                        <input type="text" id={"profileImage"} name={"profileImage"}/>
                    </p>
                    <p>
                        <label htmlFor={'styleName'}>Enter the style name:</label>
                        <input type="text" id={"styleName"} name={"exoticStyles.styleName"}/>
                    </p>
                    <p>
                        <label htmlFor={'styleImage'}>Exotic Style Image URL:</label>
                        <input type="text" id={'styleImage'} name={"exoticStyles.styleImage"}/>
                    </p>
                    <p>
                        <label htmlFor={'uniqueColorMix'}>Is this a unique color mix?</label>
                        <input type="text" id={"uniqueColorMix"} name={"exoticStyles.uniqueColorMix"}/>
                    </p>

                    <p>
                        <label htmlFor={'styleColor'}>What is the style color?</label>
                        <input type="text" id={"styleColor"} name={"exoticStyles.styleColor"}/>
                    </p>

                    <p>
                        <label htmlFor={'uniqueColorChoice'}>Which color choice did you create?</label>
                        <input type="text" id={"uniqueColorChoice"} name={"uniqueColorChoice"}/>
                    </p>
                    <p>
                        <label htmlFor={'comments'}>What were your likes/dislikes about this style?</label>
                        <input type="text" id={"comments"} name={"exoticStyles.comments"}/>
                    </p>
                    {/*When you click this button it will send all the form's data to the submitAdditionalMovie because of the onSubmit call in the beginning of the form*/}
                    <input type="submit" value={'Submit'}/>
                </form>
                {/*This is going to show a successMessage pulled from the database. It was set in the fetch function above*/}
                {this.state.message}
            </div>
        );
    }
}

export default AddExoticStyle;
