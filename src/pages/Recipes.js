import React, { Component } from 'react';
import RecipeList from '../components/RecipeList'
import Search from '../components/Search'
import { recipeData } from '../assets/data/tempList'
class Recipes extends Component {
    constructor(props) {
        super(props)
        this.getRecipes = this.getRecipes.bind(this);
    }
    state = {
        recipes: [],
        search: '',
        url: `https://www.food2fork.com/api/search?key=${process.env.REACT_APP_API_KEY}`,
        baseUrl: `https://www.food2fork.com/api/search?key=${process.env.REACT_APP_API_KEY}`,
        query: '&q=',
        error: ''
    }

    // cca0d6ffe2ee2d32d74d7ebb3f314693
    async getRecipes () {
        try {
            const data = await fetch(this.state.url)
            const jsonData = await data.json();

            if(jsonData.recipes.length === 0) {
                this.setState({
                    error: 'sorry but your search did not return any recipes, please try again or  press search icon for the most popular recipes'
                })
            } else {
                this.setState({
                    recipes: jsonData.recipes,
                    error: ''
                })
            }
        
        } catch(error){
            console.log(error)
        }
    }

    componentDidMount() {
        this.getRecipes();
    }
    handleChange = e => {
        this.setState({
            search: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { baseUrl, query, search } = this.state
        this.setState({
           url: `${baseUrl}${query}${search}`,
           search: ''
        }, () => this.getRecipes())
    }

    render() {
        console.log(this.state.recipes, "--recipes")
        return (
            <React.Fragment>
                <Search search={this.state.search} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
                {this.state.error? (<section><div className="row">
                                            <div className="container">
                                            <h2 className="text-orange text-center text-uppercase mt-5">
                                            {this.state.error}    
                                            </h2> 
                                            </div>
                                            </div></section>) :
                                             (<RecipeList recipes={this.state.recipes}/>) }
                
            </React.Fragment>
        );
    }
}

export default Recipes;
