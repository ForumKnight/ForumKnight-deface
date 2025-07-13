// canvas kode biner merah
const canvas = document.createElement('canvas');
canvas.id = "matrix";
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');
let width = window.innerWidth;
let height = window.innerHeight;
canvas.width = width;
canvas.height = height;

const chars = "01";
const fontSize = 16;
const columns = Math.floor(width / fontSize);
const drops = Array(columns).fill(0);

function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = "#ff0000";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const char = chars[Math.floor(Math.random() * chars.length)];
    const x = i * fontSize;
    const y = drops[i] * fontSize;

    ctx.fillText(char, x, y);

    if (y > height && Math.random() > 0.975) drops[i] = 0;
    drops[i]++;
  }
}

setInterval(drawMatrix, 33);

window.addEventListener("resize", () => {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
});

document.body.innerHTML += `
  <h1 style="text-align:center;font-size:3em;margin-top:60px;color:red;text-shadow:0 0 20px red;">
    Forum Knight
  </h1>

  <div style="text-align:center;margin-top:30px;">
    <img src="https://www.dropbox.com/scl/fi/fyfryhi96j66fpqpnjflc/IMG-20250616-WA0717.jpg?rlkey=22ruth32wgvk8rbolqaoyyfx0&dl=1" style="width:220px;border-radius:4px;box-shadow:0 0 15px #000;">
  </div>

  <div style="text-align:center;margin-top:40px;font-weight:bold;">
    <p style="display:inline-block;position:relative;animation:slide-right 10s linear infinite;white-space:nowrap;font-size:1.4em;color:red;text-shadow:0 0 15px red;">
      MOHON PERBAIKI KEAMANAN ANDA
    </p>
    <p class="fade-text" style="font-size:2em;margin-top:10px;color:red;text-shadow:0 0 10px red;">
      KAMI MENGETAHUI
    </p>
    <p class="fade-text" style="font-size:2em;color:red;text-shadow:0 0 10px red;">
      SEPENUHNYA TENTANG
    </p>
    <p class="fade-text" style="font-size:2em;color:red;text-shadow:0 0 10px red;">
      ANDA
    </p>
  </div>

  <footer style="position:fixed;bottom:20px;width:100%;text-align:center;color:#ccc;">
    ForumKnight - 2025
  </footer>

  <audio autoplay loop hidden>
    <source src="https://dl.dropboxusercontent.com/scl/fi/rxhw3mzt5jcrvry8yb20r/creepy.mp3?rlkey=jsq4dzx0wn5f6yj8x6wj5jhxt" type="audio/mpeg">
  </audio>

  <style>
    @keyframes slide-right {
      0% { left: -100%; opacity: 0; }
      10% { opacity: 1; }
      90% { opacity: 1; }
      100% { left: 100%; opacity: 0; }
    }

    @keyframes fadeinout {
      0% { opacity: 0; }
      20% { opacity: 1; }
      80% { opacity: 1; }
      100% { opacity: 0; }
    }

    .fade-text {
      animation: fadeinout 6s ease-in-out infinite;
    }
  </style>
`;
