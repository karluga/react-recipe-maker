<?php

namespace App\Http\Controllers;



use App\Models\Recipe;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\DB;
class HomeController extends Controller

{
    public function index()
    {
        // Retrieve data from the Recipes model
        $recipes = Recipe::all(); // Change this query as needed

        // Pass the data to the 'index' view
        return view('index', ['recipes' => $recipes]);
    }
    public function recipe($id)
{
    // Retrieve the recipe with the specified ID
    $recipe = Recipe::find($id);

    if (!$recipe) {
        // If the recipe with the specified ID is not found, you can return an error view or handle it as needed.
        // For example, you can redirect to the index page with an error message.
        return redirect()->route('index')->with('error', 'Recipe not found');
    }

    // If the recipe is found, pass it to the 'recipe' view
    return view('recipe', ['recipe' => $recipe]);
}
 

}
