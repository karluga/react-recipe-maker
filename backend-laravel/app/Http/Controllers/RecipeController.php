<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Recipe;

class RecipeController extends Controller
{
    // Index method to fetch all recipes
    public function index()
    {
        $recipes = Recipe::all();
        return response()->json($recipes);
    }
    public function show(Recipe $recipe)
    {
        return response()->json($recipe);
    }
    // Store method to create a new recipe
    public function store(Request $request)
    {
        // Validate the incoming request data
        $request->validate([
            'title' => 'required|string',
            'description' => 'required|string',
            'instructions' => 'required|string',
            'image' => 'image|mimes:jpeg,png,jpg,gif|max:2048', // Adjust the image validation as needed
            'difficulty' => 'integer|min:1|max:5',
        ]);

        // Handle image upload (if an image was provided)
        $imagePath = null;
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('recipe_images', 'public');
        }

        // Create a new Recipe instance and store it in the database
        $recipe = Recipe::create([
            'recipe_title' => $request->input('title'),
            'recipe_description' => $request->input('description'),
            'recipe_directions' => $request->input('instructions'),
            // 'image' => $imagePath,
            'recipe_difficulty' => $request->input('difficulty'),
        ]);

        // Redirect to a success page or return a response
        // return redirect()->route('recipes.index')->with('success', 'Recipe added successfully');
        // Return a response with the 201 Created status code and the created recipe
        if ($request->wantsJson()) {
            // If the request expects JSON, return a JSON response with the created recipe
            return response()->json($recipe, 201);
        } else {
            // If it's an HTML request, redirect to the desired page with a success message
            return redirect()->route('recipes.index')->with('success', 'Recipe added successfully');
        }
    }

    // Update method to update a recipe
    public function update(Request $request, Recipe $recipe)
    {
        $request->validate([
            'recipe_title' => 'required',
            'recipe_description' => 'required',
            'recipe_directions' => 'required',
        ]);

        $recipe->update([
            'recipe_title' => $request->input('recipe_title'),
            'recipe_description' => $request->input('recipe_description'),
            'recipe_difficulty' => $request->input('recipe_difficulty', 1),
            'recipe_directions' => $request->input('recipe_directions'),
        ]);

        return response()->json($recipe, 200); // 200 OK status code
    }

    // Destroy method to delete a recipe
    public function destroy(Recipe $recipe)
    {
        $recipe->delete();
        return response()->json(['message' => 'Recipe deleted'], 200); // 200 OK status code
    }
}