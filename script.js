var i = 0;
var txt = 'Kailey Wong';
var speed = 80; /* duration of effect in ms */
var pagepath = window.location.pathname;

function typeWriter() {
  if (i < txt.length) {
    Array.from(document.querySelectorAll(".title"))[0].innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

switch (pagepath) {
  case ('/code/'):
    txt = 'coded creations';
    break;
  case ('/design/'):
    txt = 'designs that shine';
    break;
  case ('/writing/'):
    txt = 'pen to paper';
    break;
  case ('/music/'):
    txt = 'musical melodies';
    break;
  case ('/projects/'):
    txt = 'proactive projects';
    break;
  case ('/resume/'):
    txt = 'education, experience, etc.';
    break;
  case ('/about/'):
    txt = 'all about me';
    break;
  default:
    txt = 'Kailey Wong'
}

typeWriter();