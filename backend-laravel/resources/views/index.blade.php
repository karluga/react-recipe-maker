<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">{{-- from /public --}}
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <title>Recipe Maker</title>
</head>
<body>
<nav class="nav-bar">
    <div class="links">
    <a href="/" class="underline">Home</a>
    <a href="add-recipe">Add recipe</a>
    </div>
    <div class="search-bar"><form>
        <input type="text" placeholder="Search recipe">
        <i class="fa-solid fa-magnifying-glass"></i>
    </form></div>
    <div class="links">
    <a href="#">Register</a>
    <a href="#">Sign in</a>
    </div>
</nav>
<div class="content">
    <h1>POPULAR RECIPES</h1>
    <div class="container">
    @foreach($recipes as $recipe)
    <div class="card">
        <img class="preview-img" src="{{ asset('images/apple-fruit.jpg') }}">
        <h3><a href='{{$recipe->id}}'>{{$recipe->recipe_title}} </a></h3>
        <p>{{$recipe->recipe_description}}</p> 
        <div class="stars">
            @php
                $difficulty = $recipe->recipe_difficulty;
            @endphp
            @for ($i = 1; $i <= 5; $i++)
                @if ($i <= $difficulty) 
                    <i class="fa-solid fa-star color-orange"></i>
                @else
                    <i class="fa-solid fa-star"></i>
                @endif
            @endfor
        </div>
    </div>
@endforeach
</div>
</div>
</div>
</body>
</html>