<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Recipe extends Model
{
    use HasFactory;

    protected $table = 'recipes';

    protected $fillable = [
        'user_id',
        'recipe_title',
        'recipe_description',
        'recipe_difficulty',
        'recipe_directions',
    ];
    public $timestamps = false; // Disable timestamps

}
