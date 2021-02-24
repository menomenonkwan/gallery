$(document).ready(function(){
  // element fade ins
  $('.bio-text').animate({color: '#ffe4e1'}, 1000);
  $('#testimonials').animate({opacity: 1}, 1000);

  $(function(){
    $('.bxslider').bxSlider({
      mode: 'fade',
      captions: true,
      slideWidth: 500
    });
  });
});

// Animate elements in from sides
anime({
  targets: '#testimonials',
  translateX: 1550,
  direction: 'reverse',
  easing: 'easeInOutBack'
});

anime({
  targets: '.bio-text',
  translateX: -1550,
  direction: 'reverse',
  easing: 'easeInOutBack'
});

  


// generate individual review
const generateReviewer = () => {
  const random = faker.random.number({
      'min': 3,
      'max': 5
  });
  return {
    name: faker.name.findName(),
    city: faker.address.city(),
    state: faker.address.stateAbbr(),
    review: faker.lorem.sentences(random),
  };
};

// generate an array of multiple reviews
const generateReviewers = (numReviews = 9) => {
    return Array.from({length: numReviews}, generateReviewer);
}

const testimonials = generateReviewers();

// build HTML of reviews
const testimonialsHTML = testimonials.map(user => `
<figure>
  <blockquote>${user.review}</blockquote>
  <figcaption>${user.name}</figcaption>
  <p>- ${user.city}, ${user.state}</p>
</figure>
`).join('');

const slider = document.querySelector('.bxslider');
slider.innerHTML = testimonialsHTML;
