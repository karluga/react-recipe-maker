<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\RecipeController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/



Route::get('/', [HomeController::class, 'index'])->name('recipes.index');
Route::get('add-recipe/', function () {
    return view('add-recipe');
});

Route::get('edit-recipe/', function () {
    return view('edit-recipe');
});
Route::get('login/', function () {
    return view('login');
});
Route::get('/{id}',[HomeController::class, 'recipe'])->where('id', '[0-9]+');