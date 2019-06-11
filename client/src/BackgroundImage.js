class BackgroundImage extends Component {

    render() {
        return (
            <Image source={require('./server/public/images/66831765-beautiful-hair-beauty-brunette-woman-with-long-straight-red-hair.jpg')}>

                {this.props.children}

            </Image>
        )
    }
}