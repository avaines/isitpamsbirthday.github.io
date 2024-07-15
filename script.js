// Get the current date
var currentDate = new Date();

const container = document.querySelector('.fireworks')
const fireworks = new Fireworks.default(container, {
  autoresize: true,
  opacity: 0.2,
  acceleration: 1.99,
  gravity: 3.90,
  particles: 150,
  traceLength: 3,
  traceSpeed: 100,
  explosion: 10,
  intensity: 40,
  hue: {
    min: 0,
    max: 64
  },
  rocketsPoint: {
    min: 60,
    max: 50
  }
})

// JSDate is 0 indexed for the month, but not for day, thanks JS
if (currentDate.getMonth() === 6 && currentDate.getDate() === 28) {
  document.getElementById("status").textContent = "Yes! Happy Birthday Pam 🎉";
  document.getElementById("image").src = "images/candles_lit.png";
  fireworks.start()
} else {
  document.getElementById("status").textContent = "No 🙁";
  document.getElementById("image").src = "images/candles_unlit.png";
}
