import React, { Component } from 'react';
import { recipeData } from '../assets/data/tempDetails'
import { Link } from 'react-router-dom'
class SingleRecipe extends Component {
    constructor(props){
        super(props);
        const id = this.props.match.params.id
        this.state = {
            id: id
        }
    }
    render() {
        return (
            <h4>
                Hello from single pages id: {this.state.id}
            </h4>
        );
    }
}

export default SingleRecipe;
