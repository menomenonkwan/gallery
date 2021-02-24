const grid = document.querySelector('.anime-grid');

// Build Grid for home animation
function buildGrid() {
  for (i = 0; i < 55; i++) {
    const box = document.createElement("div");
    grid.appendChild(box).className = "anime-grid-item";
  }
}

buildGrid();

// Desktop Only animations
if(window.innerWidth >= 700) {
  anime({
    targets: '.anime-grid .anime-grid-item',
    scale: [
      {value: .1, easing: 'easeOutSine', duration: 500},
      {value: 1, easing: 'easeInOutQuad', duration: 1000}
    ],
    delay: anime.stagger(175, {grid: [11, 5], from: 49})
  });
  
  anime({
    targets: 'header img',
    width: {
      value: '-=220px', 
      duration: 1800,
      easing: 'easeInOutSine',
    },
    rotate: {
      value: 360,
      duration: 1800,
      easing: 'easeInOutSine'
    },
    borderRadius: '50%',
    delay: 250, 
    opacity: 1,
  });
  
  anime({
    targets: 'header img',
    translateX: {
      value: '200px', 
    },
    width: {
      value: '-=120px', 
      duration: 1800,
      easing: 'easeInOutSine'
    },
    rotate: {
      value: '+=4turn',
      duration: 1800,
      easing: 'easeInOutSine'
    },
    direction: 'alternate',
    delay: 500
  });
  
  anime({
    targets: '.social',
    translateX: [
      { value: -250 },
      { value: 0, duration: 1000, delay: 500 },
    ],
    duration: 7000
  });
  
  anime({
    targets: '.splash h2, .splash p, nav',
    opacity: 1,
    delay: 4000,
  });
} else {
  anime({
    targets: '.splash h2, .splash p, nav, header img',
    opacity: 1,
  });  
}

// try and remove lines that sometimes pop up
const splash = document.querySelector('.splash');
setTimeout(() => {
  splash.style.background = '#131313';
},2500);


