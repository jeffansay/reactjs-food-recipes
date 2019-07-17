import React, { Component } from 'react';
import Recipe from './Recipe'

class RecipeList extends Component {
    render() {
        return (
            <div>
                Im from RecipeList!
                <Recipe />
            </div>
        );
    }
}

export default RecipeList;
