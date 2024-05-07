import React from "react"; 
import style from './recipe.module.css'; 
  
const Recipe = ({title,calories,image,ingredients}) =>{ 
    return( 
        <div className={style.recipe}> 
        <img className={style.image} src={image} alt=""/>
            <h1>{title}</h1> 
            <p>Calories : {calories}</p> 
            <ol> 
                {ingredients.map(ingredient=>( 
                    <li>{ingredient.text}</li> 
                ))} 
            </ol> 
              
<p>Calories : {calories}</p> 
  
            
  
        </div> 
    ); 
  
} 
export default Recipe;