$(document).ready(function(){
  $('.gallery-grid').animate({opacity: 1}, 2500);
});

if(window.innerWidth >= 700) { 
  anime({
    targets: '.gallery-grid',
    scaleY: '.5',
    scaleX: '.5',
    translateY: '-15%',
    translateX: '5%',
    rotate: '3.5deg',
    duration: 5000,
    direction: 'reverse',
    easing: 'easeInOutBack',
  });
};

const photos = ['1040','1062','686','1067','108','65','129','17','165','28','301','564','392','402','419','449',]

const closeBtn = document.querySelector('.close').addEventListener('click', () => {
  overlay.style.display = 'none';
  $(overlayInside).animate({'opacity': '0'}, 'fast');
});
const overlay = document.querySelector('.overlay');
const overlayInside = document.querySelector('.overlay-inner');
const grid = document.querySelector('.gallery-grid');
// const photoSrc = 'https://picsum.photos/300/300/?random=';
const photoLoc = 'https://picsum.photos/id/'
const photoSize = '/300/300';
const size = 16;
let images = [];
let currentImg = 0;

function getRandom(min = 18, max = 42) {
  return Math.ceil(Math.random() * (max - min) + min);
}

// Build array of images 
for(let i = 0; i < size; i++) {
  // let image = photoSrc + i;
  let image = photoLoc + photos[i] + photoSize;
  let price = getRandom();
  images.push({
    image,
    price,
    description: faker.lorem.sentences(getRandom(2, 4)),
    purchase: false,
  });
};

// Build grid HTML
const imageHTML = images.map((img,i) => {
  return `
  <div class="gallery-item">
    <div class="item-overlay">
      <button class="view" data-value="${i}">View</button>
    </div>
    <img src="${img.image}" alt="" />
  </div>`;
}).join('');

grid.innerHTML = imageHTML;


// OVERLAY
let clickedImage = '';
const showcase= document.querySelector('.showcase');
const showcasePrice = document.querySelector('.price');
const switchBtns = document.querySelectorAll('.switch');
const description = document.querySelector('.description span');
const purchase = document.querySelector('.add');

function checkIfPurchased() {
  if(clickedImage.purchase === true ) {
    purchase.innerHTML = 'Added <i class="far fa-thumbs-up"></i>';
    purchase.classList.add('purchased');
  }
  if(clickedImage.purchase === false) {
    purchase.textContent = 'Add To Cart';
    purchase.classList.remove('purchased');
  }
  localStorage.setItem('items', JSON.stringify(images));
}

function handlePurchase() {
  clickedImage.purchase = !clickedImage.purchase;
  checkIfPurchased();
};

purchase.addEventListener('click', handlePurchase);

function handleClick(e) {
  currentImg = e.target.dataset.value;
  
  if(e.target.classList.contains('view')) {
     clickedImage = images[currentImg];
    showcase.innerHTML = `<img src="${clickedImage.image}" alt=""/>`;
    showcasePrice.textContent = `$${clickedImage.price}`;
    description.textContent = `${clickedImage.description}`;
    checkIfPurchased();
    overlay.style.display = 'flex'; 
    $(overlayInside).animate({'opacity': '1'}, 500);
  };
}

function changeImage(e) {
  let direction = e.currentTarget.getAttribute("value");
  if (direction === "right") {
    if (currentImg === images.length - 1) {
      currentImg = 0;
    } else {
      currentImg++;
    } 
  }
  if (direction === "left") {
    if (currentImg === 0) {
      currentImg = images.length - 1;
    } else {
      currentImg--;
    }
  }
  clickedImage = images[currentImg];
  showcase.innerHTML = `<img src="${clickedImage.image}" alt="" />`;
  showcasePrice.textContent = `$${clickedImage.price}`;
  description.textContent = `${clickedImage.description}`;
  checkIfPurchased();
}

switchBtns.forEach(btn => btn.addEventListener('click', changeImage));
grid.addEventListener('click', handleClick);

localStorage.setItem('items', JSON.stringify(images));
