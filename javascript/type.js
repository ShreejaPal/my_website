var app = document.getElementById('type');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
  deleteSpeed: 30
});

typewriter
  .typeString('Shreeja Pal is ')
  .typeString('<strong>Amazing</strong>')
  .pauseFor(500)
  .deleteChars(7)
  .typeString('<strong  style="color: #27ae60;">so cool</strong>')
  .pauseFor(1000)
  .start();