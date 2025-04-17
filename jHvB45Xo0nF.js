// Function to handle background removal (basic placeholder functionality)
function removeBackground() {
    const uploadedImage = document.getElementById("uploaded-image");
    if (uploadedImage.src) {
        // You can integrate your actual background removal logic here
        alert("Background removal feature is being developed!");
    } else {
        alert("Please upload an image first.");
    }
}

// Function to handle image upload
document.getElementById("image-upload").addEventListener("change", function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const uploadedImage = document.getElementById("uploaded-image");
        uploadedImage.src = e.target.result;
    };

    if (file) {
        reader.readAsDataURL(file);
    }
});

// Function to handle color picker input
document.getElementById("color-picker").addEventListener("input", function(event) {
    document.body.style.backgroundColor = event.target.value;
});
// 
const creatorName = "Poosala Raju Chary";

// Function to handle the image download
function downloadImage() {
    const uploadedImage = document.getElementById("uploaded-image");
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = uploadedImage.width;
    canvas.height = uploadedImage.height;

    ctx.drawImage(uploadedImage, 0, 0);
    
    // Convert the canvas to PNG and trigger the download
    const link = document.createElement("a");
    link.download = "background_removed.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
}


