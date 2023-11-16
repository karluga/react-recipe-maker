import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function MyRecipes() {


    return (
        <>
         
         <div className="card"><img className="preview-img" src="https://source.unsplash.com/random/300x200?sig=3" alt="Spaghetti Carbonara"/>
            <a href="/edit-recipe/1">
            <h3>Spaghetti Carbonara</h3>
            </a><p>Classic Italian pasta dish</p></div>

        </>
    );
}

export default MyRecipes;