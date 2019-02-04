import React, {Component} from 'react';
class ContentWrapper extends Component {
    state = {
        content: []
    };

    componentDidMount() {
        this.refreshContent();
        // this.fetchShoes(this.props.id)
        //     .then(this.refreshContent)
    }

    refreshContent = res => this.setState({ content: this.state.content });


render (){
    return (
        <div>
            {props.children}
        </div>
    )
    }
}

export default ContentWrapper;
