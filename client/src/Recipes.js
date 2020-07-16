import React from 'react';

import { Link } from "react-router-dom";

// Show search results
const Recipes = props => (
    <div>
        <div className="container" id="error-message" style={{"display":"none"}}>
                {<p >No results found</p> }
        </div>
        <div className="container">
            
                {props.recipes.map((recipe,index)=>{
                    return( 
                        <div key={recipe.recipe.label} className="col-md-10" style={{ marginBottom:"2rem" }}>
                            
                                <div key={index}>
                                    <img 
                                    className="foodimage"
                                    src={recipe.recipe.image}
                                    alt={recipe.recipe.label}/>
                                    
                                    
                                    <div className="recipe__text">
                                        <h5 className="recipes__title">
                                            {recipe.recipe.label.length < 20 ? `${recipe.recipe.label}`: `
                                            ${recipe.recipe.label.substring(0,25)}...`}
                                        </h5>
                                    </div>

                                    <div >
                                        <Link className="btn btn-primary" to=
                                            {{pathname: `/eachrecipe/${recipe.recipe.label}`,
                                            state:{eachrecipe: recipe.recipe}
                                            }}>View Recipe</Link>
                                    </div>
                                    
                                </div>
                             </div>
                        );
              
            })}
            
        </div>
    </div>

);

export default Recipes;