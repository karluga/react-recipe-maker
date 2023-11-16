import React, { useState } from 'react';
import axios from 'axios';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function AddRecipe() {
  const [editorContent, setEditorContent] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [titleError, setTitleError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [imagePreview, setImagePreview] = useState('placeholder.png');

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = function (e) {
        setImagePreview(e.target.result);
      };
      reader.readAsDataURL(event.target.files[0]);
    } else {
      setImagePreview('placeholder.png');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const title = event.target.elements.title.value;
    const description = event.target.elements.description.value;
    const instructions = editorContent;
    const image = event.target.elements.image.files[0];
    const difficulty = event.target.elements.stars.value;

    // Check if title and description are empty
    if (!title) {
      setTitleError(true);
    } else {
      setTitleError(false);
    }

    if (!description) {
      setDescriptionError(true);
    } else {
      setDescriptionError(false);
    }

    // If either title or description is empty, do not submit the form
    if (!title || !description) {
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('instructions', instructions);

    if (image) {
      formData.append('image', image);
    }

    formData.append('difficulty', difficulty);

    try {
      const response = await axios.post('https://api.brakis.id.lv/api/recipes', formData);
      console.log('Recipe created:', response.data);
      setShowSuccessModal(true); // Display the success modal on successful form submission
      setTimeout(() => {
        setShowSuccessModal(false); // Hide the success modal after 5 seconds
      }, 5000);
    } catch (error) {
      console.error('Error creating recipe:', error);
      setShowErrorModal(true); // Display the error modal on form submission error
      setTimeout(() => {
        setShowErrorModal(false); // Hide the error modal after 5 seconds
      }, 5000);
    }
  };

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    setEditorContent(data);
  };

    return (
        <>
            <div className="content">
                <h1>ADD RECIPE</h1>

                <form className="recipe-input" onSubmit={handleSubmit} encType="multipart/form-data">
                    <input type="text" name="title" placeholder="title" />
                    {titleError && <div className="error-text">Title is required</div>}
                    <input type="text" name="description" placeholder="description" />
                    {descriptionError && <div className="error-text">Description is required</div>}
                    <CKEditor
                        editor={ClassicEditor}
                        onReady={(editor) => {
                        console.log('Editor is ready to use!', editor);
                        }}
                        onChange={handleEditorChange} // Use the defined callback function
                    />
                    <p>image:</p>
                    <div className="image-input">
            <input type="file" name="image" id="image" accept="image/*" onChange={handleImageChange} />
                        {/* <input type="file" name="image" id="image" onChange="previewImage(this);" /> */}
                        <img id="image-preview" src="placeholder.png" alt="Image Preview" width="150" />
                    </div>
                    <p>difficulty:</p>
                    <div className="rating">
                        <label>
                        <input type="radio" name="stars" value="1" />
                        <span className="icon">★</span>
                        </label>
                        <label>
                        <input type="radio" name="stars" value="2" />
                        <span className="icon">★</span>
                        <span className="icon">★</span>
                        </label>
                        <label>
                        <input type="radio" name="stars" value="3" checked/>
                        <span className="icon">★</span>
                        <span className="icon">★</span>
                        <span className="icon">★</span>   
                        </label>
                        <label>
                        <input type="radio" name="stars" value="4" />
                        <span className="icon">★</span>
                        <span className="icon">★</span>
                        <span className="icon">★</span>
                        <span className="icon">★</span>
                        </label>
                        <label>
                        <input type="radio" name="stars" value="5" />
                        <span className="icon">★</span>
                        <span className="icon">★</span>
                        <span className="icon">★</span>
                        <span className="icon">★</span>
                        <span className="icon">★</span>
                        </label>
                    </div>
                    <input className="button" type="submit" value="Submit" />
                </form>
            </div>
            {showSuccessModal && (
        <div className="modal">
          <div className="modal-content success">
            <p>Form data has been saved!</p>
          </div>
        </div>
      )}

      {showErrorModal && (
        <div className="modal">
          <div className="modal-content error">
            <p>Error saving form data. Please try again.</p>
          </div>
        </div>
      )}

        </>
    );
}

export default AddRecipe;