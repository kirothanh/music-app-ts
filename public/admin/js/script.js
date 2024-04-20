// Upload Image
const uploadImage = document.querySelector("[upload-image]");
if(uploadImage) {
  const uploadImageInput  = document.querySelector("[upload-image-input]");
  const uploadImagePreview  = document.querySelector("[upload-image-preview]");

  uploadImageInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if(file) {
      uploadImagePreview.src = URL.createObjectURL(file);
    }
  })

  // Delete Upload Image
  const deleteImage = document.querySelector(".btn-delete-img");
  deleteImage.addEventListener("click", () => {
    uploadImageInput.value = "";
    uploadImagePreview.src = ""
  })
  // End Delete Upload Image
}
// End Upload Image