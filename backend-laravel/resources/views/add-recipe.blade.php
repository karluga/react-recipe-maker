<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">{{-- from /public --}}
    <script src="https://cdn.ckeditor.com/4.16.0/standard/ckeditor.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <title>Recipe Maker</title>
</head>
<body>
<nav class="nav-bar">
    <div class="links">
    <a href="#">Home</a>
    <a href="#" class="underline">Add recipe</a>
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
    <h1>ADD RECIPE</h1>
    <form class="recipe-input" method="POST" action="{{ route('recipes.store') }}" enctype="multipart/form-data">
        @csrf
        <input type="text" name="title" placeholder="Title">
        <input type="text" name="description" placeholder="Description">
        <p>Recipe Instructions</p>
        <textarea name="instructions" id="editor1"></textarea>
        <p>Image:</p>
        <div class="image-input">
            <input type="file" name="image" id="image" onchange="previewImage(this);">
            <img id="image-preview" src="placeholder.png" alt="Image Preview" width="150">
        </div>
        <p>Difficulty:</p>
        <div class="rating">
            <label>
                <input type="radio" name="difficulty" value="1" />
                <span class="icon">★</span>
            </label>
            <label>
                <input type="radio" name="difficulty" value="2" />
                <span class="icon">★</span>
                <span class="icon">★</span>
              </label>
              <label>
                <input type="radio" name="difficulty" value="3" />
                <span class="icon">★</span>
                <span class="icon">★</span>
                <span class="icon">★</span>   
              </label>
              <label>
                <input type="radio" name="difficulty" value="4" />
                <span class="icon">★</span>
                <span class="icon">★</span>
                <span class="icon">★</span>
                <span class="icon">★</span>
              </label>
              <label>
                <input type="radio" name="difficulty" value="5" />
                <span class="icon">★</span>
                <span class="icon">★</span>
                <span class="icon">★</span>
                <span class="icon">★</span>
                <span class="icon">★</span>
              </label>        </div>
        <input class="button" type="submit" value="Submit">
    </form>
</div>
<script>
    CKEDITOR.replace('editor1');
    document.getElementById('myForm').addEventListener('submit', function (e) {
        e.preventDefault();
        var content = CKEDITOR.instances.editor1.getData();
        // Now you can do something with the 'content' variable, like sending it to the server via AJAX.
    });
    function previewImage(input) {
        const imagePreview = document.getElementById('image-preview');
        if (input.files && input.files[0]) {
            const reader = new FileReader();
            reader.onload = function(e) {
                imagePreview.src = e.target.result;
            };
            reader.readAsDataURL(input.files[0]);
        } else {
            imagePreview.src = '';
        }
    }

</script>
</body>
</html>