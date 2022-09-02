var i = 0;
var txt = 'Kailey Wong'; /* The text */
var speed = 80; /* The speed/duration of the effect in milliseconds */
var pagepath = window.location.pathname;

function typeWriter() {
  if (i < txt.length) {
    Array.from(document.querySelectorAll(".title"))[0].innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

switch (pagepath) {
  case ('/code.html'):
    txt = 'coded creations';
    break;
  case ('/design.html'):
    txt = 'designs that shine';
    break;
  case ('/writing.html'):
    txt = 'pen to paper';
    break;
  case ('/music.html'):
    txt = 'musical melodies';
    break;
  case ('/projects.html'):
    txt = 'proactive projects';
    break;
  case ('/resume.html'):
    txt = 'education, experience, etc.';
    break;
  case ('/about.html'):
    txt = 'all about me';
    break;
  default:
    txt = 'Kailey Wong'
}

typeWriter();

