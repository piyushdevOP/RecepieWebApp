import React from 'react';
import style from './recipe.module.css';


const Recipe = ({title, healthLabels,image,ingredients})=>{
    return (
        <div className ={style.recipe}>
            <h1> {title} </h1>
            <ol className ={style.text}> 
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p className = {style.text}> {healthLabels} </p>
                
            <img src ={image} alt =""/>
        </div>
    )
}
export default Recipe;