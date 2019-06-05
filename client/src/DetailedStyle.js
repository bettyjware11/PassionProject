import React, {Component} from 'react';
import Img from 'react-image'

class DetailedStyle extends Component {
    // The render function will run when you need to update something on the page
    render() {
        // Everything in the return is the JSX that will show up on the page
        return (
            <div>
                {/*This is using the props eachElement that was passed to it from the StyleListing component */}
                <p>{this.props.eachElement.exoticStyles.styleName}
                    {this.props.eachElement.exoticStyles.styleImage}
                    {this.props.eachElement.exoticStyles.uniqueColorMix}
                    {this.props.eachElement.exoticStyles.styleColor}
                    {this.props.eachElement.exoticStyles.comments}</p>
            </div>
        );
    }
}

export default DetailedStyle;


