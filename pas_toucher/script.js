const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = [];
const maxStars = 100;

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Star() {
  this.x = random(0, canvas.width);
  this.y = random(0, canvas.height);
  this.vx = random(-5, 5);
  this.vy = random(-5, 5);
  this.radius = random(1, 3);
}

for (let i = 0; i < maxStars; i++) {
  stars.push(new Star());
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < maxStars; i++) {
    const star = stars[i];

    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = '#fff';
    ctx.fill();

    star.x += star.vx;
    star.y += star.vy;

    if (star.x < 0 || star.x > canvas.width || star.y < 0 || star.y > canvas.height) {
      star.x = random(0, canvas.width);
      star.y = random(0, canvas.height);
    }
  }

  requestAnimationFrame(animate);
}

animate();


/*  ---------------------------------------------------------------*/


function createStar() {
  const star = document.createElement('div');
  star.className = 'star';
  star.style.top = Math.random() * window.innerHeight + 'px';
  star.style.left = Math.random() * window.innerWidth + 'px';
  star.style.animationDelay = Math.random() * 10 + 's';
  document.getElementById('stars').appendChild(star);
}

for (let i = 0; i < 100; i++) {
  createStar();
}

setInterval(createStar, 100);



