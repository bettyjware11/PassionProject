import React, { Component } from 'react';
import Gallery from "./Gallery";


class ExoticStyleSignIn extends Component{

    // Submission event handler for Signing in an existing user
    submitSignin=(e)=>{
        // Prevents default behavior like reloading the page before the function is run
        e.preventDefault();
        // Fetches the '/login' route in the users.js group as a POST method
        fetch('/users/login',
            {
                method: 'POST',
                // Accept tells the server what kind of data the client is expecting.
                // Content-Type tells the server which kind of data the client is sending in the body
                headers:{
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
                // Creates a collection for username and password. Because a request can't send a collection, you have to make it a JSON string first
                // e.target is the information being sent from the form input fields by their names give in the input attributes. The value is what was typed.
                body: JSON.stringify({
                    username: e.target.username.value,
                    password: e.target.password.value,
                }),
            })
        // data on the left side is the raw response data the server sent (res.send)
        // On the right side, use that data parameter with the .json function to change data to a readable JSON collection.
            .then(rawData=>rawData.json())
            // response on the left side is the readable JSON collection.
            // on the right side we're running a function. The first line is console logging
            .then(userAndEmail=>{console.log(userAndEmail);
                // If the server (res.send) has a collection with a username in it, run the function below
                if(userAndEmail.username)
                // This is changing the parent component state to the returned username, returned email and isLoggedIn to true
                    return this.props.loggedInUserInfo(userAndEmail.username, userAndEmail.email, true);
                // If the server (res.send) DOES NOT have username in it, run the function below
                else
                // This is changing the parent component state to have the username and password to be null (empty) and isLoggedIn to false
                    return this.props.loggedInUserInfo(null, null, false)});

    };

    render(){
        // If the parent component variable (isLoggedIn) is true, render the return below
        if(this.props.isLoggedIn) {
            return (
                <div>
                    {/*It's getting props.email from the parent component. It was populated by the loggedInUserInfo function.*/}
                    {/*<h1>Your email is: {this.props.email}</h1>*/}
                    <h1>Style Gallery</h1>
                    {/*<img src={"client/src/IMG_0382.JPG"}/>*/}

                    {/*<img type="file" src={"choice-jumbo-braid.jpg"}/>*/}
                    {/*<img type="file" src={"https://images.search.yahoo.com/images/view;_ylt=AwrExdkXdPZciG0AXNQ2nIlQ;_ylu=X3oDMTIzdGI3MDQ1BHNlYwNzcgRzbGsDaW1nBG9pZAMyYjhiNTAxNjBlNjFjNjE1ZDY0YjZjMDIyMThlZWU3ZARncG9zAzQwBGl0A2Jpbmc-?back=https%3A%2F%2Fimages.search.yahoo.com%2Fyhs%2Fsearch%3Fp%3Dhairstyles%2Bapi%2B2017%26fr%3Dyhs-pty-pty_speedtest%26hsimp%3Dyhs-pty_speedtest%26hspart%3Dpty%26tab%3Dorganic%26ri%3D40&w=1280&h=720&imgurl=i.ytimg.com%2Fvi%2F6qWzQlh4dGA%2Fmaxresdefault.jpg&rurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D6qWzQlh4dGA&size=153.4KB&name=Inspiring+Goddess+Braid+Hairstyles+2017+-+YouTube&p=hairstyles+api+2017&oid=2b8b50160e61c615d64b6c02218eee7d&fr2=&fr=yhs-pty-pty_speedtest&tt=Inspiring+Goddess+Braid+Hairstyles+2017+-+YouTube&b=0&ni=49&no=40&ts=&tab=organic&sigr=11bnavrgq&sigb=14e6dj9gu&sigi=11cbvs6ts&sigt=11h36mbpi&sign=11h36mbpi&.crumb=moR2Sxh2SP2&fr=yhs-pty-pty_speedtest&hsimp=yhs-pty_speedtest&hspart=pty"}/>*/}
                    <img type="file" src={"https://i.ytimg.com/vi/6qWzQlh4dGA/maxresdefault.jpg"}/>
                    <img type="file" src={"wpid-img_3222.jpg"}/>
                    <img type="file" src={"8428e7186a24800c67eb08791a8cbe9e.jpg"}/>



                </div>
            );
        }
        // If the parent component variable (isLoggedIn) is false, show a sign in form
        else{
            return(
                <div>
                    {/*Form for entering an existing user information. Once you submit the form it runs submitSignin*/}
                    <form onSubmit={this.submitSignin}>
                        <p>
                            <label htmlFor={"username"}>Enter Username:</label>
                            <input id={"username"} type="text" name='username' placeholder="Enter username" autoFocus/>
                        </p>
                        <p>
                            <label htmlFor={"password"}>Enter password:</label>
                            <input id={"password"} type="password" name='password' placeholder="Enter password" />
                        </p>
                        <button>Sign In</button>
                    </form>
                </div>
            );
        }
    }
}

export default ExoticStyleSignIn;
