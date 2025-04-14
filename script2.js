const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

// Set canvas to full screen
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

// Characters - binary, katakana, or alphanumerics
const chars = 'アァイイウエカキクケコサシスセソタチツトナニヌネノハヒフヘホABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

const fontSize = 14;
const columns = canvas.width / fontSize;

// Array of drops - one per column
const drops = Array.from({ length: columns }, () => 1);

function draw() {
  // Black background with slight opacity for fade effect
  ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#013220'; // Green text
  ctx.font = `${fontSize}px monospace`;

  for (let i = 0; i < drops.length; i++) {
    const text = chars.charAt(Math.floor(Math.random() * chars.length));
    const x = i * fontSize;
    const y = drops[i] * fontSize;

    ctx.fillText(text, x, y);

    // Reset drop randomly or when off screen
    if (y > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}

setInterval(draw, 33); // About 30fps

// Adjust canvas size on resize
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
