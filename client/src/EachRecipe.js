import React from 'react';
import { Link } from "react-router-dom";

class EachRecipe extends React.Component {
    state = {
        findrecipe: []
    }
    componentDidMount = async () => {
        this.state.findrecipe = this.props.location.state.eachrecipe;
        console.log(this.state.findrecipe)
        this.setState(this.state.findrecipe)
    }

    renderIngredient(){
        try{
            var arr = this.state.findrecipe.ingredientLines.length;
            if(arr !== 'undefined'){
                var str = '';
                for(let i =0; i < arr;i++){
                   str += `<ul key=${i}> ${this.state.findrecipe.ingredientLines[i]}</ul>`
                } 
                document.getElementById('multiple').innerHTML= str;
            }
        }catch(error){
            console.log(error)
        }
    }

    render(){
        console.log.apply(this.props);
        return(
            
                <div className="eachrecipe_row">
                    <div className="eachrecipe__column1">
                        <div> 
                            <img className="active-recipe__img" src={this.state.findrecipe.image}/>
                        </div>
                    </div>

                    <div className="eachrecipe__column2">
                        <h1>{this.state.findrecipe.label}</h1>
                        <h4 >Ingredient:</h4>
                        <h4 id="multiple">{this.renderIngredient()}</h4>
                        <div>
                            <a href={this.state.findrecipe.url} target="_blank" > 
                            <button className="btn btn-primary" >Get Full Recipe</button>
                            </a>
                            <Link className="btn btn-primary" to= "/">Back</Link>
                        </div> 
                    </div>
                 </div>
        );
    }
}

export default EachRecipe;