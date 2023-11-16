<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\RecipeController;
use App\Http\Controllers\UserController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/


// Publicly accessible 'index' route
Route::get('/recipes', [RecipeController::class, 'index']);
Route::post('/recipes', [RecipeController::class, 'store'])->name('recipes.store');
Route::put('/recipes/{recipe}', [RecipeController::class, 'update']);
Route::delete('/recipes/{recipe}', [RecipeController::class, 'destroy']);
Route::post('/register', [UserController::class, 'register']);

// Protected routes for 'store', 'update', and 'destroy'
Route::middleware('auth:api')->group(function () {

});