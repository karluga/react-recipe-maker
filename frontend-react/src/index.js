import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import EmptyLayout from "./pages/EmptyLayout";
import NoPage from './pages/NoPage';
import Home from './pages/Home';
import Login from './pages/Login';
import AddRecipe from './pages/AddRecipe';
import EditRecipe from './pages/EditRecipe';
import RecipeDetails from './pages/RecipeDetails';
import Register from "./pages/Register";
import MyRecipes from "./pages/MyRecipes";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="add-recipe" element={<AddRecipe />} />
            <Route path="my-recipes" element={<MyRecipes />} />
            <Route path="edit-recipe/:id" element={<EditRecipe />} />
            <Route path="recipe/:id" element={<RecipeDetails />} />
          </Route>
          <Route path="/login" element={<EmptyLayout />}>
            <Route index element={<Login />} />
          </Route>
          <Route path="/register" element={<EmptyLayout />}>
            <Route index element={<Register />} />
          </Route>
          <Route path="*" element={<NoPage />} />
        </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);