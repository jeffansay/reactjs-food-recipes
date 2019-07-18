import React, { Component } from 'react';
import RecipeList from '../components/RecipeList'
import Search from '../components/Search'
import { recipeData } from '../assets/data/tempList'
class Recipes extends Component {
    constructor(props) {
        super(props)
    }
    state = {
        recipes: recipeData,
        search: ''
    }

    handleChange = e => {
        this.setState({
            search: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.search, '--search input')
        this.setState({
            search: ''
        })
    }

    render() {
        console.log(this.state.recipes, "--recipes")
        return (
            <React.Fragment>
                <Search search={this.state.search} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
                <RecipeList recipes={this.state.recipes}/>
            </React.Fragment>
        );
    }
}

export default Recipes;
