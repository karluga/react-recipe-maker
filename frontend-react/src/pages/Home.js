import React, { useEffect, useState } from 'react';
import axios from 'axios';
//ja
function Home() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Define the API endpoint URL
    const apiUrl = 'https://api.brakis.id.lv/api/recipes';

    // Fetch data from the API using Axios
    axios.get(apiUrl)
      .then(response => {
        // Update the state with the fetched data
        setRecipes(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
      <div className="content">
        <h1>POPULAR RECIPES</h1>
        <div className="container">
          {recipes.map(recipe => (
            <div className="card" key={recipe.id}>
              <img className="preview-img" src="https://source.unsplash.com/random/300x200?sig=3" alt={recipe.recipe_title} />
              <a href={`/recipe/${recipe.id}`}>
                <h3>{recipe.recipe_title}</h3>
              </a>
              <p>{recipe.recipe_description}</p>
              {/* Render stars and other recipe details */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
