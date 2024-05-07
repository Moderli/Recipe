// import React from 'react';
import { Link } from "react-router-dom";


import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";


const Home = () => {
  const APP_ID = "6d6687a7";
  const APP_KEY = "276a106691ab94fd9dec2d5082fe0965";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState();
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log('data.hits',data.hits)
  };

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  };

 
  return ( 
    <div className="Home">
      <h1 id="ok">Food fantasy</h1> 
      <form className="search-form" onSubmit={getSearch}  > 
        <input className="search-bar" type="text" value={search} 
             onChange={updateSearch} /> 
        <button className="search-button" type="submit" > 
             Search 
        </button> 
        <Link to='/login' className="btn btn-light my-5">Logout</Link>
      </form> 
      <div className="recipes"> 
        {recipes.map(recipe => ( 
          <Recipe 
            key={recipe.recipe.label} 
            title={recipe.recipe.label} 
            calories={recipe.recipe.calories} 
            image={recipe.recipe.image} 
            ingredients={recipe.recipe.ingredients} 
          /> 
  
        ))} 
      </div> 
  
    </div> 
  ); 
};

export default Home;