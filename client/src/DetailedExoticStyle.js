import React, {Component} from 'react';
import Img from 'react-image'

class DetailedExoticStyle extends Component {
    // The render function will run when you need to update something on the page
    render() {
        // Everything in the return is the JSX that will show up on the page
        return (
            <div>
                {/*This is using the props eachElement that was passed to it from the StyleListing component */}
                <p>{this.props.eachElement.exoticStyleName} details
                    image {this.props.eachElement.exoticStyleDetails.styleImage}
                    {this.props.eachElement.exoticStyleDetails.uniqueColorMix}
                    {this.props.eachElement.exoticStyleDetails.styleColor}
                    {this.props.eachElement.exoticStyleDetails.comments}</p>
            </div>
        );
    }
}

export default DetailedExoticStyle;


