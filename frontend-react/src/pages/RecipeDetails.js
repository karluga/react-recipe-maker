import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import '../RecipeDetails.css';
function RecipeDetails() {
  const { id } = useParams(); // Use the useParams hook to access route parameters
  const [recipe, setRecipe] = useState(null);
  
  const [comment, setComment] = useState('');
  const [commentsList, setCommentsList] = useState([]);

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    if (comment.trim() !== '') {
      setCommentsList([...commentsList, comment]);
      setComment('');
    }
  };

  useEffect(() => {
    // Use the 'id' variable from useParams to fetch the specific recipe
    axios.get(`https://api.brakis.id.lv/api/recipes/${id}`)
      .then(response => {
        setRecipe(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [id]); // Make sure to include 'id' in the dependency array

  return (
    <div className='container-details'>

    <div className='recipe-box'>
      {recipe ? (
        <div className='recipe-desc'>
          <img className='recipe-pic' src="https://source.unsplash.com/random/300x200?sig=3" />
          <h1>{recipe.recipe_title}</h1>
          <p>{recipe.recipe_description}</p>
          <p dangerouslySetInnerHTML={{ __html: recipe.recipe_directions }} />

          <p>
            <b>Author: </b>
            {recipe.user_id ? recipe.user_id : 'anonymous'}
          </p>
          <div className="stars">
            {Array.from({ length: 5 }).map((_, index) => (
                <FaStar
                key={index}
                color={index < recipe.recipe_difficulty ? "orange" : "grey"}
                />
            ))}
          </div>
          {/* Display other recipe details here */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <div className='comment-box'><h2>Comment Box</h2>
      <form className='comment-form' onSubmit={handleCommentSubmit}>
        <label className='comment-label'>
          Add a Comment:
          <textarea className='comment-input'
            type="text"
            value={comment}
            onChange={handleCommentChange}
          />
        </label>
        <button className='comment-button' type="submit">Submit</button>
      </form>
      <div className='comment-list'>
        <h3>Comments:</h3>
        <ul>
          {commentsList.map((c, index) => (
            <li key={index}>{c}</li>
          ))}
        </ul>
      </div>
    </div>
    </div>
      

    </div>
  );
}
//hjjhkjhg
export default RecipeDetails;
//radffgggrgdffghfgh