import React, {Component} from 'react';
// import ImageUploader from 'react-images-upload';
import DetailedExoticStyle from "./DetailedExoticStyle";
// import AddExoticStyle from "./AddExoticStyle";
// import logo from './logo.svg';


class StyleListing extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // this state (variable) will grab the array of collections straight from the database
            exoticStyleCollectionArray: [],
            // this state (variable) will hold an array of styled HTML for each entry in the database
            mappedExoticStyle: [],
            editCollection: {},
        };
    }

    // This is run when the component is loaded
    componentDidMount() {
        // This called the fetchDatabaseEntries function
        this.fetchDatabaseEntries();
    }

    fetchEditDetails=(e)=>{
        fetch('exoticStyle/edit/'+e.target.name)
            .then(data=>data.json())
            .then(response=>this.setState({editCollection: response}))
            .then(()=>{this.props.changeEdit(true, this.state.editCollection)});
    };



    // Going to GET the URL '/exoticStyle'. The results should be put into JSON, then sent to the exoticStyleCollectionArray
    fetchDatabaseEntries = (e) => {
        //Call localhost[PORT]/phone like you would in POSTMAN. It's GET by default.
        fetch('/exoticStyle')
        // The response or res from your server is pushed into the variable here. It doesn't have to be named data. It can be anything. If it's a collection put data.json(). If it's a string put data.text()
            .then(data => data.json())
            // .then(res => res.text())
            // .then(text => console.log(text))

            // Now that the data is a collection again we want to save it in the exoticStyleCollectionArray state so we can call it in a different function.
            .then(data => this.setState(

                // Once the exoticStyleCollectionArray state is saved I want to run the mappedExoticStyleFunction. I have to call it this way so it doesn't run the function before the data is finished being fetched and saved.
                {exoticStyleCollectionArray:data}, () => this.mappedExoticStyleFunction()));
    };

    // This function will map out our exoticStyleCollectionArray and save the style HTML array in the mappedExoticStyle state.
    mappedExoticStyleFunction() {
        // This is saving the exoticStyleCollectionArray map to the mappedArray variable
        const mappedArray = this.state.exoticStyleCollectionArray.map(
            // For each element in the exoticStyleCollection Array to the following function
            (eachElement) => {
                // You want to style each Element using JSX and give it a key
                return (<div key={eachElement._id}>
                    {/*We want to do all the styling in a different component so we have to send the element as a prop to the component.*/}
                    <DetailedExoticStyle eachElement={eachElement} fetchEditDetails={this.fetchEditDetails}/>
                </div>)
            }
        );
        // Once we're all done the stylized HTML array will be saved in the mappedExoticStyle state
        this.setState({mappedExoticStyle: mappedArray});
    }

    render() {
        return (<div>
            <h1>Exotic Styles</h1>

            {/*<img type="file" src={"https://i.ytimg.com/vi/6qWzQlh4dGA/maxresdefault.jpg"} alt=""/>*/}


            {/*Print out MappedExoticStyle state with the stylized element array*/}
            <h4>{this.state.mappedExoticStyle}</h4>

        </div>);
    }
}

export default StyleListing;
