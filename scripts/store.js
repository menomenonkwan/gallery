anime({
  targets: '#receipt',
  translateX: -1550,
  direction: 'reverse',
  easing: 'easeInOutBack'
});
  anime({
  targets: '#cart',
  translateX: 1550,
  direction: 'reverse',
  easing: 'easeInOutBack'
});

const items = JSON.parse(localStorage.getItem('items')) || [];

// create array of all items marked 'true'
const results = items.filter(item => item.purchase === true);
const cart = document.querySelector('#cart');
const totalItems = document.querySelector('.total-items');
const receipt = document.querySelector('.total span');
const cartIsEmptyHTML = `
    <div class="empty-disclaimer">  
      <h3>Your Cart is empty. Look at what's for sale on the <a href="gallery.html">Gallery</a></h3>
    </div>`;

// put results in editable / displayable array
let displayResults = [...results];

function showTotals() {
  totalItems.textContent = displayResults.length;
  const total = displayResults.reduce((acc, cur) => {
  return acc + cur.price;
}, 0);
receipt.textContent = total;
}

function fillCart() {
// if cart empty
if(displayResults.length === 0) {
  cart.innerHTML = cartIsEmptyHTML; 
  receipt.textContent = 0;
  totalItems.textContent = displayResults.length;
  return;
}
// if cart is full
const cartHTML = displayResults.map((result, i) => {
  return `
    <div class="cart-item">
      <img src="${result.image}" alt="/" />
      <div class="cart-item-desc">
        <p>Description: <span>${result.description}</span></p>
        <h4>$${result.price}</h4>
        <button value="remove" type="button" data-value="${i}">remove</button>
      </div>
    </div>`
}).join('');
cart.innerHTML = cartHTML;  
showTotals();
}

const emptyCart = document.querySelector('button.empty').addEventListener('click', () => {
  displayResults = [];
   
  fillCart();
});

function handleClick(e) {
  if(e.target.value === 'remove') {
    const garbage = e.target.dataset.value;
    displayResults = [...displayResults.slice(0, garbage),...displayResults.slice(parseInt(garbage) + 1) ];
    fillCart();
  }
}
cart.addEventListener('click', handleClick);
fillCart();