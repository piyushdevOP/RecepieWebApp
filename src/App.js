import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./App.css";

const App = () => {
  const APP_ID = "34e2a73b";
  const APP_KEY = "86a4b6b20b88c801b7d41ec35923096e";

  const [recipes, setRecipes] = useState([]);
  const [ search , setSearch] = useState("");
  const [query,setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    console.log(data);
    setRecipes(data.hits);
  };


const updateSearch = e => {
  setSearch (e.target.value);
};
const getSearch = e=>{
  e.preventDefault();
  setQuery(search);
};

  return (
    <div className="App">
      <form onSubmit= {getSearch} className="search-form">
        <input className="search-bar" type="text" value = {search} onChange={(e)=>{updateSearch(e)}}/>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className ="recipes">
      {recipes?recipes.map((recipe) => (
        <Recipe 
         key = {recipe.recipe.label}   
         title = {recipe.recipe.label}
         healthLabels = {recipe.recipe.healthLabels}
         image = {recipe.recipe.image}
         ingredients = {recipe.recipe.ingredients}
         />
      )):null}
      </div>
      
    </div>
  );
};

export default App;

