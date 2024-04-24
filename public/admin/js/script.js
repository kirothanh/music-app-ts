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

// Upload Audio
const uploadAudio = document.querySelector("[upload-audio]");
if(uploadAudio) {
  const uploadAudioInput  = uploadAudio.querySelector("[upload-audio-input]");
  const uploadAudioPlay  = uploadAudio.querySelector("[upload-audio-play]");
  const source = uploadAudio.querySelector("source");

  uploadAudioInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if(e.target.files.length) {
      const audio = URL.createObjectURL(file);

      source.src = audio;
      uploadAudioPlay.load();
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