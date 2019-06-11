import React, {Component} from 'react';
// import Img from 'react-image'

class DetailedExoticStyle extends Component {


    // The render function will run when you need to update something on the page
    render() {
        // let exoticStyleCollectionArray = this.state.userObject.map(eachElement);

        // Everything in the return is the JSX that will show up on the page
        return (
            <div>
                {/*This is using the props eachElement that was passed to it from the StyleListing component */}
                <p>{this.props.eachElement.exoticStyleName} has <button name={this.props.eachElement._id} onClick={this.props.fetchEditDetails}>Edit</button>
                    image {this.props.eachElement.exoticStyleDetails?(this.props.eachElement.exoticStyleDetails.styleImage):("No image")}
                    {/*{this.props.eachElement.exoticStyleDetails.uniqueColorMix}*/}
                    {/*{this.props.eachElement.exoticStyleDetails.styleColor}*/}
                    {/*{this.props.eachElement.exoticStyleDetails.comments}*/}
                </p>
            </div>
        );
    }
}

export default DetailedExoticStyle;


