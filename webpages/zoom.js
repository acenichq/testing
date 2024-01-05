document.addEventListener('DOMContentLoaded', function () {
    // Get the modal and the image inside it
    var modal = document.getElementById('imageModal');
    var modalImage = document.getElementById('modalImage');
  
    // Get all images in the grid
    var images = document.querySelectorAll('.maps-grid .product img');
  
    // Loop through each image and add a click event listener
    images.forEach(function (image) {
      image.addEventListener('click', function () {
        // Set the source of the modal image to the clicked image's source
        modalImage.src = this.src;
  
        // Display the modal
        modal.style.display = 'block';
      });
    });
  
    // Close the modal when the close button is clicked
    var closeBtn = document.getElementsByClassName('close')[0];
    closeBtn.addEventListener('click', function () {
      modal.style.display = 'none';
    });
  
    // Close the modal when the user clicks outside the modal content
    window.addEventListener('click', function (event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  });
  