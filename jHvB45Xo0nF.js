const upload = document.getElementById('upload');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const colorPicker = document.getElementById('colorPicker');
const removeBgBtn = document.getElementById('removeBgBtn');
let image = new Image();
let imageDataURL = '';
let currentBackground = null;

upload.addEventListener('change', (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.onload = function (event) {
    image.onload = function () {
      canvas.width = image.width;
      canvas.height = image.height;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(image, 0, 0);
      imageDataURL = event.target.result;
    };
    image.src = event.target.result;
  };
  if (file) reader.readAsDataURL(file);
});

removeBgBtn.addEventListener('click', () => {
  const selectedColor = hexToRgb(colorPicker.value);
  const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imgData.data;

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i],
      g = data[i + 1],
      b = data[i + 2];

    const distance = Math.sqrt(
      Math.pow(r - selectedColor.r, 2) +
      Math.pow(g - selectedColor.g, 2) +
      Math.pow(b - selectedColor.b, 2)
    );

    if (distance < 80) {
      data[i + 3] = 0;
    }
  }

  ctx.putImageData(imgData, 0, 0);
  drawWithBackground();
});

document.querySelectorAll('.bg-thumb').forEach(img => {
  img.addEventListener('click', () => {
    currentBackground = img.src;
    drawWithBackground();
  });
});

function drawWithBackground() {
  const tempImage = new Image();
  tempImage.src = canvas.toDataURL();
  tempImage.onload = () => {
    if (currentBackground) {
      const bg = new Image();
      bg.src = currentBackground;
      bg.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(tempImage, 0, 0, canvas.width, canvas.height);
      };
    }
  };
}

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      }
    : null;
}

function downloadImage(format) {
  const link = document.createElement('a');
  link.download = `edited-image.${format}`;
  link.href = canvas.toDataURL(`image/${format}`);
  link.click();
}
