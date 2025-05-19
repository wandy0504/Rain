// Fireworks
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

class Particle {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.radius = Math.random() * 2 + 1;
    this.color = color;
    this.speedX = Math.random() * 6 - 3;
    this.speedY = Math.random() * 6 - 3;
    this.life = 100;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.life--;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

function createFirework() {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height / 2;
  const color = `hsl(${Math.random() * 360}, 100%, 60%)`;
  for (let i = 0; i < 40; i++) {
    particles.push(new Particle(x, y, color));
  }
}

function animate() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  particles = particles.filter(p => p.life > 0);
  for (let p of particles) {
    p.update();
    p.draw();
  }
  requestAnimationFrame(animate);
}

setInterval(createFirework, 1000);
animate();

// Bunga
function createFlower() {
  const flower = document.createElement('div');
  flower.classList.add('flower');
  flower.style.left = Math.random() * window.innerWidth + 'px';
  flower.style.animationDuration = (Math.random() * 5 + 5) + 's';
  flower.style.background = `radial-gradient(circle, hsl(${Math.random() * 360}, 100%, 75%), #fff)`;
  document.body.appendChild(flower);
  setTimeout(() => flower.remove(), 10000);
}

setInterval(createFlower, 600);

// Pesan Ulang Tahun
function sendMessage() {
  const message = document.getElementById("message").value.trim();
  if (message === "") {
    alert("Yuk, tulis dulu pesannya untuk Nayla 😊");
    return;
  }
  alert(`🎁 Pesanmu untuk Nayla:\n\n"${message}"\n\n❤️ Terima kasih!`);
  document.getElementById("message").value = "";
}

// Wishlist dan Balon
function sendWishlist() {
  const wish = document.getElementById("wishlist").value.trim();
  if (wish === "") {
    alert("Tulis dulu harapan atau keinginanmu ya, Nayla! 🎈");
    return;
  }

  const ballon = document.createElement("div");
  ballon.className = "ballon";
  ballon.style.left = Math.random() * (window.innerWidth - 150) + "px";
  ballon.textContent = wish;
  document.body.appendChild(ballon);
  setTimeout(() => ballon.remove(), 6000);
  document.getElementById("wishlist").value = "";
}

// Pesan yang kamu tulis di VS Code untuk Nayla
const personalMessage = `
  🌸 Hai Nayla! 🌸<br><br>
  Di hari spesial ini, aku ingin mengucapkan selamat ulang tahun yang paling hangat untukmu.<br>
  Semoga semua keinginanmu terkabul, dan hidupmu dipenuhi dengan tawa, cinta, dan kebahagiaan tanpa akhir!<br><br>
  🎂 Teruslah menjadi pribadi yang ceria dan menginspirasi!<br>
  🎁 Hari ini dan seterusnya adalah tentang kamu — jadi nikmatilah setiap momennya!<br><br>
  Dengan cinta 💖
`;

function showPersonalMessage() {
  const msgBox = document.getElementById("specialMessage");
  msgBox.innerHTML = personalMessage;
  msgBox.style.display = "block";

  // Bunga bermekaran di sekitar kotak pesan
  for (let i = 0; i < 20; i++) {
    const flower = document.createElement("div");
    flower.className = "bloom";
    flower.style.top = (msgBox.offsetTop + Math.random() * msgBox.offsetHeight) + "px";
    flower.style.left = (msgBox.offsetLeft + Math.random() * msgBox.offsetWidth) + "px";
    document.body.appendChild(flower);
    setTimeout(() => flower.remove(), 2000);
  }
}

